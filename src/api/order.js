import base from './base';
import Page from '../utils/Page';
import {TYPE, ACTION, orderUtils as utils} from './order_const';

export default class order extends base {
  static closeReacon = [
    '已缺货无法交易', '协商取消交易', '已通过货到付款交易', '无法联系上买家', '买家误拍或重拍', '其他'
  ];
  /**
   * 分页方法
   */
  static hisPage() {
    const url = `${this.baseUrl}/customers/order_list`;
    return new Page(url, this._processOrderListItem.bind(this));
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
  static async send(orderId, param) {
    const url = `${this.baseUrl}/orders/${orderId}/send`;
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
   * 订单打印
   */
  static async print(orderId) {
    const url = `${this.baseUrl}/orders/${orderId}/print`;
    return await this.put(url);
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
   * 确认收货
   */
  static confirmOrder (orderId) {
    const url = `${this.baseUrl}/orders/${orderId}/status/comments`
    return this.put(url)
  }
  /**
   * 接单
   */
  static take (orderId) {
    const url = `${this.baseUrl}/orders/${orderId}/take_food_order`
    return this.put(url)
  }
  /**
  /**
   * 订单改价
   */
  static async reprice(orderId, param) {
    const url = `${this.baseUrl}/orders/${orderId}/modify_money`;
    return await this.put(url, param);
  }

  /**
   * 同意退款
   */
  static async agreeRefund(orderId) {
    const url = `${this.baseUrl}/orders/${orderId}/refund_money`;
    const param = {
      isAgree: 1
    };
    return await this.put(url, param);
  }

  /**
   * 拒绝退款
   */
  static async rejectRefund(orderId, note) {
    const url = `${this.baseUrl}/orders/${orderId}/refund_money`;
    const param = {
      isAgree: 2,
      disagreeCause: note
    };
    return await this.put(url, param);
  }

  /** ********************* 退款处理 ********************* **/

  /**
   * 根据退款时间生成退款步骤
   */

  static createOrderRefundSetps(refund) {
    let steps = [];

    // 提交申请
    const creareTime = refund.createTime;
    if (creareTime) {
      steps.push(this._createRefundSetp('买家提交退款申请', creareTime));
      steps.push(this._createRefundSetp('请您尽快处理，7天内未处理将自动退款给买家', creareTime));
    }

    // 卖家处理
    const sellerTime = refund.sellerDealtime;
    if (sellerTime) {
      // 卖家同意
      if (refund.isAgree == 1) {
        steps.push(this._createRefundSetp('您已同意退款', sellerTime));
        steps.push(this._createRefundSetp('款项已原路退回买家', sellerTime));
      } else {
        // 卖家不同意
        steps.push(this._createRefundSetp(`您拒绝退款，原因：${refund.disagreeCause}`, sellerTime));
      }
    }

    // 处理结束
    const finishTime = refund.finishTime;
    if (finishTime) {
      // 卖家同意
      if (refund.is_agree == 1) {
        steps.push(this._createRefundSetp('订单退款成功', finishTime));
      } else {
        // 卖家不同意
        steps.push(this._createRefundSetp('订单退款关闭', finishTime));
      }
    }

    // 买家关闭
    const closeTime = refund.closeTime;
    if (closeTime) {
      steps.push(this._createRefundSetp('买家取消退款，交易恢复', closeTime));
    }

    // 改变最后一个状态
    const lastStep = steps[steps.length - 1];
    lastStep.done = true;
    lastStep.current = true;

    // 反转
    steps = steps.reverse();
    return steps;
  }

  static _createRefundSetp(text, time) {
    return {
      text: text,
      timestape: time,
      done: false,
      current: false
    };
  }

  /** ********************* 数据处理方法 ********************* **/

  /**
   * 处理订单列表数据
   */
  static _processOrderListItem(order) {
    // 处理动作
    this._processOrderAction(order);
    this._processOrderStatusDesc(order);
    // 所有情况均展现动作条
    order.isAction = true;
    // 处理订单价格
    this._processOrderPrice(order);
    // 处理商品信息
    const goods = order.orderGoodsInfos;
    this._processOrderGoods(goods);
    // 处理离线支付
    this._processOfflinePayment(order);
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
    // 处理动作
    this._processOrderAction(detail, true);
    // 处理离线支付
    this._processOfflinePayment(detail);
    return detail;
  }

  static _processOfflinePayment(order) {
    const orderType = order.orderType;
    if (orderType != TYPE.OFFLINE) return;
    order.orderGoodsInfos = [{
      imageUrl: 'http://img.leshare.shop/shop/other/wechat_pay.png',
      goodsName: `微信支付 ${order.finalPrice}元`,
      goodsPrice: order.finalPrice,
      count: 1
    }];
    return order;
  }

  /**
   * 处理订单动作
   */
  static _processOrderAction(order, inner = false) {
    const basic = [ACTION.REMARK];
    if (inner) {
      basic.push(ACTION.PRINT);
    }
    const {orderType, paymentType, status} = order;
    const actions = utils.statusActions(orderType, paymentType, status);
    if (actions) {
      const display = inner ? actions.filter(v => v.inner != true) : actions;
      order.actions = basic.concat(display);
    } else {
      order.actions = basic;
    }
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
  static _processOrderPaymentText (detail) {
    detail.paymentText = utils.paymentType(detail.paymentType);
  }


  /**
   * 处理状态描述文本
   */
  static _processOrderStatusDesc (order) {
    const {status, orderType} = order;
    order.statusText = utils.statusName(orderType, status);
    order.statusDesc = utils.statusDesc(order, status);
    // 订单关闭增加关闭原因
    if (order.status == 7 && order.orderCloseNote) {
      const reason = order.orderCloseNote;
      order.statusDesc = `订单已关闭，关闭原因：${reason.note}`;
    }
  }

  /**
   * 处理物流配送信息
   */
  static _processOrderDetailDelivery (order) {
    order.deliveryText = utils.deliveryType(order.deliveryType);
  }
  /**
   * 处理订单状态
   */
  static _processOrderPrice(order) {
    order.postFee = this._fixedPrice(order.postFee);
    order.dealPrice = this._fixedPrice(order.dealPrice);
    order.finalPrice = this._fixedPrice(order.finalPrice);
    order.couponPrice = this._fixedPrice(order.couponPrice);
    order.bonusPrice = this._fixedPrice(order.bonusPrice);
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
      item.imageUrl += '/small';
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
