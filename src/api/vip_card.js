import base from './base';

export default class vip extends base {
  /**
   * 会员卡信息
   */
  static async info () {
    const url = `${this.baseUrl}/memberCards`;
    return await this.get(url);
  }

  /**
   * 添加会员卡
   */
  static async create (cardParam) {
    const url = `${this.baseUrl}/memberCards`;
    return this.post(url, cardParam);
  }

  /**
   * 编辑会员卡
   */
  static async update (cardParam) {
    const url = `${this.baseUrl}/memberCards`;
    return this.put(url, cardParam);
  }
}
