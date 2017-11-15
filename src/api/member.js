import base from './base';
import Page from '../utils/Page';

export default class Member extends base {
  /**
   * 获取会员信息
   */
  static async Info (number) {
    const url = `${this.baseUrl}/members/number?number=${number}`;
    return await this.get(url);
  }

  /**
   * 增加积分信息
   */
  static async memberAdd (bonusDetail) {
    const url = `${this.baseUrl}/members/bonus_detail`;
    return this.post(url, bonusDetail);
  }

  /**
   * 获取买家会员数据
   */
  static async customerInfo (customerId) {
    const url = `${this.baseUrl}/members?customer_id=${customerId}`;
    return await this.get(url);
  }

  /**
   * 获取买家会员卡数据
   */
  static async cardInfo () {
    const url = `${this.baseUrl}/memberCards`;
    return await this.get(url);
  }

  /**
   * 历史积分信息
   */
  static async bonusPage(customerId) {
    const url = `${this.baseUrl}/members/bonus_detail?by=create_time&sort=desc&customer_id=${customerId}`;
    return new Page(url, this.processBonusTransformation.bind(this));
  }
  static processBonusTransformation (bonusInfo) {
    const comment = {};
    if (bonusInfo.addBonus > 0) {
      comment.costMoney = `消费金额：￥ ${bonusInfo.costMoney.toFixed(2)}`;
    } else {
      comment.costMoney = `抵扣金额：￥ ${bonusInfo.costMoney.toFixed(2)}`;
    }
    comment.addBonus = bonusInfo.addBonus;
    comment.createTime = bonusInfo.createTime;
    comment.orderId = bonusInfo.orderId;
    comment.typeDesc = bonusInfo.typeDesc;
    return comment;
  }
}
