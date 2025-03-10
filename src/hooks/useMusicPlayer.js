import { useContext } from "react";
import { MusicPlayerContext } from "../contexts/MusicPlayerContext";

const useMusicPlayer = () => {
  return useContext(MusicPlayerContext);
};

export default useMusicPlayer;
