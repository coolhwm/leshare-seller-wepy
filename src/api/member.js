import base from './base';

export default class Member extends base {
  /**
   * 获取会员卡信息
   */
  static async memberInfo (number) {
    const url = `${this.baseUrl}/members/number?number=${number}`;
    return await this.get(url);
  }

  /**
   * 增加会员卡信息
   */
  static async memberAdd (number) {
    const url = `${this.baseUrl}/members`;
    return this.post(url);
  }

  /**
   * 获取积分数据
   */
  static async bonusInfo (customerId) {
    const url = `${this.baseUrl}/members/bonus_detail?customer_id=${customerId}`;
    return await this.get(url);
  }
}
