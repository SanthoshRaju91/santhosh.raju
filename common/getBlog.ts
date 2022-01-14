import matter from 'gray-matter'
import { join } from 'path'
import { Blog, BlogMatter } from './type'

const blogsDir = join(process.cwd(), 'blogs')

export function getBlogBySlug(slug: string): Blog {
    const fs = require('fs')

    const blogPath = join(blogsDir, `${slug}.md`)
    const blogContents = fs.readFileSync(blogPath, 'utf-8')
    const { data, content } = matter(blogContents)

    const blogMetadata = {
        author: data.author,
        authorProfilePic: data.authorProfilePic,
        preview: data.preview,
        published: data.published,
        slug: data.slug,
        synopsis: data.synopsis,
        tags: data.tags,
        title: data.title
    } as BlogMatter

    if (data.tags && typeof data.tags === "string") {
        data.tags = data.tags.split(", ")
    }    

    return {
        slug,
        meta: blogMetadata,
        content
    }
}