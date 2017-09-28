export const ACTIONS = {
  CLOSE: {
    primary: false,
    name: '关闭订单',
    func: 'close'
  },
  REPRICE: {
    primary: false,
    name: '订单改价',
    func: 'reprice'
  },
  TAKE: {
    primary: true,
    name: '接受订单',
    func: 'take'
  },
  SEND: {
    primary: true,
    name: '订单发货',
    func: 'send'
  },
  RECEIVE: {
    primary: true,
    name: '确认送达',
    func: 'receive'
  },
  DEAL_REFUND: {
    primary: true,
    name: '处理退款',
    func: 'refund'
  },
  REMARK: {
    primary: false,
    name: '订单备注',
    func: 'remark'
  },
  TRACE: {
    primary: false,
    name: '订单跟踪',
    func: 'trace'
  }
};
export const ACTION_MAP = {
  // 外卖（线下）
  '20-0-2': [ACTIONS.CLOSE, ACTIONS.TAKE],
  '20-0-9': [ACTIONS.CLOSE, ACTIONS.SEND],
  '20-0-3': [ACTIONS.RECEIVE],
  '20-0-5': [ACTIONS.DEAL_REFUND],
  // 外卖（线上）
  '20-1-1': [ACTIONS.REPRICE, ACTIONS.CLOSE],
  '20-1-2': [ACTIONS.CLOSE, ACTIONS.TAKE],
  '20-1-9': [ACTIONS.CLOSE, ACTIONS.SEND],
  '20-1-3': [ACTIONS.RECEIVE],
  '20-1-5': [ACTIONS.DEAL_REFUND]
  // 商城（线下）
  // 商城（线上）
}
