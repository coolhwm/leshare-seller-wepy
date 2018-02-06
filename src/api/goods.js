/* eslint-disable no-return-assign */
import base from './base';
import wepy from 'wepy';
import Page from '../utils/Page';
import Lang from '../utils/Lang';

export default class goods extends base {
  /**
   * 客户常购商品
   */
  static oftenGoodsPage(customerId) {
    const url = `${this.baseUrl}/customers/${customerId}/order_goods_list`;
    return new Page(url, this._processOftenItem.bind(this));
  }

  static _processOftenItem(item) {
    item.name = item.goodsName;
  }

  /**
   * 分页方法
   */
  static page() {
    const url = `${this.baseUrl}/goods`;
    return new Page(url, this._processGoodsListItem.bind(this));
  }

  static list() {
    const url = `${this.baseUrl}/goods/list`;
    return new Page(url, this._processGoodsListItem.bind(this));
  }

  /**
   * 商品分类
   */
  static async getInnerCategories() {
    const url = `${this.baseUrl}/goods/inner_category`;
    return await this.get(url).then(data => {
      return data == null ? [] : data;
    });
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
    };
    return await this.post(url, param);
  }

  /**
   * 获取单条商品分类信息
   */
  static async getInnerCategorieId(categoryId) {
    let list = await this.getInnerCategories();
    return list.find((item) => item.id == categoryId);
  }

  /**
   *  更新商品分类
   */
  static async updateInnerCategories(id, name) {
    const url = `${this.baseUrl}/goods/inner_category`;
    const param = {
      name: name,
      id: id,
      pid: 0,
      seq: 0
    };
    return await this.put(url, param);
  }

  /**
   *  删除商品分类
   */
  static async removeInnerCategories(id) {
    const url = `${this.baseUrl}/goods/inner_category/${id}`;
    return await this.delete(url);
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
    };
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
   * 更新商品
   */
  static async update(goodsId, goods) {
    const url = `${this.baseUrl}/goods/${goodsId}`;
    return await this.put(url, goods);
  }

  /**
   * 删除商品
   */
  static async remove(goodsId) {
    const url = `${this.baseUrl}/goods/${goodsId}`;
    return await this.delete(url);
  }

  /**
   * 商品详情
   */
  static async detail(goodsId) {
    const url = `${this.baseUrl}/goods/${goodsId}`;
    const data = await this.get(url);
    return this._processGoodsDetail(data);
  }

  /**
   * 商品上架
   */
  static async onSale(goodsId) {
    const url = `${this.baseUrl}/goods/${goodsId}/on_sale`;
    return this.put(url);
  }

  /**
   * 商品下架
   */
  static async offSale(goodsId) {
    const url = `${this.baseUrl}/goods/${goodsId}/off_sale`;
    return this.put(url);
  }

  /** ********************* 内部数据处理方法 ********************* **/

  static _processGoodsDetail(goods) {
    const pictures = goods.images;
    const input = {
      name: goods.name,
      status: goods.status == 0,
      isRecommend: goods.isRecommend == 1,
      globalCid: goods.globalCid,
      innerCid: goods.innerCid,
      goodsId: goods.id
    };
    let skuList;
    const details = goods.goodsDetails ? goods.goodsDetails : [];
    if (goods.goodsSkuInfo == null || goods.goodsSkuInfo.goodsSkuDetails == null) {
      skuList = [{
        price: goods.sellPrice,
        stock: goods.goodsStocks[0].stock,
        sku: null
      }];
    } else {
      skuList = goods.goodsSkuInfo.goodsSkuDetails.map(item => {
        const price = parseFloat(item.goodsSkuDetailBase.price).toFixed(2);
        const sku = item.sku;
        const stock = goods.goodsStocks.find(item => item.sku == sku).stock;
        return {price, sku, stock};
      });
    }
    return {pictures, input, details, skuList};
  }

  /**
   * 处理商品列表数据
   */
  static _processGoodsListItem(goods) {
    this._processGoodsPreview(goods);
    this._processGoodsPriceRange(goods);
    this._processGoodsSkuCount(goods);
    this._processGoodsDate(goods);
  }

  static _processGoodsDate(item) {
    item.createText = Lang.convertTimestapeToDay(item.createTime);
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
      item.imageUrl = '/images/icons/broken.png"';
    } else if (images[0].url == null) {
      item.imageUrl = '/images/icons/broken.png';
    } else {
      item.imageUrl = images[0].url + '/small';
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
    let minPrice = Number.MAX_VALUE;

    for (let i in skuDetails) {
      const detail = skuDetails[i].goodsSkuDetailBase;
      maxPrice = Math.max(detail.price, maxPrice).toFixed(2);
      minPrice = Math.min(detail.price, minPrice).toFixed(2);
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
