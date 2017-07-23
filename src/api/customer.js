
import base from './base';
import Page from '../utils/Page';

export default class customer extends base {
  /**
   * 分页方法
   */
  static page(type) {
    if (type == 'PRICE') {
      const url = `${this.baseUrl}/count/customer/price`;
      return new Page(url, this._processPriceCount.bind(this));
    } else if (type == 'TIME') {
      const url = `${this.baseUrl}/count/customer/time`;
      return new Page(url, this._processTimeCount.bind(this));
    } else if (type == 'COUNT') {
      const url = `${this.baseUrl}/count/customer/times`;
      return new Page(url, this._processTimesCount.bind(this));
    }
  }

  /**
   * 数据处理
   */
  static _processPriceCount(item) {
    return {
      id: item.customer.id,
      name: item.customer.nickName,
      avatar: item.customer.avatarUrl,
      key: '交易总额',
      value: '￥' + item.totalPrice.toFixed(2)
    };
  }
  static _processTimeCount(item) {
    return {
      id: item.customer.id,
      name: item.customer.nickName,
      avatar: item.customer.avatarUrl,
      key: '最近购买于',
      value: item.time.substring(0, 10)
    };
  }
  static _processTimesCount(item) {
    return {
      id: item.customer.id,
      name: item.customer.nickName,
      avatar: item.customer.avatarUrl,
      key: '购买次数',
      value: item.times + '次'
    };
  }
}
