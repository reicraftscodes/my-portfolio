import { useRouter } from 'next/router';
import Container from "../../../components/Container";
import Spacer from "../../../components/Spacer";
import { BLOGDATA } from "../../../constants/blogTopics";


const BlogPost = () => {
    const router = useRouter();
    const { id } = router.query;

    // Find the blog post in BLOGDATA based on the id
    const blogPost = BLOGDATA.find((post) => post.id === id);

    if (!blogPost) {
        return (
            <Container>
                <p>Blog post not found</p>
            </Container>
        );
    }

    return (
        <Container>
            <div>
                <Spacer />
                <Spacer />
                <section className="w-full flex items-center justify-center">
                    <div>
                        <h1 className="font-bold text-3xl text-center">{blogPost.title}</h1>
                        <p className="text-center">{blogPost.content}</p>
                    </div>
                </section>
            </div>
        </Container>
    );
};

export default BlogPost;