import { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools";
import NavComponent from "../../generalComponents/NavComponent";
import HomePills from "./HomePills";
import HomePoster from "./HomePoster";
import HomeSidebar from "./HomeSidebar";
import HomeVideos from "./HomeVideos";

const queryClient = new QueryClient()

const HomePage = () => {
    return (
        <>
        <div className="overflow-x-hidden">
        <div className="fixed w-full top-p">
            <NavComponent />
            <div className="ml-20 border-t border-b border-gray-200">
              <HomePills />  
            </div>
            <div className="-mt-14">
               <HomeSidebar /> 
            </div> 
        </div>
        <div className="mt-28 ml-20 w-11/12 pr-4 pt-2">
             <HomePoster />   
            <QueryClientProvider client={ queryClient }>
                <HomeVideos /> 
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </div>
        </div>
        </>
    )
}

export default HomePage;