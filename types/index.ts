export interface BlogFrontMatter {
    slug: string;
    title: string;
    description: string;
    published: string;
    preview: string;
    author: string;
    authorImage: string;
}

export interface Blog {
    content: string;
    data: BlogFrontMatter;
    isEmpty: boolean;
    excerpt: string;
}