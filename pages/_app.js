import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "../components/Layout/index.js";
import { useState } from "react";
import ArtPieceDetails from "@/components/ArtPieceDetails";

const fetcher = async (URL) => {
  const res = await fetch(URL);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState();

  function handleToggleFavorite({ id }) {
    setIsFavorite(!isFavorite);
  }
  // const [...artPiecesInfo, {isFavorite: false}] = artPiecesInfo
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  if (error) {
    return <div>failed to load</div>;
  }
  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        pieces={data}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={handleToggleFavorite}
      />
      <Layout />
    </>
  );
}
