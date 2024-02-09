import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Spacer from '../../components/Spacer';
import ContainerBlog from '../../components/ContainerBlog';
import { MDXProvider } from '@mdx-js/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import CopyToClipboard from 'react-copy-to-clipboard';

const components = {
  h1: (props) => <h1 style={{ fontSize: '2em', fontWeight: 'bold' }} {...props} />,
  h2: (props) => <h2 style={{ fontSize: '1em', fontWeight: 'bold' }} {...props} />,
  pre: ({ children }) => <>{children}</>, // Use a wrapper for the pre tag
  code: ({ className, children }) => {
    const language = className ? className.replace(/language-/, '') : '';

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    };

    return (
      <div style={{ position: 'relative' }}>
        <CopyToClipboard text={String(children)} onCopy={handleCopy}>
          <button
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              zIndex: '1',
              padding: '5px',
              backgroundColor: '#333',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            {copied ? 'Copied!' : 'Copy to Clipboard'}
          </button>
        </CopyToClipboard>
        <SyntaxHighlighter
          style={nightOwl}
          language={language}
          PreTag="div"
          children={String(children).replace(/\n$/, '')} // Remove trailing newline
        />
      </div>
    );
  },
};

const BlogPost = ({ source, frontMatter }) => {
  const router = useRouter();
  const [copied, setCopied] = useState(false); // Move state initialization outside

  useEffect(() => {
    // Redirect to the home page if a 404 error occurs
    if (!frontMatter) {
      router.replace('/');
    }
  }, [frontMatter, router]);

  // ... rest of your code

  const handleBack = () => {
    router.back();
  };

  return (
    <ContainerBlog>
      <Spacer />
      <div className="p-3 justify-center text-center">
        <div className="m-8 text-left">
          <button
            onClick={handleBack}
            className="underline cursor-pointer"
            style={{ textDecoration: 'underline', cursor: 'pointer' }}
          >
            Back to home
          </button>
        </div>
        <div className="w-full items-center justify-center text-left">
          <div className="space-y-4">
            {/* Render MDX content using MDXProvider */}
            <MDXProvider components={{
              ...components,
              code: ({ className, children }) => {
                const language = className ? className.replace(/language-/, '') : '';

                const handleCopy = () => {
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1500);
                };

                return (
                  <div style={{ position: 'relative' }}>
                    <CopyToClipboard text={String(children)} onCopy={handleCopy}>
                      <button
                        style={{
                          position: 'absolute',
                          top: '10px',
                          right: '10px',
                          zIndex: '1',
                          padding: '5px',
                          backgroundColor: '#333',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '5px',
                          cursor: 'pointer',
                        }}
                      >
                        {copied ? 'Copied!' : 'Copy to Clipboard'}
                      </button>
                    </CopyToClipboard>
                    <SyntaxHighlighter
                      style={nightOwl}
                      language={language}
                      PreTag="div"
                      children={String(children).replace(/\n$/, '')} // Remove trailing newline
                    />
                  </div>
                );
              },
            }}>
              <MDXRemote {...source} />
            </MDXProvider>
          </div>
        </div>
      </div>
    </ContainerBlog>
  );
};

export async function getStaticPaths() {
  const BLOGDATA = [
    {
      id: '1',
      title: 'Test',
    },
    {
      id: '2',
      title: 'Test 2',
    },
    {
      id: '3',
      title: 'Test 3',
    },
    {
      id: '4',
      title: 'Test 4',
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