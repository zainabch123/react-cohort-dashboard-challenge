import { useContext, useState } from "react";
import { appContext } from "../App";
import UserIcon from "./UserIcon";

export default function CreatePost() {
  const { allPosts, setAllPosts, loggedInUser, users } = useContext(appContext);
  const [newPost, setNewPost] = useState({
    id: "",
    contactId: "",
    title: "Default title",
    content: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    newPost.id = allPosts.length + 1;
    console.log("new post", newPost);

    fetch("https://boolean-uk-api-server.fly.dev/zainabch123/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((data) => setAllPosts([data, ...allPosts]));

    setNewPost({
      id: "",
      contactId: "",
      title: "Default title",
      content: "",
    });
  }

  function handleInput(event) {
    const {name, value} = event.target
    setNewPost ({
      ...newPost,
      contactId: loggedInUser.id,
      [name] : value,
    });
  }

    return (
      <>
      {loggedInUser && (
        <div className="create-post">
          <UserIcon userInfo={loggedInUser} />
          <form className="post-form" onSubmit={handleSubmit}>
            <input
              type="text"
              id="post-input"
              name="content"
              placeholder="What's on your mind?"
              onChange={handleInput}
              value={newPost.content}
            ></input>
            <button className="post-submit" type="submit" onClick={function () {
              handleSubmit(event)
            }}>
              Post
            </button>
          </form>
        </div>
        )}
      </>
    );
}
 
