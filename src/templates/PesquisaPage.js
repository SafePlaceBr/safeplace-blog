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
          <div className="button-space"><a className="button-pesquisa" href="https://docs.google.com/forms/d/e/1FAIpQLSfhtSK-hlFhyZ8qRQHS3tXZruUCE9WM0zt5CoNz5qQUqlSSAw/viewform?embedded=true" target="_blank" rel="noopener noreferrer">Responda a nossa pesquisa</a></div>
          <div className="button-space"><a className="button-pesquisa" href="/2023-safeplace-assedio-no-trabalho.pdf" target="_blank" >Resultados da pesquisa - 2023</a></div>
        </div>
      </div>
      <div className="container Contact--Section1--Container apoio">
        <div>
          Realização:
          <p>Safeplace</p>
        </div>
        <div>
          Apoiadores:
          <p>Hub Mulher; Mulheres Conectadas</p>
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
