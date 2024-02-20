'use client'

import { Container } from '@/app/components/atoms/container'
import { ResizableComponent } from '@/app/components/organisms/resizable'
import { ContentContainer } from './components/content-container'
import { useGetContent } from './hooks/useGetContent'

export const HomeComponent = () => {
  const { data, isLoading, isError } = useGetContent()
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>
  return (
    <Container className="flex flex-col gap-10 h-screen">
      <Container className="flex gap-10">
        <ResizableComponent>
          <ContentContainer containerId="container1" content={data} />
        </ResizableComponent>
        <ResizableComponent>
          <ContentContainer containerId="container2" content={data} />
        </ResizableComponent>
      </Container>
      <Container>
        <ResizableComponent>
          <ContentContainer containerId="container3" content={data} />
        </ResizableComponent>
      </Container>
    </Container>
  )
}
