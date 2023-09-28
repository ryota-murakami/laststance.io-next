import process from 'node:process'

import { parse } from 'node-html-parser'
import { Octokit } from 'octokit'
import { parseStringPromise } from 'xml2js'

const octokit = new Octokit({
  auth: process.env.PERSONAL_ACCESS_TOKEN,
})

export const fetchGithubFeedList = async (): Promise<Feed[]> => {
  const res = await octokit.request(
    'GET https://github.com/ryota-murakami.private.actor.atom?token=ABJ7CVE5QRNVWWSAQKCSV3ODEDT2G',
    {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    },
  )
  const xml = await parseStringPromise(res.data)
  const feedList = xml['feed']['entry'].map((f: Feed) => {
    // Parse the HTML content
    const root = parse(f.content[0]._)

    // Update all href attributes
    root.querySelectorAll('a').forEach((link) => {
      const href = link.getAttribute('href')
      if (href && !href.startsWith('http')) {
        link.setAttribute('href', `https://github.com${href}`)
      }
    })

    // Return the updated HTML content as a string
    f.content[0]._ = root.toString()
    return f
  })

  return feedList
}

export type Feed = {
  id: string[]
  title: {
    $: {
      type: string
    }
    _: string
  }[]
  author: {
    name: string[]
    email: string[]
    uri: string[]
  }[]
  content: {
    $: {
      type: string
    }
    _: string
  }[]
  link: {
    $: {
      href: string
      rel: string
      type: string
    }
  }[]
  'media:thumbnail': {
    $: {
      height: string
      url: string
      width: string
    }
  }[]
  published: string[]
  updated: string[]
}
