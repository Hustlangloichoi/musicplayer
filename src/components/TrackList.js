import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

const TrackList = () => {
  const { trackList, currentTrackName, playTrack, isPlaying } =
    useMusicPlayer();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {trackList.map((track, index) => {
        const isCurrentTrack = isPlaying && currentTrackName === track.name;

        return (
          <Card
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 1,
              backgroundColor: isCurrentTrack ? "#1976d2" : "#ffffff",
              color: isCurrentTrack ? "#ffffff" : "#000",
            }}
          >
            <CardActionArea
              onClick={() => playTrack(index)}
              sx={{ flexGrow: 1 }}
            >
              <CardContent>
                <Typography variant="h6">{track.name}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </Box>
  );
};

export default TrackList;
