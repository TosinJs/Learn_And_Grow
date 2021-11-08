const key = "AIzaSyDK3l82Fcr3vK68DsyXvg1TrsSBtTH5nnA"

exports.fetchChannelData = async ({ queryKey }) => {
    const [, channelId] = queryKey
    try {
        const response = await fetch("https://youtube.googleapis.com/youtube/v3/channels?" + new URLSearchParams({
            key,
            id: channelId,
            part: "snippet"
        }))
        if (!response) {
            throw new Error("Something Went Wrong")
        }
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

exports.fetchVideos = async (nextPageToken) => {
    console.log(nextPageToken)
    try {
        const response = await fetch("https://youtube.googleapis.com/youtube/v3/videos?" + new URLSearchParams({
            key,
            part: "snippet",
            chart: "mostPopular",
            maxResults: 24,
            ...(nextPageToken && {pageToken: nextPageToken})
        }))
        if (!response) {
            throw new Error("Something Went Wrong")
        }
        return response.json()
    } catch (error) {
        console.log(error)
    }
}
