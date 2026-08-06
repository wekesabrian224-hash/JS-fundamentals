import { useState, useEffect } from "react";
import axios from "axios";

function GithubProject() {
  // State to store the list of GitHub users
  const [people, setPeople] = useState([]);

  // Fetch API using Axios
  const getUserData = async () => {
    try {
      let response = await axios({
        method: "GET",
        url: "https://api.github.com/users",
      });

      // Save the fetched data into state
      setPeople(response.data);
    } catch (e) {
      // Handle any errors
      console.log("Error is ", e);
    }
  };

  // Display the current state in the console
  // Initially: []
  // After fetching: [{...}, {...}, ...]
  console.log(people);

  // Runs only once when the component is mounted
  useEffect(() => {
    getUserData();
  }, []);

  // Lifecycle: GithubProject
  return (
    <div>
      <h1>Github project</h1>
    </div>
  );
}

export default GithubProject;
