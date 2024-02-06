import { useRouter } from 'next/router';
import Container from "../../../components/Container";
import { BLOGDATA } from "../../../constants/blogTopics";


const BlogPost = () => {
    const router = useRouter();
    const { id } = router.query;

    // Find the blog post in BLOGDATA based on the id
    const blogPost = BLOGDATA.find((post) => post.id === id);

    // Check if the blog post is not found
    if (!blogPost) {
        return (
            <Container>
                <Spacer />
                <section>
                    <h2 className="text-2xl font-bold tracking-widest">Blog Post Not Found</h2>
                    <p>The requested blog post could not be found.</p>
                </section>
                <Spacer />
            </Container>
        );
    }

    return (
        <div className="transition duration-300 ease-in p-3 flex justify-center h-full w-full">
            <div className="lg:w-[60%]">
                <main className='transition duration-300 ease-in p-3 flex justify-center w-full'>
                    <section className="w-full flex items-center justify-center ">
                        <div>
                            <button onClick={() => router.back()} className=" text-left text-blue-500 hover:underline cursor-pointer w-full flex">
                                Back to home
                            </button>
                            <h1 className="font-bold text-3xl text-center p-3">{blogPost.title}</h1>
                            <p className="text-center">{blogPost.content}</p>
                        </div>
                    </section>
                </main>
            </div>
        </div>

    );
};

export default BlogPost;