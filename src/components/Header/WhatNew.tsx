'use client'

import React from 'react'

import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { ScrollArea } from '../ui/scroll-area'
import { Separator } from '../ui/separator'

interface Props {
  date: DateString
  li: string[]
}
const List: React.FC<Props> = ({ date, li }) => (
  <>
    <Separator className="mb-4" />
    <h3 className="font-bold text-lg">{date}</h3>
    <ul className="mt-4 ml-6 list-disc text-base">
      {li.map((v) => (
        <li>{v}</li>
      ))}
    </ul>
  </>
)

const WhatNew: React.FC<{}> = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">Waht's New？</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] sm:min-h-[425px] scroll-auto">
        <DialogHeader>
          <DialogTitle>What's New?</DialogTitle>
        </DialogHeader>
        <ScrollArea className="mt-4 space-y-4">
          <List
            date="2023-10-07"
            li={[
              "Add What's New?",
              'Change shacdn "baseColor": "zinc"',
              'Fix GithubFeed Style',
            ]}
          />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

export default WhatNew
