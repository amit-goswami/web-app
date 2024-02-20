'use client'

import { Resizable } from 're-resizable'

type ResizableProps = {
  width?: number | string
  height?: number | string
  children?: React.ReactNode
}

export const ResizableComponent = ({
  children,
  width = 'auto',
  height = '50vh'
}: ResizableProps) => {
  return (
    <Resizable
      defaultSize={{
        width: width,
        height: height
      }}
      className="flex-1 justify-center items-center border border-gray-300 bg-gray-100"
    >
      {children}
    </Resizable>
  )
}
