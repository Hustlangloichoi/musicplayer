import React, { useState, createContext } from "react";
import Track1 from "../assets/track1.mp3";
import Track2 from "../assets/track2.mp3";
import Track3 from "../assets/track3.mp3";

console.log("Track1 file path:", Track1);
const MusicPlayerContext = createContext();

const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "Cold Gin - Jazz",
      file: Track1,
    },
    {
      name: "heaven's On Fire - Jazz",
      file: Track2,
    },
    {
      name: "Beth - Jazz",
      file: Track3,
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
