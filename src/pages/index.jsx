import React from 'react'
import { Link } from 'gatsby'

import Header from '../sections/Header'
import { Row, Left } from '../styled'
import { Illo } from '../assets/svgs'

const IndexPage = () => (
   <div>
      <Header hideMenu={true} />
      <Row>
         <Left>
            <h2>DailyGit Docs</h2>
            <p>
               A headless CMS powered by GraphQL built with Filesystem and Git
               to provide content versioning. Build your own CMS by defining
               contextual entity schemas.✨
            </p>
            <div>
               <Link to="/docs/introduction">See Docs</Link>
               <a
                  href="https://github.com/dailykit/dailygit"
                  target="_blank"
                  rel="noopener"
                  rel="norefferer">
                  View Source
               </a>
            </div>
         </Left>
         <div>
            <Illo />
         </div>
      </Row>
   </div>
)

export default IndexPage
