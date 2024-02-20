'use client'

import { Container } from '@/app/components/atoms/container'
import { ResizableComponent } from '@/app/components/organisms/resizable'
import { ContentContainer } from './components/content-container'

export const HomeComponent = () => {
  return (
    <Container className="flex flex-col gap-10 h-screen">
      <Container className="flex gap-10">
        <ResizableComponent>
          <ContentContainer containerId="container1" />
        </ResizableComponent>
        <ResizableComponent>
          <ContentContainer containerId="container2" />
        </ResizableComponent>
      </Container>
      <Container>
        <ResizableComponent>
          <ContentContainer containerId="container3" />
        </ResizableComponent>
      </Container>
    </Container>
  )
}
