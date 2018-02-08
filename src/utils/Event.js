const WxNotificationCenter = require('./WxNotificationCenter.js');

export default class Event {
  // 订单列表更新事件
  static ORDER_LIST_UPDATE = 'ORDER_LIST_UPDATE';
  // 订单列表状态更新
  static ORDER_TAB_UPDATE = 'ORDER_TAB_UPDATE';
  // 商品详情更新事件
  static GOODS_DETAILS_UPDATE = 'GOODS_DETAILS_UPDATE';
  // 商品列表更新事件
  static GOODS_LIST_UPDATE = 'GOODS_LIST_UPDATE';
  // 卡券列表更新事件
  static COUPON_LIST_UPDATE = 'COUPON_LIST_UPDATE';
  // 卡券用户更新事件
  static COUPON_USER_UPDATE = 'COUPON_USER_UPDATE';
  // 公告列表更新事件
  static NOTICE_LIST_UPDATE = 'NOTICE_LIST_UPDATE';
  // 分类列表更新事件
  static CATEGORY_LIST_UPDATE = 'CATEGORY_LIST_UPDATE';
  // 配送列表更新事件
  static DELIVERY_LIST_UPDATE = 'DELIVERY_LIST_UPDATE';
  // 店铺信息更新
  static SHOP_INFO_UPDATE = 'SHOP_INFO_UPDATE';
  // 积分保存成功
  static SHOP_BONUS_UPDATE = 'SHOP_BONUS_UPDATE';
  // 手工下单用户信息刷新
  static MANUSL_USER_UPDATE = 'MANUSL_USER_UPDATE';
  // 会员等级保存成功
  static SHOP_DISCOUNT_UPDATE = 'SHOP_DISCOUNT_UPDATE';
  // 会员满赠规则保存成功
  static SHOP_PRESENT_UPDATE = 'SHOP_PRESENT_UPDATE';
  // 客户管理更新
  static SHOP_CUSTOMER_UPDATE = 'SHOP_CUSTOMER_UPDATE';
  // 优惠类别保存成功
  static VIP_CATEGORY_UPDATA = 'VIP_CATEGORY_UPDATA';
  // 输入内容
  static SHOP_CONTEXT_UPDATE = 'SHOP_CONTEXT_UPDATE';
  // 配送员更新
  static DELIVER_LIST_UPDATE = 'DELIVER_LIST_UPDATE';
  // 优惠策略更新
  static REDUCE_LIST_UPDATE = 'REDUCE_LIST_UPDATE';
  // 客户信息与卡卷更新
  static CUSOMTER_COUPON_UPDATE = 'CUSOMTER_COUPON_UPDATE';
  // 用户会员卡信息更新
  static CUSOMTER_MEMEBER_UPDATE = 'CUSOMTER_MEMEBER_UPDATE';
  // 用户登出
  static USER_LOGOUT = 'USER_LOGOUT';
  // 购物车清空
  static CART_LIST_CLEAR = 'CART_LIST_CLEAR';
  // 购物车重置
  static CART_LIST_RESET = 'CART_LIST_RESET';
  // 购物车增加
  static CART_LIST_ADD = 'CART_LIST_ADD';
  // 地址列表更新
  static ADDRESS_LIST_UPDATE = 'ADDRESS_LIST_UPDATE';
  // 地址列表更新
  static MEMBER_INFO_UPDATE = 'MEMBER_INFO_UPDATE';
  // 聊天列表更新
  static CHAT_LIST_UPDATE = 'CHAT_LIST_UPDATE';
  static listen(eventName, callback, observer) {
    WxNotificationCenter.addNotification(eventName, callback, observer);
  }

  static emit(eventName, params) {
    WxNotificationCenter.postNotificationName(eventName, params);
  }

  static remove(eventName, observer) {
    WxNotificationCenter.removeNotification(eventName, observer);
  }
}
