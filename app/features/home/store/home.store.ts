import { IContent, UPDATE_TYPE } from '@/app/shared/shared.interface'
import { create } from 'zustand'

type ContentManagementState = {
  isModalOpen: boolean
  updateType: UPDATE_TYPE | null
  containerId: string | null
  contentData: IContent[] | undefined
  setContainerId: (containerId: string | null) => void
  setUpdateType: (updateType: UPDATE_TYPE | null) => void
  setIsModalOpen: (isOpen: boolean) => void
  setContentData: (contentData: IContent[] | undefined) => void
}

const useContentStore = create<ContentManagementState>((set) => ({
  isModalOpen: false,
  updateType: null,
  containerId: null,
  contentData: undefined,
  setContainerId: (containerId) => set({ containerId: containerId }),
  setUpdateType: (updateType) => set({ updateType: updateType }),
  setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen }),
  setContentData: (contentData) => set({ contentData: contentData })
}))

export default useContentStore
