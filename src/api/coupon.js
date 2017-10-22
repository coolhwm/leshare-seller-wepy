
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
   * 优惠券使用情况分页方法
   */
  static pagePick () {
    // const url = `${this.baseUrl}/coupons`;
    return this.processCouponPickItem.bind(this);
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
   * 查询卡券信息
   */
  static info(couponId) {
    const url = `${this.baseUrl}/coupons/${couponId}`;
    return this.get(url).then(data => {
      this.processCouponItem(data);
      return data;
    });
  }

  /**
   * 编辑卡券
   */
  static async update(couponId, coupon) {
    const url = `${this.baseUrl}/coupons/${couponId}`;
    return await this.put(url, coupon);
  }

  /**
   * 使用卡券
   */
  static async use(id) {
    const url = `${this.baseUrl}/coupons/use/${id}`;
    return await this.put(url);
  }

  /**
   * 数据处理
   */
  static processCouponItem(coupon) {
    if (coupon == null) {
      return;
    }
    coupon.beginTime = this._convertTimestapeToDay(coupon.beginTime);
    coupon.dueTime = this._convertTimestapeToDay(coupon.dueTime);
    coupon.name = coupon.name ? coupon.name : '优惠券';
  }
  /**
   * 优惠券使用情况数据处理
   */
  static processCouponPickItem() {
    const visitor = {};
    visitor.name = '';
    visitor.key = '领取时间';
    visitor.value ='';
    visitor.avatar = '';
    return visitor;
  }

  /**
   * 处理时间格式
   */
  static _convertTimestapeToDay(timestape) {
    if (timestape == null) {
      return;
    }
    let temp = timestape;
    if (timestape.indexOf(' ') != -1) {
      temp = timestape.substring(0, timestape.indexOf(' '))
    }
    return temp.replace(/-/g, '.');
  }
}
