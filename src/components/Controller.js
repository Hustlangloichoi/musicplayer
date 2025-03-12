import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";
import { Box, Button, Paper, Typography } from "@mui/material";
import { PlayArrow, Pause, SkipNext, SkipPrevious } from "@mui/icons-material";

const Controller = () => {
  const {
    currentTrackName,
    isPlaying,
    togglePlay,
    playNextTrack,
    playPreviousTrack,
    currentTrackIndex,
  } = useMusicPlayer();

  const isDisabled = currentTrackIndex === null; // Disable buttons if no song is chosen

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#1565c0", // Blue theme
        color: "#fff",
        borderRadius: "12px",
      }}
    >
      <Typography variant="h6" gutterBottom>
        {currentTrackName
          ? `Now Playing: ${currentTrackName}`
          : "No track playing"}
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={playPreviousTrack}
          startIcon={<SkipPrevious />}
          disabled={isDisabled} // Disable if no song is selected
        >
          Previous
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={togglePlay}
          startIcon={isPlaying ? <Pause /> : <PlayArrow />}
          disabled={isDisabled} // Disable if no song is selected
        >
          {isPlaying ? "Pause" : "Play"}
        </Button>

        <Button
          variant="contained"
          color="secondary"
          onClick={playNextTrack}
          startIcon={<SkipNext />}
          disabled={isDisabled} // Disable if no song is selected
        >
          Next
        </Button>
      </Box>
    </Paper>
  );
};

export default Controller;
