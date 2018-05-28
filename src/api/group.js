import base from './base';
import Page from '../utils/Page';

export default class order extends base {

  /**
   * 分页方法
   */
  static list () {
    const url = `${this.baseUrl}/goods_group/group_list`;
    return new Page(url, this._processGroupListItem.bind(this));
  }

  /**
   * 拼团详情
   */
  static detail(id) {
    const url = `${this.baseUrl}/goods_group/${id}`;
    return this.get(url);
  }

  /**
   * 处理方法
   */
  static _processGroupListItem(item) {
    this._processTime(item);
    return item
  }

  static _processTime(item) {
    const time = new Date(item.createTime) - new Date() + 1000 * 60 * 60 * 24;
    if (time > 0) {
      let hour = Math.floor(time / 3600000);
      let min = Math.floor((time / 60000) % 60);
      let sec = Math.floor((time / 1000) % 60);
      hour = hour < 10 ? '0' + hour : hour;
      min = min < 10 ? '0' + min : min;
      sec = sec < 10 ? '0' + sec : sec;
      item.spareTime = `剩余${hour}:${min}:${sec}`
    } else {
      item.spareTime = `已结束`
    }
  }
}
