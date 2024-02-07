import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote';

const BlogPost = ({ source, frontMatter }) => {
  return (
    <div>
      <h1>{frontMatter.title}</h1>
      <MDXRemote {...source} />
    </div>
  );
};

export async function getStaticPaths() {
  const BLOGDATA = [
    {
      id: "1",
      title: "Test",
    },
    {
      id: "2",
      title: "Test 2",
    },
    {
      id: "3",
      title: "Test 3",
    },
    {
      id: "4",
      title: "Test 4",
    },
  ];

  const paths = BLOGDATA.map((post) => ({
    params: { slug: post.id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postFilePath = path.join(process.cwd(), 'content/blog', `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath, 'utf8');
  const { content, data: frontMatter } = matter(source);

  const mdxSource = await serialize(content, { scope: frontMatter });

  return {
    props: {
      source: mdxSource,
      frontMatter,
    },
  };
}

export default BlogPost;