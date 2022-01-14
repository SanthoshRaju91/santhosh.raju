export type BlogMatter = {
    slug: string;
    title: string;
    synopsis: string;
    published: string;
    preview: string;
    author: string;
    authorProfilePic: string;
    tags: Array<string>;
};

export type Blog = {
    slug: string
    meta: BlogMatter,
    content: string
}