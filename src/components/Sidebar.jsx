import ProfileIcon from "../assets/profile-icon.svg";
import HomeIcon from "../assets/home-icon.svg";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <aside>
      <div className="home-icon" onClick={function () {
        navigate("/")
      }}>
        <img src={HomeIcon} alt="home-icon" />
        <p>Home</p>
      </div>
      <div className="profile-icon">
        <img src={ProfileIcon} alt="profile-icon" />
        <p>Profile</p>
      </div>
    </aside>
  );
}
