
import base from './base';

export default class shop extends base {

  /**
   * 获取卖家的店铺列表
   */
  static async list() {
    const url = `${this.baseUrl}/sellers/shop_list`;
    return await this.get(url);
  }

  /**
   * 获取店铺信息
   */
  static async info() {
    const url = `${this.baseUrl}/shops`;
    return await this.get(url);
  }

  /**
   * 获取店铺状态
   */
  static async getStatus() {
    const url = `${this.baseUrl}/shops/status`;
    const data = await this.get(url);
    // 文本转换
    data.statusText = this._processStatusText(data);
    data.status = data.status == 'NORMAL';
    // 是否全天
    data.day = data.beginTime == '00:00' && data.endTime == '23:59';
    return data;
  }

  /**
   * 修改店铺状态
   */
  static async setStatus(status) {
    const url = `${this.baseUrl}/shops/status`;
    return this.put(url, status);
  }
  static _processStatusText(data) {
    const status = data.status;
    const isOpen = data.open;
    if (status == 'NORMAL') {
      return isOpen ? '营业中' : '营业中(已打烊)';
    } else if (status == 'CLOSE') {
      return '歇业中';
    }
  }
}
