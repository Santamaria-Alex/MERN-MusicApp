import axios from "axios";
import React from "react";

const Home = () => {
  return (
    <div className="home-container">
      <div className="artist-list-container">
        <div className="header">Top Artist</div>
        <div className="body">Artist 1</div>
        <div className="body">Artist 2</div>
        <div className="body">Artist 3</div>
      </div>

      <div className="album-list-container">
        <div className="header">Top Album</div>
        <div className="body">Album 1</div>
        <div className="body">Album 2</div>
        <div className="body">Album 3</div>
      </div>

      <div className="song-list-container">
        <div className="header">Top Song</div>
        <div className="body">Song 1</div>
        <div className="body">Song 2</div>
        <div className="body">Song 3</div>
      </div>
    </div>
  );
};

export default Home;
