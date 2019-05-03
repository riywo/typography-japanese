import React from "react"
import { graphql } from "gatsby"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { html } = markdownRemark
  return (
    <div
      className="content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export const pageQuery = graphql`
  query($fileAbsolutePath: String!) {
    markdownRemark(fileAbsolutePath: { eq: $fileAbsolutePath }) {
      html
    }
  }
`
