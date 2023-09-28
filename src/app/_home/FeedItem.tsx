import type { Feed } from '../../lib/octokit'

interface Props {
  feed: Feed
}

export const FeedItem: React.FC<Props> = ({ feed }) => (
  <li className="flex gap-4">
    <dl className="flex flex-auto flex-wrap gap-x-2">
      <dt className="sr-only">Feed Item</dt>
      <dd className="text-zinc-500 dark:text-zinc-400">
        <div dangerouslySetInnerHTML={{ __html: feed.content[0]._ }} />
      </dd>
    </dl>
  </li>
)
