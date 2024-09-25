import { GetWsParam } from "qq-guild-bot";

export const botConfig: GetWsParam = {
  appID: '102383027',
  token: 'SAFP2HXbsJizivzKV0rxgq143tkTb0nI',
  intents: ['PUBLIC_GUILD_MESSAGES'] as any, // 事件订阅,用于开启可接收的消息类型
  sandbox: false, // 沙箱支持，可选，默认false. v2.7.0+
}
