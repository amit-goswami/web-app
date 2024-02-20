import useContentStore from '../store/home.store'
import ContentService from '../home.service'
import { useMutation } from '@tanstack/react-query'
import { ICreateContentPayload, QUERY_KEYS } from '../home.interface'
import { useQueryClient } from '@tanstack/react-query'

export const useContentMutation = () => {
  const queryClient = useQueryClient()
  const { setIsModalOpen } = useContentStore()
  const { setContainerId } = useContentStore()
  return useMutation({
    mutationFn: (createContentPayload: ICreateContentPayload) => {
      return ContentService.createConent(createContentPayload)
    },
    onSuccess: () => {
      setIsModalOpen(false)
      setContainerId(null)
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_CONTENT]
      })
    },
    onError: () => {}
  })
}
