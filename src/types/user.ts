// 用户信息类型定义
export interface UserInfo {
  token?: string
  id?: string
  account?: string
  avatar?: string
  nickname?: string
  [key: string]: string | undefined
}

