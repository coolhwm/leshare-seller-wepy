import base from './base';
import Page from '../utils/Page';
import ServiceTime from '../utils/ServiceDateUtil';

export default class customerService extends base {
  static async customerId(opneId) {
    const url = `${this.baseUrl}/customers?open_id=${opneId}`;
    return this.get(url);
  }

  /**
   * 聊天记录
   * */
  static async chatHistory(openId) {
    const url = `${this.baseUrl}/kefu/chat_history?open_id=${openId}`;
    const data = await this.get(url);
    return this.processChatHistoryTransformation(data);
  }

  /**
   * 客服列表
   * */
  static chatList() {
    const url = `${this.baseUrl}/kefu/chat_list`;
    return new Page(url, this.processChatInfoTransformation.bind(this));
  }

  /**
   * 聊天信息处理
   * */
  static processChatInfoTransformation(chatInfo) {
    const params = {};
    if (chatInfo.msgTime != null) {
      params.msgTime = ServiceTime.getDateDiff(chatInfo.msgTime);
    } else {
      params.msgTime = '';
    }
    params.time = ServiceTime.getDateFormat(chatInfo.msgTime);
    params.content = chatInfo.content;
    if (chatInfo.customer != null) {
      params.nickName = chatInfo.customer.nickName.substring(0, 18);
      params.avatarUrl = chatInfo.customer.avatarUrl;
    }
    params.openId = chatInfo.openId;
    params.type = chatInfo.type;
    return params;
  }

  /**
   * 聊天历史记录
   * */
  static processChatHistoryTransformation (chatHistory) {
    let params = [];
    params = chatHistory;
    chatHistory.forEach((item, index) => {
      params[index].content = item.content;
      if (item.msgSource == 1) {
        params[index].from = 'me';
      } else {
        params[index].from = 'orther'
      }
    });
    return params;
  }
  /**
   * 客服发送消息
   * */
  static async sendMassge (param) {
    const url = `${this.baseUrl}/kefu/send_message`;
    return await this.post(url, param);
  }
}
