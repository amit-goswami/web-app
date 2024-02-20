import { UPDATE_TYPE } from '@/app/shared/shared.interface'

export enum QUERY_KEYS {
  GET_CONTENT = 'GET_CONTENT'
}

export interface ICreateContentPayload {
  content: string
  updateType: UPDATE_TYPE
  containerId: string
}
