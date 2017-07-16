
import base from './base';

export default class shop extends base {

  static async list() {
    const url = `${this.baseUrl}/sellers/shop_list`;
    return await this.get(url);
  }

  static async info() {
    const url = `${this.baseUrl}/shops`;
    return await this.get(url);
  }
}
