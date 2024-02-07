import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Spacer from '../../components/Spacer';
import Container from '../../components/Container';


const BlogPost = ({ source, frontMatter }) => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page if a 404 error occurs
    if (!frontMatter) {
      router.replace('/');
    }
  }, [frontMatter, router]);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const handleBack = () => {
    router.back();
  };

  return (
    <Container>
      <div className="p-3 justify-center text-center">
        <Spacer />
        <div className="m-8 text-left">
          <button
            onClick={handleBack}
            className="underline cursor-pointer"
            style={{ textDecoration: 'underline', cursor: 'pointer' }}
          >
            Back to home
          </button>
        </div>
        <div className="w-full items-center justify-center">
          <div className="space-y-4">
            <h1 className="font-bold text-3xl space-y-4">{frontMatter.title}</h1>
          </div>
          <div className="mx-auto max-w-screen-md text-left">
            <MDXRemote {...source} />
          </div>
        </div>
      </div>
    </Container>
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
  return { paths, fallback: true }; // Set fallback to true
}

export async function getStaticProps({ params }) {
  const postFilePath = path.join(process.cwd(), 'content/blog', `${params.slug}.mdx`);

  try {
    // Check if the file exists
    if (!fs.existsSync(postFilePath)) {
      throw new Error('Blog post not found');
    }

    const source = fs.readFileSync(postFilePath, 'utf8');
    const { content, data: frontMatter } = matter(source);

    return {
      props: {
        source: await serialize(content, { scope: frontMatter }),
        frontMatter,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default BlogPost;