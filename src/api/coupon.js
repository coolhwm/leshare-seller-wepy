
import base from './base';
import Page from '../utils/Page';

export default class coupon extends base {
  /**
   * 分页方法
   */
  static page () {
    const url = `${this.baseUrl}/coupons`;
    return new Page(url, this.processCouponItem.bind(this));
  }

  /**
   * 新增卡券
   */
  static async create(coupon) {
    const url = `${this.baseUrl}/coupons`;
    return await this.post(url, coupon);
  }
  /**
   * 删除卡券
   */
  static async remove(couponId) {
    const url = `${this.baseUrl}/coupons/${couponId}`;
    return await this.delete(url);
  }

  /**
   * 数据处理
   */
  static processCouponItem(coupon) {
    coupon.beginTime = this._convertTimestapeToDay(coupon.beginTime);
    coupon.dueTime = this._convertTimestapeToDay(coupon.dueTime);
    coupon.name = coupon.name ? coupon.name : '优惠券';
  }

  /**
   * 处理时间格式
   */
  static _convertTimestapeToDay(timestape) {
    let temp = timestape;
    if (timestape.indexOf(' ') != -1) {
      temp = timestape.substring(0, timestape.indexOf(' '))
    }
    return temp.replace(/-/g, '.');
  }
}
