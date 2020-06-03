import React from 'react'
import { graphql, navigate } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

import Layout from '../../sections/Layout'
import { CodeBlock } from '../../components'

import normalize from '../../utils/normalize'

import {
   Wrapper,
   H1,
   H2,
   H3,
   Para,
   Image,
   List,
   ListItem,
   BlockQuote,
   Table,
   Tbody,
   Th,
   Td,
   Pagination,
   Next
} from './styled'

const DocTemplate = ({ data: { mdx, site }, path }) => {
   const [next, setNext] = React.useState(null)
   const [prev, setPrev] = React.useState(null)
   const { menu } = site.siteMetadata
   React.useEffect(() => {
      const pages = normalize(menu)

      let index = pages.findIndex(page => page.link === mdx.fields.slug)
      if (index <= pages.length) {
         setNext(pages[index + 1])
      }
      if (index > 0) {
         setPrev(pages[index - 1])
      }
   }, [menu, mdx.fields.slug])

   return (
      <Layout path={path}>
         <Wrapper>
            <MDXProvider
               components={{
                  h1: ({ children }) => <H1>{children}</H1>,
                  h2: ({ children }) => <H2>{children}</H2>,
                  h3: ({ children }) => <H3>{children}</H3>,
                  p: ({ children }) => <Para>{children}</Para>,
                  a: ({ href, children, title }) => (
                     <a href={href} title={title}>
                        {children}
                     </a>
                  ),
                  img: ({ src, alt, title }) => (
                     <Image src={src} alt={alt} title={title} />
                  ),
                  ul: ({ children: list }) => (
                     <List>
                        {list.map(({ props }, index) => (
                           <ListItem key={index}>{props.children}</ListItem>
                        ))}
                     </List>
                  ),
                  blockquote: ({ children: { props } }) => (
                     <BlockQuote>{props.children}</BlockQuote>
                  ),
                  table: ({ children }) => <Table>{children}</Table>,
                  tbody: ({ children }) => <Tbody>{children}</Tbody>,
                  th: ({ children }) => <Th>{children}</Th>,
                  td: ({ children }) => <Td>{children}</Td>,
                  pre: props => <CodeBlock {...props.children.props} />
               }}>
               <MDXRenderer>{mdx.body}</MDXRenderer>
            </MDXProvider>
            <Pagination>
               {prev && (
                  <div role="button" onClick={() => navigate(prev.link)}>
                     <span>Previous</span>
                     <h3>{prev.title}</h3>
                  </div>
               )}
               {next && (
                  <Next role="button" onClick={() => navigate(next.link)}>
                     <span>Next</span>
                     <h3>{next.title}</h3>
                  </Next>
               )}
            </Pagination>
         </Wrapper>
      </Layout>
   )
}

export default DocTemplate

export const query = graphql`
   query($slug: String) {
      mdx(fields: { slug: { eq: $slug } }) {
         body
         frontmatter {
            title
         }
         fields {
            slug
         }
      }
      site {
         siteMetadata {
            menu {
               link
               title
               children {
                  link
                  title
               }
            }
         }
      }
   }
`
