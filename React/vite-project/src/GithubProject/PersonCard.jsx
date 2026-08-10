import { useState } from "react";

function PersonCard(props) {
  // Get the person object from props
  const { person } = props;

  // State to store the number of followers
  const [followers, setFollowers] = useState(0);

  // Destructure the properties from the person object
  const { login, repos_url, followers_url, avatar_url, html_url } = person;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "20px",
        marginBottom: "20px",
        border: "2px solid rgba(0,0,0,1)",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      {/* User avatar */}
      <img src={avatar_url} style={{ height: "100px" }} alt={login} />

      {/* User information */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          {/* GitHub username */}
          <b style={{ fontSize: "20px" }}>{login}</b>

          {/* Followers count */}
          <div>Followers: {followers}</div>

          {/* Buttons */}
          <button>Github profile</button>
          <button>View Repositories</button>
        </div>
      </div>
    </div>
  );
}

export default PersonCard;
