import { useContext, useState } from "react";
import { appContext } from "../App";
import { useParams } from "react-router-dom";
import UserIcon from "./UserIcon";

export default function ViewProfile() {
  const { users } =
    useContext(appContext);
  const { id } = useParams();
  const [updatedInfo, setUpdatedInfo] = useState(null);

  const user = users.find((u) => u.id === Number(id));

  console.log("user", user)

  function handleInput(event) {
    const {name, value} = event.target;
}

console.log("updated  user info", updatedInfo)

  return (
    <>
      {user && (
        <section className="view-profile">
          <div className="profile-header">
            <div className="profile-title">
              <h1>Profile</h1>
            </div>
          </div>
          <div className="profile-card">
            <div className="user-name">
              <UserIcon userInfo={user} />
              <h2>
                {user.firstName} {user.lastName}
              </h2>
            </div>
            <form className="profile-form">
              <div className="account-info">
                <h2>Account Info</h2>
                <label>
                  First Name:
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={user.firstName}
                    onChange={handleInput}
                  ></input>
                </label>
                <label>
                  Last Name:
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={user.lastName}
                    onChange={handleInput}
                  ></input>
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleInput}
                  ></input>
                </label>
              </div>
              <div className="address-info">
                <h2>Address</h2>
                <label>
                  Street:
                  <input
                    type="text"
                    id="street"
                    name="street"
                    value={user.street}
                    onChange={handleInput}
                  ></input>
                </label>
                <label>
                  City:
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={user.city}
                    onChange={handleInput}
                  ></input>
                </label>
                <label>
                  Zip Code:
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={90566 - 7771}
                    onChange={handleInput}
                  ></input>
                </label>
                <div className="profile-submit">
                  <button className="profile-button" type="submit">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
}
