import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";

const blogDirectory = path.join(process.cwd(), "blog");

export function getBlogPostData() {
  // same as nextjs tutorial
}

export function getAllPostSlugs() {
  // same as nextjs tutorial
}

export async function getPostData(slug) {
  const fullPath = path.join(blogDirectory, `${slug}.mdx`);
  const source = fs.readFileSync(fullPath, "utf8");

  const { code, frontmatter } = await bundleMDX(source: source, {
    xdmOptions(options) {
      options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [...(options?.rehypePlugins ?? []), rehypePrism];
      return options;
    },
  });

  return {
    slug,
    frontmatter,
    code,
  };
}