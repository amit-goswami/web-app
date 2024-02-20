'use client'

import useContentStore from './store/home.store'
import { Container } from '@/app/components/atoms/container'
import { ResizableComponent } from '@/app/components/organisms/resizable'
import { ContentContainer } from './components/content-container'
import { useGetContent } from './hooks/useGetContent'

export const HomeComponent = () => {
  const { isLoading, isError } = useGetContent()
  const { contentData } = useContentStore()

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>
  if (!contentData) return <div>No content</div>

  return (
    <Container className="flex flex-col gap-10 h-screen">
      <Container className="flex gap-10">
        <ResizableComponent>
          <ContentContainer containerId="container1" content={contentData} />
        </ResizableComponent>
        <ResizableComponent>
          <ContentContainer containerId="container2" content={contentData} />
        </ResizableComponent>
      </Container>
      <Container>
        <ResizableComponent>
          <ContentContainer containerId="container3" content={contentData} />
        </ResizableComponent>
      </Container>
    </Container>
  )
}
