import base from './base';
import Page from '../utils/Page';

export default class notice extends base {
  /**
   * 分页方法
   */
  static page () {
    const url = `${this.baseUrl}/notices`;
    return new Page(url);
  }

  /**
   * 创建公告
   */
  static async create(notice) {
    const url = `${this.baseUrl}/notices`;
    return await this.post(url, notice);
  }

  /**
   * 删除公告
   */
  static async remove(noticeId) {
    const url = `${this.baseUrl}/notices/${noticeId}`;
    return await this.delete(url);
  }

  /**
   * 编辑公告
   */
  static async update(noticeId, notice) {
    const url = `${this.baseUrl}/notices/${noticeId}`;
    return await this.put(url, notice);
  }

  /**
   * 单条信息
   */
  static async info(noticeId) {
    const url = `${this.baseUrl}/notices/${noticeId}`;
    return await this.get(url);
  }
}
