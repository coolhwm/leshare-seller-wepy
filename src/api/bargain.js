import base from './base';
import Page from '../utils/Page';
import api from './goods'

export default class order extends base {

  /**
   * 分页方法
   */
  static list () {
    const url = `${this.baseUrl}/goods_bargain/bargains`;
    return new Page(url, this._processBargainListItem.bind(this));
  }

  /**
   * 处理方法
   */
  static _processBargainListItem(item) {
    api._processGoodsListItem(item.rule.goods);
    this._processPrice(item);
    this._processStatus(item);
    this._processTime(item);
    return item
  }

  /***
   * 价格处理
   */
  static _processPrice(data) {
    // 一共砍了多少钱
    data.allPrice = (data.details.reduce((prev, current) => prev + current.reducePrice, 0)).toFixed(2);
    let goodsPrice = '';
    if (data.rule.skuDetail != null) {
      goodsPrice = data.rule.skuDetail.price;
    } else {
      goodsPrice = data.rule.goodsPrice;
    }
    // 剩余多少钱
    data.balance = (goodsPrice * 1 - data.allPrice * 1).toFixed(2);
  }

  /***
   * 状态处理
   */
  static _processStatus(item) {
    const BARGAIN_STATUS = {
      PROCESSING: '进行中',
      BARGAINED: '已至底',
      TIMEOUT: '已过期',
      ORDERED: '已下单'
    };
    item.statusText = BARGAIN_STATUS[item.status]
  }
  static _processTime(item) {
    const time = new Date(item.createTime) - new Date() + 1000 * 60 * 60 * 24;
    if (time > 0) {
      let hour = Math.floor(time / 3600000);
      let min = Math.floor((time / 60000) % 60);
      let sec = Math.floor((time / 1000) % 60);
      hour = hour < 10 ? '0' + hour : hour;
      min = min < 10 ? '0' + min : min;
      sec = sec < 10 ? '0' + sec : sec;
      item.spareTime = `剩余${hour}:${min}:${sec}`
    } else {
      item.spareTime = `已结束`
    }
  }
}
