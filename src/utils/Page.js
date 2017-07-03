import http from './Http'

export default class Pagination {
  constructor (url, processFunc) {
    // 数据访问地址
    this.url = url;
    // 数据集合
    this.list = [];
    // 起始数据
    this.start = 0;
    // 加载数据条数
    this.count = 10;
    // 数据处理函数
    this.processFunc = processFunc;
    // 正在加载中
    this.loading = false;
    // 参数
    this.params = [];
    // 是否底部
    this.reachBottom = false;
  }

  /**
   * 加载下一页数据
   */
  async next (args) {
    const param = {
      from: this.start,
      limit: this.count
    };
    // 附加参数
    this.loading = true;
    Object.assign(param, args);
    const data = await http.get(this.url, param);
    // 底部判断
    if (data === null || data.length < 1) {
      this.reachBottom = true;
      return this;
      // return this._export();
    }

    // 处理数据
    this._processData(data)

    // 设置数据
    this.list = this.list.concat(data);
    this.start += this.count;
    // 加载完毕
    this.loading = false;
    if (data.length < this.count) {
      this.reachBottom = true;
    }
    // 导出列表数据
    return this;
    // return this._export();
    // return http.get(this.url, param).then(data => {
    // })
  }

  /**
   * 恢复到第一页
   */
  reset () {
    this.start = 0;
    this.list = [];
  }

  /**
   * 处理数据（私有）
   */
  _processData (data) {
    if (this.processFunc) {
      for (let i in data) {
        const result = this.processFunc(data[i]);
        if (result) {
          data[i] = result;
        }
      }
    }
  }

  /**
   * 导出数据（私有）
   */
  _export () {
    return {
      list: this.list,
      start: this.start,
      count: this.count
    }
  }
}
