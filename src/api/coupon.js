import base from './base';
import Page from '../utils/Page';

export default class coupon extends base {
  /**
   * 客户历史订单分页
   * @param customerId
   * @returns {Promise.<Pagination>}
   */
  static async cutomerCouponPage (customerId) {
    const url = `${this.baseUrl}/customers/${customerId}/coupon_list`;
    return new Page(url, this._processCustomerCouponItem.bind(this));
  }

  /**
   * 处理客户优惠券
   * @param item
   * @private
   */
  static _processCustomerCouponItem(item) {
    if (item.coupon == null) {
      return;
    }
    Object.assign(item, item.coupon);

    item.acceptTime = this._convertTimestapeToDay(item.acceptTime);
    item.beginTime = this._convertTimestapeToDay(item.beginTime);
    item.dueTime = this._convertTimestapeToDay(item.dueTime);
    item.name = item.name ? item.name : '优惠券';

    switch (item.status) {
      case 'USED':
        item.status = '已使用';
        break;
      case 'NEVER_USED':
        item.status = '未使用';
        break;
      case 'EXPIRED':
        item.status = '已过期';
        break;
      default:
        item.status = '已失效'
    }
  }

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
  static pagePick (couponId, type) {
    if (type == 'NEVER_USED') {
      const url = `${this.baseUrl}/coupons/${couponId}/used_info`;
      return new Page(url, this.processCouponNeverUsed.bind(this));
    } else {
      const url = `${this.baseUrl}/coupons/${couponId}/used_info`;
      return new Page(url, this.processCouponUsed.bind(this));
    }
  }

  /**
   * 新增卡券
   */
  static async create (coupon) {
    const url = `${this.baseUrl}/coupons`;
    return await this.post(url, coupon);
  }

  /**
   * 删除卡券
   */
  static async remove (couponId) {
    const url = `${this.baseUrl}/coupons/${couponId}`;
    return await this.delete(url);
  }

  /**
   * 查询卡券信息
   */
  static info (couponId) {
    const url = `${this.baseUrl}/coupons/${couponId}`;
    return this.get(url).then(data => {
      this.processCouponItem(data);
      return data;
    });
  }

  /**
   * 编辑卡券
   */
  static async update (couponId, coupon) {
    const url = `${this.baseUrl}/coupons/${couponId}`;
    return await this.put(url, coupon);
  }

  /**
   * 使用卡券
   */
  static async use (id) {
    const url = `${this.baseUrl}/coupons/use/${id}`;
    return await this.put(url);
  }

  /**
   * 数据处理
   */
  static processCouponItem (coupon) {
    if (coupon == null) {
      return;
    }
    coupon.beginTime = this._convertTimestapeToDay(coupon.beginTime);
    coupon.dueTime = this._convertTimestapeToDay(coupon.dueTime);
    coupon.name = coupon.name ? coupon.name : '优惠券';
  }

  /**
   * 优惠券使用未使用情况数据处理
   */
  static processCouponNeverUsed (item) {
    const coupon = {};
    if (item.customer) {
      coupon.name = item.customer.nickName;
      coupon.avatar = item.customer.avatarUrl;
    }
    coupon.key = '领取时间';
    coupon.value = item.acceptTime;
    return coupon;
  }
  /**
   * 优惠券使用已使用情况数据处理
   */
  static processCouponUsed (item) {
    const coupon = {};
    if (item.customer) {
      coupon.name = item.customer.nickName;
      coupon.avatar = item.customer.avatarUrl;
    }
    coupon.key = '使用时间';
    coupon.value = item.usedTime;
    return coupon;
  }

  /**
   * 处理时间格式
   */
  static _convertTimestapeToDay (timestape) {
    if (timestape == null) {
      return;
    }
    let temp = timestape;
    if (timestape.indexOf(' ') != -1) {
      temp = timestape.substring(0, timestape.indexOf(' '));
    }
    return temp.replace(/-/g, '.');
  }
  /**
   * 卖家发放优惠券给买家数据处理
   */
  static async send (coupon) {
    const url = `${this.baseUrl}/coupons/send`;
    return await this.post(url, coupon);
  }
}
