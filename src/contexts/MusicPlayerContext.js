import React, { createContext, useState } from "react";

export const MusicPlayerContext = createContext();

export const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: [
      { name: "Cold Gin - Jazz", file: "./tracks/track1.mp3" },
      { name: "Heaven's On Fire - Jazz", file: "./tracks/track2.mp3" },
      { name: "Beth - Jazz", file: "./tracks/track3.mp3" },
    ],
    currentTrackIndex: null,
    isPlaying: false,
  });

  const setCurrentTrack = (index) => {
    setState((prevState) => ({
      ...prevState,
      currentTrackIndex: index,
      audioPlayer: new Audio(prevState.tracks[index].file),
    }));
  };

  const togglePlayPause = () => {
    setState((prevState) => {
      const isPlaying = !prevState.isPlaying;
      if (isPlaying) {
        prevState.audioPlayer.play();
      } else {
        prevState.audioPlayer.pause();
      }
      return { ...prevState, isPlaying };
    });
  };

  return (
    <MusicPlayerContext.Provider
      value={{ ...state, setCurrentTrack, togglePlayPause }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
};
