import type { FunctionComponent, ComponentProps } from 'react'

declare module 'next/link' {
  var Link: FunctionComponent<ComponentProps<'a'>>
  export = Link
}
