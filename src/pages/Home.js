import React, { useContext } from "react";
import "../App.css";
import ImageUpload from "../components/ImageUpload";
import UserContext from "../context/UserContext";

const Home = () => {
  return (
    <div className="Home">
      <ImageUpload />
    </div>
  );
};

export default Home;
