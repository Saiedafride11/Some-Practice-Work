import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Description from "../../componets/Description/Description";
import Player from "../../componets/Description/Player";
import RelatedVideos from "../../componets/RelatedVideos/RelatedVideos";
import Error from "../../componets/ui/Error";
import Loading from "../../componets/ui/Loading";
import { fetchVideo } from "../../redux/features/video/videoSlice";

const Video = () => {
  const { videoId } = useParams();
  const dispatch = useDispatch();
  const { video, isLoading, isError, error } = useSelector(
    (state) => state.video
  );

  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [dispatch, videoId]);

  let content;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <Error error={error} />;
  }
  if (!isLoading && !isError && !video?.id) {
    content = <div className="col-span-12">No video found!</div>;
  }
  if (!isLoading && !isError && video?.id) {
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
          <Player video={video} />
          <Description video={video} />
        </div>

        <RelatedVideos currentVideoId={videoId} tags={video.tags} />
      </div>
    );
  }

  return (
    <section className="pt-6 pb-20">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        {content}
      </div>
    </section>
  );
};

export default Video;
