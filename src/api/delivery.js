
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

  /**
   * 配送员列表
   */
  static listDeliver () {
    const url = `${this.baseUrl}/deliver_user`;
    return this.get(url).then(data => {
      data.forEach(v => {
        v.showText = `${v.name} (${v.phone})`
      });
      return data;
    });
  }

  /**
   * 创建
   */
  static createDeliver(deliver) {
    const url = `${this.baseUrl}/deliver_user`;
    return this.post(url, deliver);
  }

  /**
   * 删除
   */
  static removeDeliver(id) {
    const url = `${this.baseUrl}/deliver_user/${id}`;
    return this.delete(url);
  }

  /**
   * 更新
   */
  static updateDeliver(deliver) {
    const url = `${this.baseUrl}/deliver_user`;
    return this.put(url, deliver);
  }
}
