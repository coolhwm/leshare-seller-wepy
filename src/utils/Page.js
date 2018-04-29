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
    // 是否为空
    this.empty = true;
    // 是否需要清除
    this.toClear = false;
    // 分页模式
    this.mode = 'concat'
    // 页码
    this.num = 0;
  }
  async goto(num, args) {
    this.num = num;
    // 参数处理
    this.start = this.count * (this.num - 1);
    await this.load(args);
  }
  /**
   * 加载下一页数据
   */
  async next (args) {
    this.num += 1;
    // 参数处理
    this.start = this.count * (this.num - 1);
    await this.load(args);
  }
  async prev (args) {
    if (this.num <= 1) {
      return;
    }
    this.num -= 1;
    // 参数处理
    this.start = this.count * (this.num - 1);
    await this.load(args);
  }
  async load(args) {
    const param = {
      from: this.start,
      limit: this.count
    };
    if (this.loading) {
      console.warn('page loading!');
      return this;
    }
    // 附加参数
    this.loading = true;
    try {
      Object.assign(param, args);
      const data = await http.get(this.url, param);
      // 底部判断
      if (data === null || data.length < 1) {
        if (this.toClear) {
          this.clear();
        } else {
          this.reachBottom = true;
        }
        if (this.mode == 'replace') {
          this.list = []
        }
        return this;
      }
      this.empty = false;
      // 处理数据
      this._processData(data);
      // 设置数据
      if (this.toClear) {
        this.list = data;
        this.toClear = false;
      } else {
        if (this.mode == 'replace') {
          this.list = data;
        } else {
          this.list = this.list.concat(data);
        }
      }
      this.reachBottom = data.length < this.count;
      return this;
    } finally {
      this.loading = false;
    }
  }

  /**
   * 恢复到第一页
   */
  reset () {
    this.empty = true;
    this.num = 0;
    this.toClear = true;
    this.start = 0;
    this.reachBottom = false;
  }
  clear () {
    this.toClear = false;
    this.start = 0;
    this.num = 0;
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
}
