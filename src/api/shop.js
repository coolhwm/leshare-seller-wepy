import base from './base';
import wepy from 'wepy';

export default class shop extends base {
  static autoVersion = {
    '1': '推广普及版',
    '2': '会员普及版',
    '3': '会员年费版',
    '4': '电商普及版',
    '5': '电商年费版',
    '6': '全能普及版',
    '7': '全能年费版'
  };
  static autoCofig = {
    '1': ['order', 'manusl', 'delivery', 'vip', 'discount', 'add', 'deliveryUser'],
    '2': ['order', 'manusl', 'delivery', 'discount'],
    '3': ['order', 'manusl', 'delivery', 'discount'],
    '4': ['vip', 'add'],
    '5': ['vip', 'add'],
    '6': [],
    '7': []
  };
  /**
   * 获取限制信息
   */
  static async limit () {
    const url = `${this.baseUrl}/shop_charge_limit`;
    const data = await this.get(url);
    return this._processVersionText(data);
  }

  /**
   * 获取卖家的店铺列表
   */
  static async list () {
    const url = `${this.baseUrl}/sellers/shop_list`;
    return await this.get(url);
  }

  /**
   * 店铺分类
   */
  static async getShopCategories () {
    const url = `${this.baseUrl}/shop_parent_categories/0`;
    return await this.get(url);
  }

  /**
   * 获取店铺信息
   */
  static async info () {
    const url = `${this.baseUrl}/shops`;
    return await this.get(url);
  }

  /**
   * 更新店铺信息
   */
  static async updateShop (shop) {
    const url = `${this.baseUrl}/shops`;

    return await this.put(url, shop);
  }

  /**
   * 上传图片
   */
  static async image (filePath) {
    // const url = `${this.baseUrl}/images`;
    const url = `${this.baseUrl}/images`;
    const param = {
      url,
      filePath,
      name: 'image'
    };
    return await wepy.uploadFile(param);
  }

  /**
   * 获取店铺状态
   */
  static async getStatus () {
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
  static async setStatus (status) {
    const url = `${this.baseUrl}/shops/status`;
    return this.put(url, status);
  }

  static _processStatusText (data) {
    const status = data.status;
    const isOpen = data.open;
    if (status == 'NORMAL') {
      return isOpen ? '营业中' : '营业中(已打烊)';
    } else if (status == 'CLOSE') {
      return '歇业中';
    }
  }

  /**
   * 配送员列表
   */
  static listReduce () {
    const url = `${this.baseUrl}/reduce_rule`;
    return this.get(url);
  }

  /**
   * 创建
   */
  static createReduce (reduce) {
    const url = `${this.baseUrl}/reduce_rule`;
    return this.post(url, reduce);
  }

  /**
   * 删除
   */
  static removeReduce (id) {
    const url = `${this.baseUrl}/reduce_rule/${id}`;
    return this.delete(url);
  }

  /**
   * 更新
   */
  static updateReduce (reduce) {
    const url = `${this.baseUrl}/reduce_rule`;
    return this.put(url, reduce);
  }
  /**
   * 版本
   */
  static _processVersionText(data) {
    if (data) {
      data.versionText = this.autoVersion[data.chargeVersion];
      data.versionConfig = this.autoCofig[data.chargeVersion];
    }
    return data;
  }
}
