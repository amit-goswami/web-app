import { UPDATE_TYPE } from '@/app/shared/shared.interface'
import { create } from 'zustand'

type ContentManagementState = {
  isModalOpen: boolean
  updateType: UPDATE_TYPE | null
  containerId: string | null
  setContainerId: (containerId: string | null) => void
  setUpdateType: (updateType: UPDATE_TYPE | null) => void
  setIsModalOpen: (isOpen: boolean) => void
}

const useContentStore = create<ContentManagementState>((set) => ({
  isModalOpen: false,
  updateType: null,
  containerId: null,
  setContainerId: (containerId) => set({ containerId: containerId }),
  setUpdateType: (updateType) => set({ updateType: updateType }),
  setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen })
}))

export default useContentStore
