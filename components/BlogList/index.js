import Link from 'next/link';
import { BLOGDATA } from '../../constants/blogTopics';

const BlogList = () => {
  return (
    <div>
      <ul className="space-y-4">
        {BLOGDATA.map((topic) => (
          <li key={topic.id}>
            <Link className="underline dark:text-neutral-200" href={`/blog/${topic.id}`}>
              {topic.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;