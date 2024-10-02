import { useQuery } from "react-query";
import axios from "axios";

interface CommentsInterface {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

const Comments = () => {
  const getComments = async () => {
    const response = await axios.get<CommentsInterface[]>(
      "https://jsonplaceholder.typicode.com/comments"
    );
    return response.data;
  };

  const { data, error, isLoading } = useQuery("comments", getComments);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occurred: {(error as Error).message}</div>;
  }

  return (
    <div>
      <div>
        <div className="all-posts">
          {data?.map((post) => (
            <div className="post" key={post.id}>
              <div className="title"> {post.name} </div>
              <div className="post-body"> {post.body} </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;
