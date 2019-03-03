import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `blog`, `react`]} />
    <h1>Hello All</h1>
    <p>Welcome to the blog.</p>
    <p>This blog explores my personal journey into programming and the world of software development. Please feel free to have a look aaround. You can learn about me my clicking on the About Me link above or you can read the blog covering various topics by clicking on the Blog link. Thanks for stopping by.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image style={{ margin: `auto`}}/>
    </div>
  </Layout>
)

export default IndexPage
