import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import remarkGfm from "remark-gfm";

const blogDirectory = path.join(process.cwd(), "src/blog");
const blogComponentDir = path.join(process.cwd(), "src/components/mdx");

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

export function getAllTags() {
  const fileNames = fs.readdirSync(blogDirectory);
  let set = new Set();
  fileNames.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(path.join(blogDirectory, postSlug), "utf8");
    const { data } = matter(source);
    console.log(JSON.stringify(data));
    let tagsArray = data.tags.split(",");
    tagsArray.map((tag) => set.add(tag));
  }, []);

  return Array.from(set);
}

export function getAllTagsPath() {
  let tags = getAllTags();
  console.log("tag===" + tags);
  const paths = tags.map((tag) => {
    return {
      params: {
        slug: tag,
      },
    };
  });
  return paths;
}

export function getFileFrontmatterByTag(tag) {
  const fileNames = fs.readdirSync(blogDirectory);
  return fileNames
    .reduce((allPosts, postSlug) => {
      const source = fs.readFileSync(
        path.join(blogDirectory, postSlug),
        "utf8"
      );
      const { data } = matter(source);
      return [
        {
          ...data,
          slug: postSlug.replace(".md", ""),
        },
        ...allPosts,
      ];
    }, [])
    .filter((frontmatter) => {
      let tagArray = frontmatter.tags.split(",");
      if (tagArray.includes(tag)) {
        return true;
      } else {
        return false;
      }
    });
}

export function getAllFileFrontmatter() {
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
  const { code, frontmatter } = await bundleMDX({
    source: source,
    cwd: blogComponentDir,
    mdxOptions(options, frontmatter) {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [...(options.rehypePlugins ?? [])];
      return options;
    },
    esbuildOptions(options, frontmatter) {
      options.minify = false;
      options.target = ["es2015"];
      //   配置esbuild解析js文件通过jsx方式
      options.loader = {
        ...options.loader,
        ".js": "jsx",
      };
      return options;
    },
  });
  return {
    slug,
    frontmatter,
    code,
  };
}
