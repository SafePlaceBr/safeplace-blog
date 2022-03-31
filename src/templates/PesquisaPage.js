import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import './PesquisaPage.css'

// Export Template for use in CMS preview
export const PesquisaPageTemplate = ({
  body,
  title,
  subtitle,
  featuredImage,
  address,
  phone,
  email
}) => (
  <main className="Contact">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section Contact--Section1">
      <div className="container Contact--Section1--Container">
        <div>
          <Content source={body} />
        </div>
        <div>
          <a className="button-pesquisa" href="https://pesquisa.besafeplace.org/" target="_blank" rel="noopener noreferrer">Acesse a pesquisa</a>
        </div>
      </div>
    </section>
  </main>
)

const PesquisaPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <PesquisaPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)

export default PesquisaPage

export const pageQuery = graphql`
  query PesquisaPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        address
        phone
        email
      }
    }
  }
`
