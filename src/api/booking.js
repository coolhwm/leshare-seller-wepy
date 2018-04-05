import base from './base';
import api from '../api/goods'
import Page from '../utils/Page';

export default class booking extends base {
  static BOOKING_STATUS = {
    WAITING_PROCCESS: '待处理',
    PROCESSING: '处理中',
    TIMEOUT: '已过期',
    CANCEL: '已取消',
    FINISH: '已完成'
  };

  /**
   * 返回预约列表
   */
  static list (status) {
    const url = `${this.baseUrl}/booking/list?status=${status}`;
    return new Page(url, item => {
      this._processBookingListItem(item);
    });
  }

  /***
   * 根据预约 ID查找预约详情
   */
  static bookingDetail (id) {
    const url = `${this.baseUrl}/booking/${id}`;
    return this.get(url).then(data => this._processBookingDetail(data));
  }

  /***
   * 更改预约商品订单状态为待服务
   */
  static bookingWaiting (id) {
    const url = `${this.baseUrl}/booking/waiting/${id}`;
    return this.put(url);
  }

  /***
   * 更改预约商品订单状态为服务中
   */
  static bookingProcessing (id) {
    const url = `${this.baseUrl}/booking/processing/${id}`;
    return this.put(url);
  }

  /***
   * 更改预约商品订单状态为已完成
   */
  static bookingFinish (id) {
    const url = `${this.baseUrl}/booking/finish/${id}`;
    return this.put(url);
  }

  // 预定列表
  static _processBookingListItem (data) {
    // 处理状态
    data.statusText = this.BOOKING_STATUS[data.status]
    // 增加订单支付状态
    if (data.order && data.status == 'WAITING_PROCCESS') {
      data.statusText += data.order.status == 1 ? ' (待支付)' : ' (已支付)'
    }

    // 处理预览图
    if (data.goods) {
      api._processGoodsPreview(data.goods);
    }
    return data;
  }

  // 预定列表
  static _processBookingDetail (data) {
    // 处理预览图
    if (data.goods) {
      api._processGoodsPreview(data.goods);
    }
    // 处理预约时间
    this._processServiceTime(data);
    return data;
  }
  // 处理预约时间
  static _processServiceTime (data) {
    data.date = data.serviceTime.slice(0, 10);
    data.time = data.serviceTime.slice(11, 20);
  }
}
