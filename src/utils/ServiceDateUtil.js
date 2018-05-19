/**
 * 客服聊天时间
 * */
export default class ServiceDateUtil {
  static getDateDiff(dateTimeStamp) {
    const mydata = dateTimeStamp.replace(/-/g, '/');
    let minute = 1000 * 60;
    let hour = minute * 60;
    let day = hour * 24;
    let month = day * 30;
    let result = '';

    const now = new Date().getTime();
    const diffValue = now - new Date(mydata).getTime();
    if (diffValue < 0) {}

    const monthC = diffValue / month;
    const weekC = diffValue / (7 * day);
    const dayC = diffValue / day;
    const hourC = diffValue / hour;
    const minC = diffValue / minute;

    if (monthC >= 1) {
      result = parseInt(monthC) + '个月前';
    } else if (weekC >= 1) {
      result = parseInt(weekC) + '周前';
    } else if (dayC >= 1) {
      result = parseInt(dayC) + '天前';
    } else if (hourC >= 1) {
      result = parseInt(hourC) + '个小时前';
    } else if (minC >= 1) {
      result = parseInt(minC) + '分钟前';
    } else {
      result = '刚刚';
    }
    return result;
  }
  static getDateFormat(timeStr) {
    return new Date(timeStr).getTime()
  }
}
