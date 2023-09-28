import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import { getAllArticles } from '@/lib/articles'

import { Article } from './_page/article'
import { GithubFeedList } from './_page/githubFeedList'
import { Photos } from './_page/photos'
import { SocialLink } from './_page/socialLink'

export default async function Home() {
  const articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Go Straightforward Web Application Development.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I'm{' '}
            <a href="https://ryota-murakami.github.io/" target="_blank">
              Ryota Murakami
            </a>{' '}
            who live in Tokyo. Currently working as a fleelance
            React/Node/TypeScirpt developer. Here is my invididual OSS
            organization.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/malloc007"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://www.instagram.com/ryota_murakam1/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/ryota-murakami"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/ryota-murakami-ba9206164/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* @TODO currently unable <Newsletter /> */}
            <GithubFeedList />
          </div>
        </div>
      </Container>
    </>
  )
}

// @TODO currently unable
//function Newsletter() {
//  return (
//    <form
//      action="/thank-you"
//      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
//    >
//      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
//        <MailIcon className="h-6 w-6 flex-none" />
//        <span className="ml-3">Stay up to date</span>
//      </h2>
//      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
//        Get notified when I publish something new, and unsubscribe at any time.
//      </p>
//      <div className="mt-6 flex">
//        <input
//          type="email"
//          placeholder="Email address"
//          aria-label="Email address"
//          required
//          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
//        />
//        <Button type="submit" className="ml-4 flex-none">
//          Join
//        </Button>
//      </div>
//    </form>
//  )
//}

//function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
//  return (
//    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
//      <path
//        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
//        strokeWidth="1.5"
//        strokeLinecap="round"
//        strokeLinejoin="round"
//      />
//    </svg>
//  )
//}

//function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
//  return (
//    <svg
//      viewBox="0 0 24 24"
//      fill="none"
//      strokeWidth="1.5"
//      strokeLinecap="round"
//      strokeLinejoin="round"
//      aria-hidden="true"
//      {...props}
//    >
//      <path
//        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
//        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
//      />
//      <path
//        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
//        className="stroke-zinc-400 dark:stroke-zinc-500"
//      />
//    </svg>
//  )
//}
