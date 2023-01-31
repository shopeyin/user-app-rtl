import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function PeopleProfile() {
  let params = useParams();
  const [person, setPerson] = useState([]);

  const fetchPerson = async () => {
    let personData = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    );

    setPerson(personData.data);
  };
  useEffect(() => {
    fetchPerson();
  }, []);

  return <div data-testid="person">{person.name}</div>;
}

export default PeopleProfile;
