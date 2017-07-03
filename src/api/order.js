import base from './base';
import Page from '../utils/Page';

export default class order extends base {
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

  /**
   * 分页方法
   */
  static page() {
    const url = `${this.baseUrl}/orders`;
    return new Page(url, this._processOrderListItem.bind(this));
  }

  /**
   * 处理订单列表数据
   */
  static _processOrderListItem(order) {
    const status = order.status;
    order.statusText = this.statusDict[status];
    // 所有情况均展现动作条
    order.isAction = true;
    // order.shopName = this.shopName;
    // 处理订单价格
    this._processOrderPrice(order);
    // 处理商品信息
    const goods = order.orderGoodsInfos;
    this._processOrderGoods(goods);
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
   * 处理订单商品信息
   */
  static _processOrderGoods(goods) {
    if (goods == null || goods.length < 1) {
      return;
    }
    goods.forEach(item => {
      // 处理SKU描述
      const sku = item.goodsSku;
      const skuText = this._processOrderSku(sku);
      item.skuText = skuText;
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
