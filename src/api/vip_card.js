import base from './base';

export default class Vip extends base {
  /**
   * 会员卡信息
   */
  static async memberCardInfo () {
    const url = `${this.baseUrl}/memberCards`;
    return await this.get(url);
  }

  /**
   * 添加会员卡
   */
  static async memberCardCreate (cardParam) {
    const url = `${this.baseUrl}/memberCards`;
    return this.post(url, cardParam);
  }

  /**
   * 编辑会员卡
   */
  static async memberCardUpdate (cardParam) {
    const url = `${this.baseUrl}/memberCards`;
    return this.put(url, cardParam);
  }
}
