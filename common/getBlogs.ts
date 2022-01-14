import matter from "gray-matter";
import { BlogMatter } from "./type";

function getBlogs(): Array<BlogMatter> {
    const fs = require("fs");

    const blogsDirPath = `${process.cwd()}/blogs`;

  const files = fs.readdirSync(blogsDirPath, "utf-8");
  const markdownFiles = files.filter((fn: any) =>
    fn.endsWith(".md")
  ) as Array<string>;

  const blogs: Array<BlogMatter> = markdownFiles.map((blog) => {
    const path = `${blogsDirPath}/${blog}`;
    const rawContent = fs.readFileSync(path, { encoding: "utf-8" });
    const { data } = matter(rawContent);
    if (data.tags && typeof data.tags === "string") {
      data.tags = data.tags.split(", ");
    }
    return data;
  }) as Array<BlogMatter>;

    return blogs
}

export default getBlogs;