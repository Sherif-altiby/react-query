import { useQuery } from "react-query";
import axios from "axios";

interface UsersInterface {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const Users = () => {
  const getUsers = async () => {
    const res = await axios.get<UsersInterface[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    return res.data;
  };

  const { data, error, isLoading } = useQuery("users", getUsers);

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
            <div className="title"> {post.name} </div>
            <div className="post-body"> {post.email} </div>
            <div className="post-body"> {post.phone} </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
