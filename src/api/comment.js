
import base from './base';
import Page from '../utils/Page';

export default class comment extends base {
  /**
   * 分页方法
   */
  static page () {
    const url = `${this.baseUrl}/comments`;
    return new Page(url, this._processGoodsComment.bind(this));
  }

  /**
   * 创建
   */
  static async create(comments) {
    const url = `${this.baseUrl}/comments`;
    return await this.post(url, comments);
  }

  /**
   * 评价统计
   */
  static async count(goodsId) {
    const url = `${this.baseUrl}/comments/count?goods_id=${goodsId}`;
    return await this.get(url);
  }

  /**
   * 处理评价列表数据
   */
  static _processGoodsComment(data) {
    const comment = {};
    comment.createTime = data.createTime.substring(0, 10);
    comment.createTime_comment = data.createTime.substring(0, 16);
    comment.starArr = [0, 0, 0, 0, 0];
    for (let i = 0; i < data.star; i++) {
      comment.starArr[i] = 1;
    }
    comment.star = data.star;
    comment.avatar = data.customer.avatarUrl;
    comment.nickName = data.customer.nickName;
    comment.comment = data.comment;
    comment.good_image = data.goods.images[0].url;
    comment.good_name = data.goods.name;
    return comment;
  }
}
