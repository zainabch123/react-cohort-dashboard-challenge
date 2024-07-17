export default function UserIcon({userInfo}) {
    return (
      <>
      {userInfo && (
        <div
          className="user-img"
          style={{ backgroundColor: `${userInfo.favouriteColour}` }}
        >
          <p>{`${userInfo.firstName[0]}${userInfo.lastName[0]}`}</p>
        </div>
)}
      </>
    );
}