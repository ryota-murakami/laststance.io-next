import rehypePrism from '@mapbox/rehype-prism'
// import mdxLoader from '@mdx-js/loader'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // @FIXME SyntaxError: "undefined" is not valid JSON
  // experimental: {
  //   turbo: {
  //     rules: {
  //       '*.mdx': [
  //         function (code) {
  //           const prevGetOptions = this.getOptions.bind(this)
  //           this.getOptions = function getOptions(...args) {
  //             return {
  //               ...prevGetOptions(...args),
  //               rehypePlugins: [rehypePrism],
  //               remarkPlugins: [remarkGfm],
  //             }
  //           }
  //
  //           mdxLoader.call(this, code)
  //         },
  //       ],
  //     },
  //   },
  // },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypePrism],
    remarkPlugins: [remarkGfm],
  },
})

export default withMDX(nextConfig)
