import { useQuery } from "react-query";
import axios from "axios";

interface PostInterface {
  userId: number;
  id: number;
  title: string;
  body: "string";
}

const Posts = () => {
  const getPosts = async () => {
    const response = await axios.get<PostInterface[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  };

  const { data, error, isLoading } = useQuery("posts", getPosts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occurred: {(error as Error).message}</div>;
  }

  return (
    <div>
      <div className="all-posts">
        {data?.map((post) => (
          <div className="post" key={post.id}>
            <div className="title"> {post.title} </div>
            <div className="post-body"> {post.body} </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
