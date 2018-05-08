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
   * 测试账号
   */
  static auditAccount () {
    const url = `${this.baseUrl}/auth/audit_account`;
    return this.get(url);
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

  /**
   * 获取会话
   */
  static async session() {
    const {code} = await wepy.login();
    console.info(`[auth] js_code =${code}`);
    const {third_session, login_code} = await this.getSession(code);
    await this.setConfig('login_code', login_code);
    await this.setConfig('third_session', third_session);
  }
  /**
   * 执行登录操作
   */
  static async wxLogin(rawUser) {
    // 请求登录
    const appCode = wepy.$instance.globalData.appCode;
    const thirdSession = this.getConfig('third_session')
    const url = `${this.baseUrl}/auth/wx_login`;
    const param = {
      encryptedData: rawUser.encryptedData,
      iv: rawUser.iv,
      thirdSession: thirdSession,
      app_code: appCode
    };
    const result = await this.get(url, param);
    const loginCode = result.login_code;
    console.info(`[auth]login_code=${loginCode}`)
    await this.setConfig('login_code', loginCode);
    await this.removeConfig('shop_id');
  }
  /**
   * 获取会话
   */
  static async getSession(jsCode) {
    const appCode = wepy.$instance.globalData.appCode;
    const url = `${this.baseUrl}/auth/session?code=${jsCode}&app_code=${appCode}`;
    return await this.get(url);
  }
}
