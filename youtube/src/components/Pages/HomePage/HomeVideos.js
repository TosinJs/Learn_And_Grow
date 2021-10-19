import { useQuery } from "react-query";
import VideoCard from "./VideoCard";

const key = "AIzaSyDK3l82Fcr3vK68DsyXvg1TrsSBtTH5nnA"
const fetchVideos = async () => {
    try {
        const response = await fetch("https://youtube.googleapis.com/youtube/v3/videos?" + new URLSearchParams({
            key,
            part: "snippet",
            chart: "mostPopular",
            maxResults: 50
        }))
        if (!response) {
            throw new Error("Something Went Wrong")
        }
        return response.json()
    } catch (error) {
        console.log(error)
    }
}
const HomeVideos = () => {
    const { isLoading, isError, data, error } = useQuery("videos", fetchVideos)
    if (isLoading || !data) {
        return <p>Loading....</p>
    } 
    if (isError) {
        return <p>{error}</p>
    }
    const {items} = data
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 justify-items-right bg-gray-100 px-8 py-16">
        {
        items.map((item) => {
            const { id, snippet} = item
            return (
                <VideoCard key = {id} snippet = {snippet}/>
            )
        })
        }
        </div>
    )
}

export default HomeVideos;