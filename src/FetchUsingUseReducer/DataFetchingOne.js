import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetchingOne = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((response) => {
        setLoading(false);
        setError("");
        setPost(response.data);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
        setPost({});
      });
  }, []);

  return (
    <div>
      {loading ? "Loading..." : post.title}
      {error ? error : null}
    </div>
  );
};

export default DataFetchingOne;
