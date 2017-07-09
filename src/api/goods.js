import base from './base';
import wepy from 'wepy';

export default class goods extends base {

  /**
   * 商品分类
   */
  static async getInnerCategories() {
    const url = `${this.baseUrl}/goods/inner_category`;
    return await this.get(url);
  }

  /**
   *  新增商品分类
   */
  static async addInnerCategories(name) {
    const url = `${this.baseUrl}/goods/inner_category`;
    const param = {
      name: name,
      pid: 0,
      seq: 0,
    }
    return await this.post(url, param);
  }

  /**
   * 上传图片
   */
  static async image(filePath) {
    // const url = `${this.baseUrl}/images`;
    const url = `http://115.28.93.210:9999/api/v1/seller/images`;
    const param = {
      url,
      filePath,
      name: 'image'
    }
    return await wepy.uploadFile(param);
  }
  /**
   * 创建商品
   */
  static async create(goods) {
    const url = `${this.baseUrl}/goods`;
    return await this.post(url, goods);
  }
}
