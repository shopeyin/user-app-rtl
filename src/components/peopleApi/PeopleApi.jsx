import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function PeopleApi() {
  const [people, setPeople] = useState([]);
  const fetchPeople = async () => {
    let peopleData = await axios.get(
      "https://jsonplaceholder.typicode.com/users/"
    );

    setPeople(peopleData.data);
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <div>
      Fetch PeopleApi
      {people.map((person) => {
        return (
          <p key={person.id} data-testid={`person-${person.id}`}>
            <Link to={`${person.id}`}>
              {person.name} -- {person.id}{" "}
            </Link>
          </p>
        );
      })}
    </div>
  );
}

export default PeopleApi;
