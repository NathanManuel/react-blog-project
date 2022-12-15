import { useState, useEffect } from "react";
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

  useEffect(() => {
    if (data) {
      setName(data.name);
      setUsername(data.username);
      setEmail(data.email);
      setCity(data.address.city);
      setPhone(data.phone);
      setCompany(data.company.name);
    }
  }, [data]);

  return (
    <div className="create">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <form onSubmit={handleSubmit}>
          <h2>Edit - {name}</h2>
          <label>Name:</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Username:</label>
          <input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email:</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>City:</label>
          <input
            type="text"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <label>Phone:</label>
          <input
            type="text"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label>Company Name:</label>
          <input
            type="text"
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <button>Update Blog</button>
        </form>
      )}
    </div>
  );
};

export default Create;
