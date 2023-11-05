import type { Feed } from '../../lib/octokit'

import './FeedItem.css'
interface Props {
  feed: Feed
}

export const FeedItem: React.FC<Props> = ({ feed }) => (
  <li className="FeedItem_container">
    <dd className="text-sm text-zinc-500 dark:text-zinc-400 dark:bg-zinc-800/90">
      <div dangerouslySetInnerHTML={{ __html: feed.content[0]._ }} />
    </dd>
  </li>
)
