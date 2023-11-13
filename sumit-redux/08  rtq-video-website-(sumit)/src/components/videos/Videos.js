import { useGetVideosQuery } from "../../features/api/apiSlice";
import Error from "../ui/Error";
import VideoLoader from "../ui/loaders/VideoLoader";
import Video from "./Video";

export default function Videos() {
    const { data: videos, isLoading, isError } = useGetVideosQuery();
    // const { data: videos, isLoading, isError, isSuccess, isFetching, refetch } = useGetVideosQuery( undefined, {
    //     refetchOnFocus: false, //onno page teke, abar ai page e asle
    //     refetchOnReconnect: true, // offline teke online hle
    //     refetchOnMountOrArgChange: true, //arg change korle
    //     refetchOnMountOrArgChange: 5, //arg time diye dewya
    //     pollingInterval: 5000, // 5s por por load nibe
    //     skip: true // ami chai automatic call na hok, tai kunu stata diye , true false kore, ai funtion ta call korte pari, auto call na chaile
    // });

    // decide what to render
    let content = null;

    if (isLoading) {
        content = (
            <>
                <VideoLoader />
                <VideoLoader />
                <VideoLoader />
                <VideoLoader />
            </>
        );
    }

    if (!isLoading && isError) {
        content = <Error message="There was an error" />;
    }

    if (!isLoading && !isError && videos?.length === 0) {
        content = <Error message="No videos found!" />;
    }

    if (!isLoading && !isError && videos?.length > 0) {
        content = videos.map((video) => <Video key={video.id} video={video} />);
    }

    return content;
}
