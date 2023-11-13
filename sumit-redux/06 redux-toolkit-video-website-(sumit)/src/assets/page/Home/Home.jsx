import React from "react";
import VideoGrid from "../../componets/Grid/VideoGrid";
import Tags from "../../componets/Tags/Tags";
import Pagination from "../../componets/ui/Pagination";

const Home = () => {
  return (
    <div>
      <Tags />
      <VideoGrid />
      <Pagination />
    </div>
  );
};

export default Home;
