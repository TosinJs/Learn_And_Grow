import { useQuery } from "react-query";
import ClockSVG from "../../../assets/schedule_white_24dp.svg";
import PlaylistSVG from "../../../assets/playlist_play_white_24dp.svg";
import { useState } from "react";
import { fetchChannelData } from "../../../utils.js";

const VideoCard = ({ snippet }) => {
    const {title, thumbnails, channelId } = snippet
    const { isLoading, isError, data, error } = useQuery(["channel", channelId], fetchChannelData)
    const [hoverStatus, setHoverStatus] = useState("hidden")
    if (isLoading || !data) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <p>{error}</p>
    }
    const { items } = data
    const { snippet: channelSnippet } = items[0]
    const { title: channelTitle, thumbnails: channelThumbnails } = channelSnippet
    return (
        <div onMouseOver={() => setHoverStatus("block")} onMouseOut={() => setHoverStatus("hidden")}>
            <div className="relative">
                <img className="w-full" src={thumbnails.medium.url} alt={title} />
                <div className={`bg-black absolute top-2 right-2 bg-opacity-70 p-1 ${hoverStatus}`}>
                    <img className="mb-2" src={ClockSVG} alt="watch later" />
                    <img src={PlaylistSVG} alt="add to playlist" />
                </div>
            </div>
            <div className="grid grid-cols-8 gap-2 mt-2 text-sm">
                <div className="overflow-hidden h-9 w-9 col-span-1 rounded-full">
                    <img src={channelThumbnails.default.url} alt={channelTitle} />
                </div>
                <div className="col-span-1"></div>
                <div className="col-span-6 -ml-4">
                    <h2 className="font-semibold">{title}</h2>  
                    <p className="text-gray-500">{channelTitle}</p>
                    <p className="text-gray-500">1000 Views</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;