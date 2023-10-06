import { type Metadata } from 'next'
import Image from 'next/image'

import { Card, CardLink, CardDescription } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import chromeLogo from '@/images/logos/icons8-chrome-48.png'
import npmLogo from '@/images/logos/icons8-npm-48.png'
import reactLogo from '@/images/logos/icons8-react-a-javascript-library-for-building-user-interfaces-32.png'
import reduxLogo from '@/images/logos/icons8-redux-48.png'
import viteLogo from '@/images/logos/icons8-vite-48.png'

import { LinkIcon } from '../../components/icons/inkIcon'

// @TODO credit <a target="_blank" href="https://icons8.com/icon/jD-fJzVguBmw/redux">Redux</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Laststance.io Github repositories.',
}

const projects = [
  {
    name: 'eslint-config-ts-prefixer',
    description: 'Make Your Linter as Close to Prettier as Possible.',
    link: {
      href: 'https://github.com/laststance/eslint-config-ts-prefixer',
      label: 'eslint-config-ts-prefixer',
    },
    logo: npmLogo,
  },
  {
    name: 'Create React App Vite',
    description: 'Simple CRA style Vite teimpate.',
    link: {
      href: 'https://github.com/laststance/create-react-app-vite',
      label: 'Create React App Vite',
    },
    logo: viteLogo,
  },
  {
    name: 'vite-rtk-query',
    description:
      'Vite template for React + TypeScript + Redux-Toolkit / RTK Query.',
    link: {
      href: 'https://github.com/laststance/vite-rtk-query',
      label: 'vite-rtk-query',
    },
    logo: reduxLogo,
  },
  {
    name: 'git-commit-gpt',
    description:
      "An AI-powered Git extension that generates commit messages using OpenAI's GPT-3.5-turbo-instruct.",
    link: {
      href: 'https://github.com/laststance/git-commit-gpt',
      label: 'git-commit-gpt',
    },
    logo: npmLogo,
  },
  {
    name: 'nsx',
    description: 'Just logging tech resources I read.',
    link: { href: 'https://github.com/laststance/nsx', label: 'nsx' },
    logo: reactLogo,
  },
  {
    name: 'React TypeScript TodoMVC 2022',
    description: 'A Modern Code Style Todo Example.',
    link: {
      href: 'https://github.com/laststance/react-typescript-todomvc-2022',
      label: 'React TypeScript TodoMVC 2022',
    },
    logo: reactLogo,
  },
  {
    name: 'USD Query',
    description: 'Just make $ alias for document.querySelector.',
    link: {
      href: 'https://github.com/laststance/usd-query',
      label: 'USD Query',
    },
    logo: npmLogo,
  },
  {
    name: 'nsx-browser-extension',
    description: 'Browser Extension for nsx.',
    link: {
      href: 'https://github.com/laststance/nsx-browser-extension',
      label: 'nsx-browser-extension',
    },
    logo: chromeLogo,
  },
  {
    name: 'prettier-husky-lint-staged-installer',
    description: 'Setup prettier fortmat staged files at precommit.',
    link: {
      href: 'prettier-husky-lint-staged-installer',
      label: 'prettier-husky-lint-staged-installer',
    },
    logo: npmLogo,
  },
]

export default function Projects() {
  return (
    <SimpleLayout
      title="I eliminate all unnecessary complexity from Web Dev."
      intro="Laststance.io is currently focusing on React and other web
              development issues, as well as developing and researching
              toolchains to improve the quality of software development and the
              developer experience."
    >
      <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <CardLink href={project.link.href} target="_blank">
                {project.name}
              </CardLink>
            </h2>
            <CardDescription>{project.description}</CardDescription>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
