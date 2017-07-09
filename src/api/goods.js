import base from './base';
import wepy from 'wepy';

export default class goods extends base {

  /**
   * 上传图片
   */
  static async image(filePath) {
    const url = `${this.baseUrl}/images`;
    const param = {
      url,
      filePath,
      name: 'image'
    }
    const result = await wepy.uploadFile(param);
    console.info(result);
    return result;
  }

  static create(goods) {}
}
