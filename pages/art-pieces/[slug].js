import ArtPieceDetails from "../../components/ArtPieceDetails/index.js";
import { useRouter } from "next/router";

export default function ArtPieceDetailsPage({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;

  const currentArtPieceDetail = pieces.find((piece) => piece.slug === slug);

  if (!currentArtPieceDetail) {
    return null;
  }

  const { imageSource, name, artist, year, genre } = currentArtPieceDetail;

  return (
    <div>
      <ArtPieceDetails
        image={imageSource}
        title={name}
        artist={artist}
        year={year}
        genre={genre}
      />
    </div>
  );
}
