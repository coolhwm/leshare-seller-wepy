import base from './base'
import Page from '../utils/Page'

export default class visitor extends base {
  /**
   * 分页方法
   */
  static page () {
    const url = `${this.baseUrl}/customers/visit_list`
    return new Page(url, this._processShopsVisitor.bind(this))
  }

  /**
   * 创建
   */
  static async create (comments) {
    const url = `${this.baseUrl}/customers/visit_list`
    return await this.post(url, comments)
  }

  /**
   * 浏览统计
   */
  static async count (goodsId) {
    const url = `${this.baseUrl}/count/visit_count`
    return await this.get(url)
  }

  /**
   * 处理浏览数列表数据
   */
  static _processShopsVisitor (data) {
    console.log(data)
    const visitor = {}
    // visitor.createTime = data.createTime.substring(0, 10);
    // visitor.avatar = data.avatarUrl;
    visitor.name = data.nickName
    visitor.key = '访问时间'
    visitor.value = 0
    return visitor
  }
}
