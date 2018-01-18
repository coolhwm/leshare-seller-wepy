export const ACTIONS = {
  CLOSE: {
    primary: false,
    name: '关闭',
    func: 'close'
  },
  REPRICE: {
    primary: false,
    name: '改价',
    func: 'reprice'
  },
  TAKE: {
    primary: true,
    name: '接单',
    func: 'take'
  },
  SEND: {
    primary: true,
    name: '发货',
    func: 'send'
  },
  RECEIVE: {
    primary: true,
    name: '送达',
    func: 'receive'
  },
  DEAL_REFUND: {
    primary: true,
    name: '退款',
    func: 'refund'
  },
  REMARK: {
    primary: false,
    name: '备注',
    func: 'remark'
  },
  TRACE: {
    primary: false,
    name: '跟踪',
    func: 'trace'
  },
  PHONE: {
    inner: true,
    primary: false,
    name: '电话',
    func: 'phone'
  },
  PRINT: {
    inner: true,
    primary: false,
    name: '打印',
    func: 'print'
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
  '20-1-3': [ACTIONS.CLOSE, ACTIONS.RECEIVE],
  '20-1-5': [ACTIONS.DEAL_REFUND],
  // 堂食（线上）
  '30-1-1': [ACTIONS.REPRICE, ACTIONS.CLOSE],
  '30-1-2': [ACTIONS.CLOSE, ACTIONS.TAKE],
  '30-1-3': [ACTIONS.CLOSE, ACTIONS.RECEIVE],
  '30-1-5': [ACTIONS.DEAL_REFUND],
  // 外带（线上）
  '33-1-1': [ACTIONS.REPRICE, ACTIONS.CLOSE],
  '33-1-2': [ACTIONS.CLOSE, ACTIONS.TAKE],
  '33-1-3': [ACTIONS.CLOSE, ACTIONS.RECEIVE],
  '33-1-5': [ACTIONS.DEAL_REFUND],
  // 商城（线下）
  '10-0-2': [ACTIONS.CLOSE, ACTIONS.SEND],
  '10-0-3': [ACTIONS.RECEIVE],
  '10-0-5': [ACTIONS.DEAL_REFUND],
  // 商城（线上）
  '10-1-1': [ACTIONS.REPRICE, ACTIONS.CLOSE],
  '10-1-2': [ACTIONS.CLOSE, ACTIONS.SEND],
  '10-1-3': [ACTIONS.CLOSE, ACTIONS.RECEIVE],
  '10-1-5': [ACTIONS.DEAL_REFUND]
};
