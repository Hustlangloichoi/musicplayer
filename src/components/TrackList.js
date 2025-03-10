import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";

const TrackList = () => {
  const { tracks, currentTrackIndex, setCurrentTrack } = useMusicPlayer();

  return (
    <div>
      <h2>Track List</h2>
      <ul>
        {tracks.map((track, index) => (
          <li
            key={index}
            onClick={() => setCurrentTrack(index)}
            style={{
              cursor: "pointer",
              color: currentTrackIndex === index ? "red" : "black",
            }}
          >
            {track.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackList;
