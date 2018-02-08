import base from './base';
import Page from '../utils/Page';

export default class customerService extends base {
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
  static async chatList() {
    const url = `${this.baseUrl}/kefu/chat_list`;
    return new Page(url, this.processChatInfoTransformation.bind(this));
  }

  /**
   * 聊天信息处理
   * */
  static processChatInfoTransformation(chatInfo) {
    const params = {};
    if (chatInfo.mpMsg.msgTime != null) {
      params.msgTime = chatInfo.mpMsg.msgTime.substring(10, 16);
    } else {
      params.msgTime = '';
    }
    params.content = chatInfo.mpMsg.content;
    params.nickName = chatInfo.nickName;
    params.avatarUrl = chatInfo.avatarUrl;
    params.openId = chatInfo.openId;
    return params;
  }

  /**
   * 聊天历史记录
   * */
  static processChatHistoryTransformation (chatHistory) {
    var params = [];
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
}
