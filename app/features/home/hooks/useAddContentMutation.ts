import useContentStore from '../store/home.store'
import ContentService from '../home.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ICreateContentPayload, QUERY_KEYS } from '../home.interface'

export const useContentMutation = () => {
  const queryClient = useQueryClient()
  const { setIsModalOpen } = useContentStore()
  const { setContainerId } = useContentStore()
  const { setContentData } = useContentStore()

  return useMutation({
    mutationFn: (createContentPayload: ICreateContentPayload) => {
      return ContentService.createConent(createContentPayload)
    },
    onSuccess: () => {
      setContentData(undefined)
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_CONTENT]
      })
      setIsModalOpen(false)
      setContainerId(null)
    },
    onError: () => {}
  })
}
