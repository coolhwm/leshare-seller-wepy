import base from './base'

export default class auth extends base {
  /**
   * 登录
   */
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
    return data.message;
  }

  /**
   * 检查登录情况
   */
  static async check(loginCode) {
    const url = `${this.baseUrl}/auth/check?login_code=${loginCode}`;
    const data = await this.get(url)
    return data.result;
  }
}
