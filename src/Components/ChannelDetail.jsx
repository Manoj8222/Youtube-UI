import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { VideoCard } from "./VideoCard";

import { fetchFromAPI } from "../utils/fetchFromApi";
import Feed from "./Feed";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-95px" />
      </Box>
      <div className="">
        <Box
          display="flex"
          p={2}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box sx={{ mr: { sm: "115px" } }} />
          <Videos videos={videos} />
        </Box>
      </div>
    </Box>
  );
};

export default ChannelDetail;
