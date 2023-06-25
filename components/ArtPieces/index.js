import ArtPiecePreview from "../ArtPiecePreview";
import Link from "next/link";
export default function ArtPieces({ pieces }) {
  return (
    <>
      <ul>
        {pieces.map(({ slug, imageSource, name, artist }) => (
          <li key={slug}>
            <Link href={`/art-pieces/${slug}`}>
              <ArtPiecePreview
                image={imageSource}
                title={name}
                artist={artist}
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
