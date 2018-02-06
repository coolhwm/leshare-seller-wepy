import base from './base'
import wepy from 'wepy';

export default class auth extends base {
  /**
   * 检查登录状态
   */
  static isLogin() {
    const loginCode = this.getConfig('login_code');
    return loginCode != null;
  }
  /**
   * 登录
   */
  static async login(phone, code) {
    const appCode = wepy.$instance.globalData.appCode;
    const url = `${this.baseUrl}/auth/login?phone=${phone}&sms_code=${code}&app_code=${appCode}`;
    const dara = await this.get(url);
    return dara.login_code;
  }
  /**
   * 短信验证码
   */
  static async sms (phone) {
    const url = `${this.baseUrl}/auth/sms_code?phone=${phone}`;
    const data = await this.get(url);
    return data.message;
  }

  /**
   * 检查登录情况
   */
  static async check(loginCode) {
    const url = `${this.baseUrl}/auth/check?login_code=${loginCode}`;
    const data = await this.get(url);
    return data.result;
  }

  /**
   * 设置权限值
   */
  static getConfig(key) {
    return wepy.$instance.globalData.auth[key];
  }

  /**
   * 读取权限值
   */
  static async setConfig(key, value) {
    await wepy.setStorage({key: key, data: value});
    wepy.$instance.globalData.auth[key] = value;
  }

  /**
   * 删除权限值
   */
  static async removeConfig(key) {
    wepy.$instance.globalData.auth[key] = null;
    await wepy.removeStorage({key: key});
  }
}
