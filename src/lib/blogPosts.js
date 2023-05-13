import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";

const blogDirectory = path.join(process.cwd(), "src/blog");

export function getBlogPostData() {
  const fileNames = fs.readdirSync(blogDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(blogDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(blogDirectory);

  console.log("filenames" + fileNames);

  const paths = fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });

  return paths;
}

export function getAllFileForntmatter() {
  const fileNames = fs.readdirSync(blogDirectory);
  return fileNames.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(path.join(blogDirectory, postSlug), "utf8");

    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace(".md", ""),
      },
      ...allPosts,
    ];
  }, []);
}

export async function getPostData(slug) {
  const fullPath = path.join(blogDirectory, `${slug}.md`);
  const source = fs.readFileSync(fullPath, "utf8");
  const { code, frontmatter } = await bundleMDX(
    { source: source },
    {
      xdmOptions(options) {
        options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
        options.rehypePlugins = [
          ...(options?.rehypePlugins ?? []),
          rehypePrism,
        ];
        return options;
      },
    }
  );

  return {
    slug,
    frontmatter,
    code,
  };
}
