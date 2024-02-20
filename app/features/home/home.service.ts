import HttpService from '@/app/services/HttpService'
import { IContent } from '@/app/shared/shared.interface'
import { ICreateContentPayload } from './home.interface'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

const getAllContent = async () => {
  const { data } = await HttpService.get(`${baseUrl}/content`)
  return data.contents as IContent[]
}

const createConent = async (createContentPayload: ICreateContentPayload) => {
  const { containerId, content, updateType } = createContentPayload
  const { data } = await HttpService.put(`${baseUrl}/content/${containerId}`, {
    content,
    updateType
  })
  return data.contents as IContent
}

const ContentService = {
  getAllContent,
  createConent
}

export default ContentService
