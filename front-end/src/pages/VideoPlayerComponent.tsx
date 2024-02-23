import React from "react";
import YouTube from "react-youtube";
import Box from "../components/Box";

interface MusicPlayerProps {
  url?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleOnStateChange?: (event: any) => void;
  width?: number;
  height?: number;
  autoPlay?: number;
}

const MusicPlayer = ({
  url,
  handleOnStateChange,
  width,
  height,
  autoPlay = 0,
}: MusicPlayerProps) => {
  const opts = {
    height,
    width: "100%",
    playerVars: {
      autoplay: autoPlay,
    },
  };

  return (
    <Box width={width}>
      <YouTube videoId={url} onStateChange={handleOnStateChange} opts={opts} />
    </Box>
  );
};

export default MusicPlayer;
