import React from "react";
import TrackList from "./components/TrackList";
import Controllers from "./components/Controller";
const App = () => {
  return (
    <div>
      <h1>Mini Spotify</h1>
      <TrackList />
      <Controllers />
    </div>
  );
};

export default App;
