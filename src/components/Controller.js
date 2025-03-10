import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";

const Controllers = () => {
  const { tracks, currentTrackIndex, togglePlayPause, isPlaying } =
    useMusicPlayer();

  if (currentTrackIndex === null) return <p>Select a song to play</p>;

  return (
    <div>
      <h2>Now Playing: {tracks[currentTrackIndex].name}</h2>
      <button onClick={togglePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
};

export default Controllers;
