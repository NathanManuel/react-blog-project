import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import axios from "axios";

const Create = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const history = useHistory();

  const { data, error, isPending } = useFetch(
    "https://jsonplaceholder.typicode.com/users/" + id
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { name, username, email, city, phone, company };
    axios
      .put("https://jsonplaceholder.typicode.com/users/" + id, {
        body: JSON.stringify(blog),
      })
      .then(() => {
        history.push("/");
      });
  };

  return (
    <div className="create">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <form onSubmit={handleSubmit}>
          <h2>Edit - {data.name}</h2>
          <label>Name:</label>
          <input
            type="text"
            required
            value={name}
            placeholder={data.name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Username:</label>
          <input
            type="text"
            required
            value={username}
            placeholder={data.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email:</label>
          <input
            type="email"
            required
            value={email}
            placeholder={data.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>City:</label>
          <input
            type="text"
            required
            value={city}
            placeholder={data.address.city}
            onChange={(e) => setCity(e.target.value)}
          />
          <label>Phone:</label>
          <input
            type="text"
            required
            value={phone}
            placeholder={data.phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label>Company Name:</label>
          <input
            type="text"
            required
            value={company}
            placeholder={data.company.name}
            onChange={(e) => setCompany(e.target.value)}
          />
          <button>Update Blog</button>
        </form>
      )}
    </div>
  );
};

export default Create;
