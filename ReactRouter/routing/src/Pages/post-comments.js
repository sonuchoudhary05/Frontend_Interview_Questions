import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PostComments = () => {
  const { postId } = useParams();
  const [comments, setComments] = React.useState([]);
  const [post, setPost] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate();
  console.log("PostId", postId);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [postResponse, commentsResponse] = await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`),
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`),
      ]);
      const post = await postResponse.json();
      const comments = await commentsResponse.json();
      setPost(post);
      setComments(comments);
    } catch (error) {
      console.log("Error", error);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [postId]);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <h4>Comments</h4>
          {comments.map((comment) => (
            <div key={comment.id}>
              <h5>{comment.name}</h5>
              <p>{comment.body}</p>
            </div>
          ))}
        </div>
      )}
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default PostComments;
