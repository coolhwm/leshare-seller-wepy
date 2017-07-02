import base from './base'

export default class auth extends base {
  static async sms (phone) {
    if (phone === null || phone === '') {
      return '电话号码不能为空';
    }
    const reg = /^1[34578]\d{9}$/;
    if (!reg.test(phone)) {
      return '电话号码格式错误';
    }
    const url = `${this.baseUrl}/auth/sms_code?phone=${phone}`
    const ERROR_WAIT = 10003;
    try {
      const data = await this.get(url);
      const result = data.result;
      return result === 'SUCCESS' ? result : '服务器错误';
    } catch (e) {
      const errorCode = e.serverCode;
      return errorCode === ERROR_WAIT ? '请求过于频繁' : '服务器错误';
    }
  }
}
