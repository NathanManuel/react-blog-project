import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import axios from "axios";

const BlogDetails = () => {
  const { id } = useParams();
  const { data, error, isPending } = useFetch(
    "https://jsonplaceholder.typicode.com/users/" + id
  );
  const history = useHistory();

  const handleClick = () => {
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + data.id, {})
      .then(() => {
        history.push("/");
      });
  };

  const handleEditClick = (id) => {
    history.push("/edit/" + id);
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <article>
          <h2>{data.name}</h2>
          <p>Username: {data.username}</p>
          <p>Email: {data.email}</p>
          <div>Address: {data.address.city}</div>
          <div>Phone: {data.phone}</div>
          <div>Company Name: {data.company.name}</div>
          <button
            onClick={() => {
              handleEditClick(data.id);
            }}
          >
            edit
          </button>
          <br />
          <br />
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
