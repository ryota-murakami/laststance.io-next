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
  <div className="mt-4">
    <Separator className="mb-4" />
    <h3 className="font-bold text-lg">{date}</h3>
    <ul className="mt-4 ml-6 list-disc text-base">
      {li.map((v) => (
        <li key={v}>{v}</li>
      ))}
    </ul>
  </div>
)

const WhatNew: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">Waht's New？</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] sm:min-h-[425px] max-h-[600px] overflow-y-scroll">
        <DialogHeader>
          <DialogTitle>What's New?</DialogTitle>
        </DialogHeader>
        <ScrollArea className="mt-4 space-y-4">
          <List
            date="2023-10-25"
            li={[
              'Update "Go to symbol" keybind to "CMD + Shift + O"',
              'Remove incorrect keybinds',
            ]}
          />
          <List
            date="2023-10-24"
            li={['Fix broken blog post body style.', 'Add og image']}
          />
          <List
            date="2023-10-17"
            li={['Add Laststance.io and Dotfiles in Projects.']}
          />
          <List date="2023-10-16" li={['Fix Keybinds page typography.']} />
          <List
            date="2023-10-07"
            li={[
              "Add What's New?",
              'Change shacdn "baseColor": "zinc"',
              'Fix GithubFeed Style',
              'Add 8icon Credit at Projects page',
            ]}
          />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

export default WhatNew
