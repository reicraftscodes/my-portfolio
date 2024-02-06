// import React from "react";
// import Container from "../../components/Container";
// import Spacer from "../../components/Spacer";
// import { useRouter } from "next/router";

// const BlogPost = () => {
//   const router = useRouter();
//   const { id } = router.query;

//   // Mock data for demonstration
//   const blogData = [
//     { id: "1", title: "Title 1", content: "test data" },
//     { id: "2", title: "Title 2", content: "test data" },
//     { id: "3", title: "Title 3", content: "test data" },
//   ];

//   return (
//     <Container>
//       <Spacer />
//       <section>
//         <h2 className="text-2xl font-bold tracking-widest">/blog/{id}</h2>
//         <h3 className="text-xl font-semibold">{blogData.id}</h3>
//         <p>{blogData.content}</p>
//       </section>
//       <Spacer />
//     </Container>
//   );
// };

// export default BlogPost;