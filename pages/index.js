import useSWR from "swr";
import ArtPieces from "../components/ArtPieces/index.js";

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

export default function HomePage() {
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
    <div>
      <h1>Art Gallery App</h1>
      <ArtPieces pieces={data} />
    </div>
  );
}
