import Joi from 'joi'
import useContentStore from '../../store/home.store'
import React, { useState } from 'react'
import { Form } from '@/app/components/molecules/form'
import { FormInput } from '@/app/components/molecules/form-input'
import { Container } from '@/app/components/atoms/container'
import { Button } from '@/app/components/atoms/button'
import { IContent, UPDATE_TYPE } from '@/app/shared/shared.interface'
import { getContentDetails } from '@/app/utilities/getContentDetails'
import { Modal } from '@/app/components/molecules/modal'
import { CreateFormModal } from '../create-form-modal'

const validationSchema = Joi.object({
  updateCount: Joi.number().required(),
  addCount: Joi.number().required(),
  formContent: Joi.string().required()
})

type ContentContainerProps = {
  containerId: string
  content: IContent[] | undefined
}

export const ContentContainer = ({
  containerId,
  content
}: ContentContainerProps) => {
  const contentDetails = content && getContentDetails(content, containerId)
  const [initialValues, _setInitialValues] = useState<IContent | undefined>(
    contentDetails
  )
  const { setIsModalOpen } = useContentStore()
  const { setUpdateType } = useContentStore()
  const { setContainerId } = useContentStore()
  const { updateType } = useContentStore()
  const { isModalOpen } = useContentStore()

  const handleButtonClick = (type: UPDATE_TYPE) => {
    setUpdateType(type)
    setContainerId(containerId)
    setIsModalOpen(!isModalOpen)
  }

  const handleModalClose = () => {
    setUpdateType(null)
    setContainerId(null)
    setIsModalOpen(!isModalOpen)
  }

  const submitForm = (data: Record<string, string | number | boolean>) => {
    console.log(data)
  }

  return (
    <Container className="sm:p-10 p-0">
      <Container className="flex gap-2">
        <Button
          onClick={() => handleButtonClick(UPDATE_TYPE.UPDATE)}
          btnText="Update"
        />
        <Button
          onClick={() => handleButtonClick(UPDATE_TYPE.ADD)}
          btnText="Add"
        />
      </Container>
      <Container className="sm:p-10 p-0">
        {contentDetails && initialValues && (
          <Form
            validationSchema={validationSchema}
            initialValues={
              initialValues as unknown as Record<
                string,
                string | number | boolean
              >
            }
            getFormData={submitForm}
            className="flex flex-col gap-4 w-1/1"
          >
            <FormInput name="content" label="Form Content" disabled />
            <FormInput name="updateCount" label="Update Count" disabled />
            <FormInput name="addCount" label="Add Count" disabled />
          </Form>
        )}
      </Container>
      <Modal
        title={`${updateType === UPDATE_TYPE.UPDATE ? 'Update' : 'Add'} Content`}
        isOpen={isModalOpen}
        content={<CreateFormModal />}
        onClose={() => handleModalClose()}
      />
    </Container>
  )
}
