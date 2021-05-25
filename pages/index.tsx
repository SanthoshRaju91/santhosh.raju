import React from 'react'
import Head from 'next/head'
import matter from 'gray-matter'

import { Banner } from '../components/Banner'
import { Blogs } from '../components/Blogs'

const Index = (props: any) => {
  const data = props.data.map((blog: string) => matter(blog))
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={props.description} />
        <title>{props.title}</title>
      </Head>

      <Banner />
      <Blogs />
    </>
  )
}

export default Index

export async function getStaticProps() {
  const siteData = await import('../config.json')

  const fs = require('fs')

  const files = fs.readdirSync(`${process.cwd()}/content`, 'utf-8')
  const blogs = files.filter((fn: any) => fn.endsWith('.md'))

  const data = blogs.map((blog: any) => {
    const path = `${process.cwd()}/content/${blog}`
    const rawContent = fs.readFileSync(path, {
      encoding: 'utf-8'
    })

    return rawContent
  })

  return {
    props: {
      title: siteData.default.title,
      description: siteData.default.description,
      data: data
    }
  }
}