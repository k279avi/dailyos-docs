import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import { Accordian, AccordianPanel } from '../../components'

import { StyledAside, StyledList, StyledListItem } from './styled'

const Sidebar = ({ isVisible, current }) => {
   const [isOpen, setIsOpen] = React.useState('')
   const query = useStaticQuery(graphql`
      query MyQuery {
         site {
            siteMetadata {
               menu {
                  title
                  link
                  children {
                     title
                     link
                  }
               }
            }
         }
      }
   `)

   const { menu } = query.site.siteMetadata
   return (
      <StyledAside isVisible={isVisible}>
         <Accordian>
            {menu.map(section => (
               <React.Fragment key={section.title}>
                  {section.link && (
                     <StyledListItem
                        key={section.id}
                        isActive={section.link === current}>
                        <Link to={section.link}>{section.title}</Link>
                     </StyledListItem>
                  )}
                  {section.children && section.children.length > 0 && (
                     <AccordianPanel
                        label={section.title}
                        isOpen={
                           isOpen === section.title ||
                           section.title.toLowerCase() === current.split('/')[2]
                        }
                        onClick={() =>
                           setIsOpen(isOpen =>
                              isOpen !== section.title ? section.title : ''
                           )
                        }>
                        <StyledList>
                           {section.children.map(page => (
                              <StyledListItem
                                 key={page.title}
                                 isActive={page.link === current}>
                                 <Link to={page.link}>{page.title}</Link>
                              </StyledListItem>
                           ))}
                        </StyledList>
                     </AccordianPanel>
                  )}
               </React.Fragment>
            ))}
         </Accordian>
      </StyledAside>
   )
}

export default Sidebar

/*
getProps={props => props.isCurrent && setCurrent(props.href)}
*/
