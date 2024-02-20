import useContentStore from '../store/home.store'
import ContentService from '../home.service'
import { QUERY_KEYS } from '../home.interface'
import { useQuery } from '@tanstack/react-query'

export const useGetContent = () => {
  const { setContentData } = useContentStore()

  return useQuery({
    queryKey: [QUERY_KEYS.GET_CONTENT],
    queryFn: async () => {
      const data = await ContentService.getAllContent()
      setContentData(data)
      return data
    }
  })
}
