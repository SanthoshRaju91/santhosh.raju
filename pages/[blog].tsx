import matter from 'gray-matter'
import React from 'react'
import {NextPage, NextPageContext} from 'next'
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {atomDark} from 'react-syntax-highlighter/dist/cjs/styles/prism'

const components = {
  code({node, inline, className, children, ...props}: any) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter
        style={atomDark}
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
}

const Blog: NextPage<any> = ({blog}) => {
  const frontmatter = blog.data

  return (
    <div className="blog">
      <div className="blog__container">
        <div className="blog__container--title">
          <h1>{frontmatter.title}</h1>
        </div>
        <div className="blog__container--published">
          <div className="published-author">
            <img src={frontmatter.authorImage} alt="Author" />
            <h5>{frontmatter.author}</h5>
          </div>
          <div className="published-on">
            <h4>{frontmatter.published}</h4>
          </div>
        </div>

        <div className="blog__content">
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
