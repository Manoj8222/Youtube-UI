import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => (
  <Card
    className="card-video"
    sx={{
      backgroundColor: "#000",
      width: { md: "315px", xs: "100%" },
    }}
  >
    {/* <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          alt={snippet?.title}
          //   className="w-[358px] h-[180px]"
          sx={{ width: 358, height: 180 }}
          image={snippet?.thumbnails?.high?.url}
        />
      </Link> */}
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{
          width: { xs: "100%", sm: "315px" },
          height: { md: 176.5, xs: 200 },
          borderRadius: 3,
          objectFit: "cover",
        }}
      />
    </Link>
    <CardContent
      sx={{
        backgroundColor: "#000",
        height: "106px",
        paddingLeft: "0",
        pt: "9px",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography variant="subtitle1" color="#fff">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>

      <Link
        to={
          snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
        }
      >
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircle
            sx={{ fontSize: 15, color: "gray", ml: "5px", mb: "3px" }}
          />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard;
