import Joi from 'joi'
import React, { useState } from 'react'
import { Form } from '@/app/components/molecules/form'
import { FormInput } from '@/app/components/molecules/form-input'
import { Container } from '@/app/components/atoms/container'
import { Button } from '@/app/components/atoms/button'

const validationSchema = Joi.object({
  updatedCount: Joi.number().required(),
  addCount: Joi.number().required(),
  formContent: Joi.string().required()
})

type ContentContainerProps = {
  containerId: string
}

export const ContentContainer = ({ containerId }: ContentContainerProps) => {
  const [initialValues, _setInitialValues] = useState({
    updatedCount: 10,
    addCount: 20,
    formContent: 'This is a form content'
  })

  const handleUpdate = () => {
    console.log('update')
  }

  const handleAdd = () => {
    console.log('add')
  }

  const submitForm = (data: Record<string, string | number | boolean>) => {
    console.log(data)
  }

  return (
    <Container className="sm:p-10 p-0">
      <Container className="flex gap-2">
        <Button onClick={handleUpdate} btnText="Update" />
        <Button onClick={handleAdd} btnText="Add" />
      </Container>
      <Container className="sm:p-10 p-0">
        <Form
          validationSchema={validationSchema}
          initialValues={initialValues}
          getFormData={submitForm}
          className="flex flex-col gap-4 w-1/1"
        >
          <FormInput name="formContent" label="Form Content" />
          <FormInput name="updatedCount" label="Update Count" />
          <FormInput name="addCount" label="Add Count" />
        </Form>
      </Container>
    </Container>
  )
}
