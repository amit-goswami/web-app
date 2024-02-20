import { IContent } from '../shared/shared.interface'

export const getContentDetails = (content: IContent[], contentId: string) => {
  const contentDetails = content.filter((item) => item.contentId === contentId)
  return contentDetails[0]
}
