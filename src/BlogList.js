import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/users/${blog.id}`}>
            <h2>{blog.name}</h2>
            <p>Email {blog.email}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
