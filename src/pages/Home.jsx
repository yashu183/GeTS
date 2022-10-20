import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Description from "../components/Description";
import Form from "../components/Form";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Description />
      <Form />
    </div>
  );
};

export default Home;
