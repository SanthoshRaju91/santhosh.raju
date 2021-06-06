import matter from 'gray-matter'
import React from 'react'
import {NextPage, NextPageContext} from 'next'
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {darcula} from 'react-syntax-highlighter/dist/cjs/styles/prism'
import {LinkPreview} from '../components/LinkPreview'

const components = {
  code({node, inline, className, children, ...props}: any) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter
        style={darcula}
        language={match[1]}
        PreTag="div"
        className="syntax-highlighter"
        children={String(children).replace(/\n$/, '')}
        {...props}
      />
    ) : (
      <code className={`${className} inline-code`} {...props}>
        {children}
      </code>
    )
  },
  img({src, alt}: any) {
    return <img src={src} alt={alt} width="200" height="200" />
  },
  a({href}: any) {
    return <LinkPreview url={href} />
  },
}

const Blog: NextPage<any> = ({blog}) => {
  const frontmatter = blog.data

  return (
    <div className="blog">
      <div className="blog__container">
        <div className="blog__container--title">
          <h3>{frontmatter.title}</h3>
        </div>
        <div className="blog__container--published">
          <div className="published-author">
            <img src={frontmatter.authorImage} alt="Author" />
            <p>{frontmatter.author}</p>
          </div>
          <div className="published-on">
            <span>Published on </span>
            <h4>{frontmatter.published}</h4>
          </div>
        </div>

        <div className="blog__container--content">
          <ReactMarkdown
            children={blog.content}
            skipHtml={true}
            components={components}
          />
        </div>
      </div>
    </div>
  )
}

export default Blog

Blog.getInitialProps = async (context: NextPageContext) => {
  const {blog} = context.query

  const content = await import(`../content/${blog}.md`)
  const data = matter(content.default)
  return {
    blog: data,
  }
}
