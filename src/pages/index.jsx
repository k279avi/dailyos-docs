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
            <h2>DailyOS Docs and Learning Center</h2>
            <p>
               DailyOS is an open source platform for restaurants, grocers, and new age food-preneurs to start and operate their food business.✨
            </p>
            <div>
               <Link to="/docs/introduction">See Docs</Link>
            </div>
         </Left>
         <div>
            <Illo />
         </div>
      </Row>
   </div>
)

export default IndexPage
