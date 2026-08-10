import { useState } from "react";

function TopNav() {
  // State to store the user's search input
  const [search, setSearch] = useState("");

  return (
    <div
      className=""
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* GitHub logo */}
      <img
        style={{ width: "40px" }}
        src="https://toppng.com/uploads/preview/github-logo-png-photo-11659780047rlwsegmg72.png"
        alt="GitHub Logo"
      />

      {/* Search input */}
      <input
        style={{
          width: "50vw",
          marginLeft: "1em",
        }}
        search={search}
        setSearch={setSearch}
      />

      {/* Search button */}
      <button>Search</button>
    </div>
  );
}

export default TopNav;
