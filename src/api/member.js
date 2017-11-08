import base from './base';

export default class Member extends base {
  /**
   * 获取会员信息
   */
  static async Info (number) {
    const url = `${this.baseUrl}/members/number?number=${number}`;
    return await this.get(url);
  }

  /**
   * 增加积分信息
   */
  static async memberAdd (bonusDetail) {
    const url = `${this.baseUrl}/members/bonus_detail`;
    return this.post(url, bonusDetail);
  }

  /**
   * 获取买家会员数据
   */
  static async customerInfo (customerId) {
    const url = `${this.baseUrl}/members?customer_id=${customerId}`;
    return await this.get(url);
  }

  /**
   * 获取买家会员数据
   */
  static async cardInfo () {
    const url = `${this.baseUrl}/memberCards`;
    return await this.get(url);
  }

  /**
   * 获取历史积分数据
   */
  static async bonusDetailInfo (customerId) {
    const url = `${this.baseUrl}/members/bonus_detail?customer_id=${customerId}`;
    return await this.get(url);
  }
}
