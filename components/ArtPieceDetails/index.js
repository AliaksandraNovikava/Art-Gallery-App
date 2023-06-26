import Link from "next/link";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton/index.js";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <div>
      <button>
        <Link href="/art-pieces">Go back</Link>
      </button>
      <br></br>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      <Image src={image} alt={title} width={300} height={300} />
      <p>
        {artist}: {title}
      </p>
      <p>
        {year},{genre}
      </p>
    </div>
  );
}
