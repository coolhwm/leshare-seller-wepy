import base from './base';
import Page from '../utils/Page';

export default class balance extends base {
  static async list (memberId) {
    const url = `${this.baseUrl}/members/balance_detail?sort=desc&member_id=${memberId}`;
    return new Page(url);
  }
}