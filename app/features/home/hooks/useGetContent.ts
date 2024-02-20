import ContentService from '../home.service'
import { QUERY_KEYS } from '../home.interface'
import { useQuery } from '@tanstack/react-query'

export const useGetContent = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_CONTENT],
    queryFn: () => ContentService.getAllContent()
  })
}
