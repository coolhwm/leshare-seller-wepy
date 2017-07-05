import base from './base';
import Page from '../utils/Page';

export default class order extends base {
  static closeReacon = [
    '无法联系上买家', '买家误拍或重拍', '买家无诚意完成交易',
    '已通过银行线下汇款', '已通过同城见面交易', '已通过货到付款交易',
    '已通过网上银行直接汇款', '已缺货无法交易'
  ];
  static statusDict = {
    '0': '全部',
    '1': '等待买家付款',
    '2': '等待卖家发货',
    '3': '卖家已发货',
    '4': '等待买家评价',
    '5': '申请退款中',
    '6': '交易成功',
    '7': '交易关闭',
    '8': '卖家已退款'
  };
  static paymentDict = {
    '0': '线下支付',
    '1': '在线支付'
  };

  static deliveryText = {
    'SELF': '上门自提',
    'CITY': '同城配送',
    'EXPRESS': '快递配送'
  };

  static statusDesc = {
    '1': '等待买家付款，超时订单自动关闭',
    '2': '买家已付款，请您尽快发货',
    '3': '您已发货，请耐心等待买家确认收货',
    '4': '买家已确认收货，请核对收款情况',
    '5': '买家发起退款申请，请您尽快处理',
    '6': '交易已完成，您已收到买家货款',
    '7': '本交易已取消',
    '8': '您已退货成功'
  }

  /**
   * 分页方法
   */
  static page() {
    const url = `${this.baseUrl}/orders`;
    return new Page(url, this._processOrderListItem.bind(this));
  }

  /**
   * 订单详情
   */
  static async detail(orderId) {
    const url = `${this.baseUrl}/orders/${orderId}`;
    const data = await this.get(url);
    return this._processOrderDetail(data);
  }

  /**
   * 物流发货
   */
  static async send(orderId, expressNo, expressType) {
    const url = `${this.baseUrl}/orders/${orderId}/send`;
    const param = {expressNo, expressType};
    return await this.put(url, param);
  }

  /**
   * 订单备注
   */
  static async note(orderId, sellerNote) {
    const url = `${this.baseUrl}/orders/${orderId}/note`;
    const param = {sellerNote};
    return await this.put(url, param);
  }

  /**
   * 关闭订单
   */
  static async close(orderId, note) {
    const url = `${this.baseUrl}/orders/${orderId}/status/close`;
    const param = {orderId, note};
    return await this.put(url, param);
  }

  /**
   * 订单改价
   */
  static async reprice(orderId, param) {
    const url = `${this.baseUrl}/orders/${orderId}/modify_money`;
    return await this.put(url, param);
  }

  /** ********************* 数据处理方法 ********************* **/

  /**
   * 处理订单列表数据
   */
  static _processOrderListItem(order) {
    const status = order.status;
    order.statusText = this.statusDict[status];
    // 所有情况均展现动作条
    order.isAction = true;
    // 处理订单价格
    this._processOrderPrice(order);
    // 处理商品信息
    const goods = order.orderGoodsInfos;
    this._processOrderGoods(goods);
  }

  /**
   * 处理订单详情
   */
  static _processOrderDetail(detail) {

    // 支付方式
    detail.shopName = this.shopName;
    // 处理订单支付方式
    this._processOrderPaymentText(detail);
    // 处理订单状态
    this._processOrderStatusDesc(detail);
    // 处理退款信息
    this._processOrderRefund(detail);
    // 处理物流信息
    this._processOrderTrace(detail);
    // 处理订单配送方式
    this._processOrderDetailDelivery(detail);
    // 处理订单价格
    this._processOrderPrice(detail);
    // 处理地址信息
    this._processOrderAddress(detail);
    // 处理商品信息
    this._processOrderGoods(detail.orderGoodsInfos);
    return detail;
  }

  /**
   * 处理地址信息
   */
  static _processOrderAddress(detail) {
    detail.receiveAddress = {
      fullAddress: detail.address,
      name: detail.receiveName,
      phone: detail.receivePhone
    }
  }

  /**
   * 处理订单支付方式
   */
  static _processOrderPaymentText(detail) {
    detail.paymentText = this.paymentDict[detail.paymentType];
  }

  /**
   * 处理状态描述文本
   */
  static _processOrderStatusDesc(order) {
    const status = order.status;
    order.statusText = this.statusDict[status];
    order.statusDesc = this.statusDesc[status];
    order.isAction = status == 1 || status == 2 || status == 3 || status == 4;
  }

  /**
   * 处理物流配送信息
   */
  static _processOrderDetailDelivery(order) {
    order.deliveryText = this.deliveryText[order.deliveryType];
  }
  /**
   * 处理订单状态
   */
  static _processOrderPrice(order) {
    order.postFee = this._fixedPrice(order.postFee);
    order.dealPrice = this._fixedPrice(order.dealPrice);
    order.finalPrice = this._fixedPrice(order.finalPrice);
    order.couponPrice = this._fixedPrice(order.couponPrice);
  }

  /**
   * 处理商品物流信息
   */
  static _processOrderTrace(order) {
    const express = order.orderExpress;
    if (express == null) {
      // 没有物流信息，不做处理
      return;
    }

    // 有物流，就一定需要展现动作列表
    order.isAction = true;
    order.isExpress = true;
  }

  /**
   * 处理订单的退货信息
   */
  static _processOrderRefund(order) {
    const refunds = order.orderRefunds;
    if (refunds == null || refunds.length < 1) {
      // 订单没有退款信息，不做处理
      return;
    }
    // 展现第一个退款记录
    const refund = refunds[refunds.length - 1];
    // 曾经退款过，就一定需要展现退款记录
    order.isAction = true;
    // 控制展现退款详情字段
    order.isRefund = true;
    // 取出第一条退款记录
    order.curRefund = refund;
  }

  /**
   * 处理订单商品信息
   */
  static _processOrderGoods(goods) {
    if (goods == null || goods.length < 1) {
      return;
    }
    goods.forEach(item => {
      // 处理SKU描述
      const sku = item.goodsSku;
      item.skuText = this._processOrderSku(sku);
    });
  }

  /**
   * 处理SKU的默认值
   */
  static _processOrderSku(goodsSku) {
    let skuText = '';
    if (goodsSku && goodsSku != '') {
      skuText = goodsSku.replace(/:/g, ',');
    }
    return skuText;
  }
  static _fixedPrice(price) {
    if (price == null || isNaN(Number(price))) {
      return null;
    }
    return price.toFixed(2);
  }
}
