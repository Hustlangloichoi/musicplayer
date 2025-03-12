import { useContext } from "react";
import { MusicPlayerContext } from "../contexts/MusicPlayerContext";

const useMusicPlayer = () => {
  const { state, setState } = useContext(MusicPlayerContext);

  // Play a specific track
  function playTrack(index) {
    if (index === state.currentTrackIndex) {
      console.log("clicked");
      togglePlay();
    } else {
      state.audioPlayer.pause();
      const newAudio = new Audio(state.tracks[index].file);
      newAudio.play();

      setState((prevState) => ({
        ...prevState,
        audioPlayer: newAudio,
        currentTrackIndex: index,
        isPlaying: true,
      }));
    }
    console.log(state.tracks[index].name);
  }

  // Toggle play or pause
  function togglePlay() {
    if (!state.audioPlayer) return;

    if (state.isPlaying) {
      state.audioPlayer.pause();
    } else {
      const playPromise = state.audioPlayer.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => console.warn("Playback error:", error));
      }
    }

    setState((prevState) => ({
      ...prevState,
      isPlaying: !prevState.isPlaying,
    }));
  }

  // Play the previous track
  function playPreviousTrack() {
    if (state.currentTrackIndex === -1) return;
    const newIndex =
      (state.currentTrackIndex - 1 + state.tracks.length) % state.tracks.length;
    playTrack(newIndex);
  }

  // Play the next track
  function playNextTrack() {
    if (state.currentTrackIndex === -1) return;
    const newIndex = (state.currentTrackIndex + 1) % state.tracks.length;
    playTrack(newIndex);
  }

  return {
    playTrack,
    togglePlay,
    currentTrackName:
      state.currentTrackIndex !== null &&
      state.tracks[state.currentTrackIndex].name,
    trackList: state.tracks,
    isPlaying: state.isPlaying,
    currentTrackIndex: state.currentTrackIndex,
    playPreviousTrack,
    playNextTrack,
  };
};

export default useMusicPlayer;
