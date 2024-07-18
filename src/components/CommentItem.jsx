import { useState, useEffect } from "react";
import UserIcon from "./UserIcon";
import { useContext } from "react";
import { appContext } from "../App";


export default function CommentItem({ comment }) {
  const { allPosts, setAllPosts, loggedInUser, users } = useContext(appContext);
  let commentInfo = { firstName: "", lastName: "" };

  if (users.length !== 0) {
    commentInfo = users.find((user) => user.id === comment.contactId);
  }

  return (
    <>
      {commentInfo && (
        <li className="comment-item">
          <div className="comment-img">
            <UserIcon userInfo={commentInfo}/>
          </div>
          <div className="comment-content">
            <h4>{`${commentInfo.firstName} ${commentInfo.lastName}`}</h4>
            <p>{`${comment.content}`}</p>
          </div>
        </li>
      )}
    </>
  );
}
