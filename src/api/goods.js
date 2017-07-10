import base from './base';
import wepy from 'wepy';
import Page from '../utils/Page';

export default class goods extends base {

  /**
   * 分页方法
   */
  static page() {
    const url = `${this.baseUrl}/goods`;
    return new Page(url, this._processGoodsListItem.bind(this));
  }
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
      seq: 0
    }
    return await this.post(url, param);
  }

  /**
   * 上传图片
   */
  static async image(filePath) {
    // const url = `${this.baseUrl}/images`;
    const url = `${this.baseUrl}/images`;
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

  /**
   * 处理商品列表数据
   */
  static _processGoodsListItem(goods) {
    this._processGoodsPreview(goods);
    this._processGoodsPriceRange(goods);
    this._processGoodsSkuCount(goods);
  }

  /**
   * 处理SKU数量
   */
  static _processGoodsSkuCount(item) {
    if (!item.goodsSkuInfo || !item.goodsSkuInfo.goodsSkuDetails) {
      item.skuCount = 0;
    } else {
      item.skuCount = item.goodsSkuInfo.goodsSkuDetails.length;
    }
  }

  /**
   * 处理预览图
   */
  static _processGoodsPreview(item) {
    const images = item.images;
    // 图片处理
    if (images == null || images.length < 1) {
      item.imageUrl = '/images/icons/broken.png"'
    }
    else if (images[0].url == null) {
      item.imageUrl = '/images/icons/broken.png';
    }
    else {
      item.imageUrl = images[0].url;
    }
  }

  /**
   * 处理商品区间
   */
  static _processGoodsPriceRange(detail) {
    if (!detail.goodsSkuInfo || !detail.goodsSkuInfo.goodsSkuDetails) {
      const price = parseFloat(detail.sellPrice).toFixed(2);
      detail.priceText = `￥${price}`;
      return;
    }
    const skuDetails = detail.goodsSkuInfo.goodsSkuDetails;
    let maxPrice = 0;
    let minPrice = 0;

    for (let i in skuDetails) {
      const detail = skuDetails[i].goodsSkuDetailBase;
      maxPrice = Math.max(detail.price, maxPrice).toFixed(2);
      minPrice = Math.min(detail.price, maxPrice).toFixed(2);
    }
    detail.maxPrice = maxPrice;
    detail.minPrice = minPrice;
    if (maxPrice != minPrice) {
      detail.priceText = `￥${minPrice} ~ ${maxPrice}`;
    } else {
      detail.priceText = `￥${minPrice}`;
    }
  }
}
