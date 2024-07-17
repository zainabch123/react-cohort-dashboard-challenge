import { useState, useEffect } from "react";
import { Link, useHref } from "react-router-dom";
import AddComment from "./AddComment";
import CommentList from "./CommentList";
import UserIcon from "./UserIcon";
import { useContext } from "react";
import { appContext } from "../App";

export default function PostItem({ post }) {
  const { allPosts, setAllPosts, loggedInUser, users } = useContext(appContext);
  const [comments, setComments] = useState([]);
  let userInfo = { firstName: "", lastName: "" };

  useEffect(() => {
    fetch(
      `https://boolean-uk-api-server.fly.dev/zainabch123/post/${post.id}/comment`
    )
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [post.id]);

  console.log("comments", comments);
  const sortedComments = comments.sort((a, b) => (a.id > b.id ? -1 : 1));

  if (users.length !== 0) {
    userInfo = users.find((user) => user.id === post.contactId);
  }

  console.log("user info", userInfo);

  return (
    <>
      {userInfo && (
        <li className="post">
          <div className="post-user">
            <UserIcon userInfo={userInfo} />
            <div className="user-info">
              <h2>
                <Link to={`/post/${post.id}`}>
                  {userInfo.firstName} {userInfo.lastName}
                </Link>
              </h2>
              <h3>
                {" "}
                <Link to={`/post/${post.id}`}>{post.title}</Link>
              </h3>
            </div>
          </div>
          <div className="post-content">{post.content}</div>
          <CommentList sortedComments={sortedComments} />
          <AddComment
            post={post}
            comments={comments}
            setComments={setComments}
          />
        </li>
      )}
    </>
  );
}
