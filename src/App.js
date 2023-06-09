import React from "react";
import { Outlet } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { YoutubApiProvider } from "./context/YoutubeApiContext";

export default function App() {
  // Create a client
  const queryClient = new QueryClient()
 
  return (
    <div>
    <SearchBar />
    {/* // Provide the client to your App */}
    <YoutubApiProvider>
    <QueryClientProvider client={queryClient}>
    <Outlet />
    </QueryClientProvider>
    </YoutubApiProvider>
  </div>
  );
}
