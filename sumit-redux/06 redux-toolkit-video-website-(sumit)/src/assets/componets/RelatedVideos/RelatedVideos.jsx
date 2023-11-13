import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos } from "../../redux/features/relatedVideos/relatedVideosSlice";
import Loading from "../ui/Loading";
import RelatedVideo from "./RelatedVideo";

const RelatedVideos = ({ currentVideoId, tags }) => {
  const dispatch = useDispatch();
  const { relatedVideos, isLoading, isError, error } = useSelector(
    (state) => state.relatedVideos
  );

  useEffect(() => {
    dispatch(fetchRelatedVideos({ tags, id: currentVideoId }));
  }, [dispatch, tags, currentVideoId]);

  let content = null;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError) {
    content = <Error error={error} />;
  }
  if (!isLoading && !isError && relatedVideos?.length === 0) {
    content = <div className="col-span-12">No related videos found!</div>;
  }
  if (!isLoading && !isError && relatedVideos?.length > 0) {
    content = relatedVideos.map((video) => (
      <RelatedVideo key={video.id} video={video} />
    ));
  }

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
};

export default RelatedVideos;
