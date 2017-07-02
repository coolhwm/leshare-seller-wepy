import base from './base'

export default class auth extends base {
  static async login(phone, code) {
    const url = `${this.baseUrl}/auth/login?phone=${phone}&sms_code=${code}`;
    const dara = await this.get(url);
    return dara.login_code;
  }
  /**
   * 短信验证码
   */
  static async sms (phone) {
    const url = `${this.baseUrl}/auth/sms_code?phone=${phone}`
    const data = await this.get(url);
    return data.result;
  }
}
