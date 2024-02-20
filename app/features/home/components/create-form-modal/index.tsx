import Joi from 'joi'
import useContentStore from '../../store/home.store'
import { Button } from '@/app/components/atoms/button'
import { Form } from '@/app/components/molecules/form'
import { FormInput } from '@/app/components/molecules/form-input'
import { Container } from '@/app/components/atoms/container'
import { useContentMutation } from '../../hooks/useAddContentMutation'
import { ICreateContentPayload } from '../../home.interface'

const validationSchema = Joi.object({
  content: Joi.string().required()
})

export const CreateFormModal = () => {
  const useContentMutate = useContentMutation()
  const { updateType } = useContentStore()
  const { containerId } = useContentStore()

  const submitForm = (data: Record<string, string | number | boolean>) => {
    const payload = {
      content: data.content as string,
      containerId: containerId,
      updateType
    } as ICreateContentPayload
    useContentMutate.mutate(payload)
  }

  return (
    <Form validationSchema={validationSchema} getFormData={submitForm}>
      <FormInput
        name="content"
        label="Form Content"
        placeholder="Please Enter Content"
      />
      <Container className="flex items-end flex-1 mt-6">
        <Button type="submit" btnText="Submit" />
      </Container>
    </Form>
  )
}
