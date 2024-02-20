import Link from 'next/link'
import { Container } from '@/app/components/atoms/container'
import { Text } from '@/app/components/atoms/text'
import { ROUTES } from '@/app/shared/shared.interface'

export const NotFoundComponent = () => {
  return (
    <Container className="py-24 sm:py-32 h-screen flex items-center justify-center">
      <Container className="flex gap-1 flex-col ">
        <Text as="h2" className="text-4xl text-neutral-800">
          404 Not Found
        </Text>
        <Link href={ROUTES.HOME} className="text-neutral-600">
          Go Home <span aria-hidden="true">&rarr;</span>
        </Link>
      </Container>
    </Container>
  )
}
