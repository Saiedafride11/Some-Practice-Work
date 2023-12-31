import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./features/filter/filterSlice";
import relatedVideosReducer from "./features/relatedVideos/relatedVideosSlice";
import tagsReducer from "./features/tags/tagsSlice";
import videoReducer from "./features/video/videoSlice";
import videosReducer from "./features/videos/videosSlice";

export const store = configureStore({
  reducer: {
    video: videoReducer,
    videos: videosReducer,
    tags: tagsReducer,
    relatedVideos: relatedVideosReducer,
    filter: filterReducer,
  },
});
