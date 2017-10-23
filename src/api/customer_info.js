import base from './base';
import Page from '../utils/Page';

export default class customerInfo extends base {
  /**
   * 获取客户详细信息
   */
  static async detailInfo(customerId) {
    const url = `${this.baseUrl}/customers/${customerId}/detail_info `;
    return this.get(url).then(data => {
      let price = data.countCustomerInfo.totalPrice;
      if (price > 1000 * 1000) {
        data.countCustomerInfo.totalPrice = (price / 1000).toFixed(2) + 'k';
      }
      return data;
    });
  }
}
