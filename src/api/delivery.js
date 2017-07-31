
import base from './base';
import Page from '../utils/Page';

export default class delivery extends base {
  /**
   * 分页方法
   */
  static page () {
    const url = `${this.baseUrl}/delivery`;
    return new Page(url);
  }

  /**
   * 创建
   */
  static create(delivery) {
    const url = `${this.baseUrl}/delivery`;
    return this.post(url, [delivery]);
  }

  /**
   * 删除
   */
  static remove(id) {
    const url = `${this.baseUrl}/delivery/${id}`;
    return this.delete(url);
  }

  /**
   * 更新
   */
  static update(id, delivery) {
    const url = `${this.baseUrl}/delivery/${id}`;
    return this.put(url, delivery);
  }
}
