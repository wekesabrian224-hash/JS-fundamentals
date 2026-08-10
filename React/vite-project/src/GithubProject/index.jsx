import { useState, useEffect } from "react";
import axios from "axios";

import TopNav from "./TopNav";
import InfoSection from "./InfoSection";
import PersonCard from "./PersonCard";

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

      // Save the fetched users into state
      setPeople(response.data);
    } catch (e) {
      // Display any errors in the console
      console.log("Error is ", e);
    }
  };

  // Display the current state in the console
  // Initially: []
  // After fetching: [{...}, {...}, ...]
  console.log(people);

  // Runs once when the component mounts
  useEffect(() => {
    getUserData();
  }, []);

  // Lifecycle: GithubProject
  return (
    <div>
      {/* Top navigation bar */}
      <TopNav />

      {/* Information section */}
      <InfoSection people={people} />

      {/* Display a card for every GitHub user */}
      {people.map((person) => (
        <PersonCard key={person.id} person={person} />
      ))}
    </div>
  );
}

export default GithubProject;
