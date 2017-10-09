
import base from './base';

export default class count extends base {
  /**
   * 今日统计
   */
  static async today() {
    return await this.count('TODAY');
  }

  /**
   * 今日统计
   */
  static async month() {
    return await this.count('MONTH');
  }

  /**
   * 订单统计
   */
  static async order() {
    const url = `${this.baseUrl}/count/order`;
    const data = await this.get(url);
    const result = {};
    for (let i = 1; i <= 9; i++) {
      const item = data.find(item => item.status == i);
      result[`n${i}`] = item != null ? item.total : 0;
    }
    return result;
  }

  /**
   *  统计
   */
  static async count(type) {
    const url = `${this.baseUrl}/count?count_type=${type}`;
    const data = await this.get(url);
    return this._processCount(data);
  }


  /**
   * 结果处理
   */
  static _processCount(data) {
    data.income = parseFloat(data.income).toFixed(2);
    return data;
  }
}
