import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

type ISeoPropTypes = {
    title: string
}

const Seo = ({ title }: ISeoPropTypes) => {
  const data: any = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <title>{title} | {data.site.siteMetadata.title}</title>
  )
}

export default Seo