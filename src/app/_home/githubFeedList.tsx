import { fetchGithubFeedList } from '../../lib/octokit'

import { BriefcaseIcon } from './briefcaseIcon'
import { FeedItem } from './FeedItem'

export async function GithubFeedList() {
  const githubFeedList = await fetchGithubFeedList()

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Github Feed</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {githubFeedList.map((feed, i) => (
          <FeedItem key={i} feed={feed} />
        ))}
      </ol>
    </div>
  )
}
