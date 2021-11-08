import { useQuery, useInfiniteQuery } from "react-query";
import VideoCard from "./VideoCard";
import { fetchVideos } from "../../../utils";
import { useEffect, useMemo, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const HomeVideos = () => {
    const [fetchState, setFetchState] = useState({
        isLoading: true,
        isError: true,
        data: {},
        items: [],
        error: "",
        nextPageToken: "",
        hasMore: true
    })
    const [start, setStart] = useState(false)
    const { isLoading, isError, data, items, error, nextPageToken, hasMore } = fetchState
    useEffect( async () => {
        try {
            const data = await fetchVideos()
            setFetchState({
                ...fetchState,
                isLoading: false,
                isError: false,
                data: data,
                items: data.items,
                nextPageToken: data.nextPageToken
            })
            console.log(data)
        } catch (error) {
            setFetchState({
                ...fetchState,
                isLoading: false,
                isError: true,
                error: error
            })
            console.log(error)
        }
    }, [])
    const fetchMoreData = async (nextPageToken) => {
        console.log("more data fetched")
        console.log(nextPageToken)
        try {
            const data = await fetchVideos(nextPageToken)
            setFetchState({
                ...fetchState,
                isLoading: false,
                data,
                ...(data.nextPageToken && {nextPageToken: data.nextPageToken}),
                ...(!data.nextPageToken && {hasMore: false}),
                items: [...fetchState.items, ...data.items]
            })
            console.log(fetchState.data)
        } catch (error) {
            setFetchState({
                ...fetchState,
                isLoading: false,
                isError: true,
                error: error
            })
            console.log(error)
        }
    }
    if (isLoading || !data) {
        return <p>Loading....</p>
    } 
    if (isError) {
        return <p>{error}</p>
    }
    console.log(fetchState.data)
    console.log(fetchState.nextPageToken)
    return (
        <InfiniteScroll
        dataLength={items.length}
        hasMore={hasMore}
        next={() => fetchMoreData(nextPageToken)}
        loader={<div>Loading...</div>}
        >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 justify-items-right bg-gray-100 px-8 py-6 z-0">
            {
            items.map((item) => {
                const { id, snippet} = item
                return (
                    <VideoCard key = {id} snippet = {snippet}/>
                )
            })
            }
            </div>
        </InfiniteScroll>
    )
}

export default HomeVideos;