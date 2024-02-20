'use client'

import React, { ReactNode } from 'react'
import { Button } from '@/app/components/atoms/button'
import { Container } from '@/app/components/atoms/container'
import { Text } from '@/app/components/atoms/text'

export type ErrorBoundaryProps = {
  children: ReactNode
}

export type ErrorBoundaryState = {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  render() {
    if (this.state.hasError) {
      return (
        <Container className="bg-white py-24 sm:py-32 h-screen flex items-center justify-center flex-col gap-3">
          <Text as="h2" className="text-4xl text-neutral-800">
            Oops, Something went wrong!
          </Text>
          <Button
            onClick={() => this.setState({ hasError: false })}
            btnText=" Try Again"
          />
        </Container>
      )
    }
    return this.props.children
  }
}
