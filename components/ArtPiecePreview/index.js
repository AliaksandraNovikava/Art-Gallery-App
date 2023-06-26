import Image from "next/image";
import FavoriteButton from "../FavoriteButton/index.js";

export default function ArtPiecePreview({
  image,
  title,
  artist,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      <Image src={image} alt={title} height={300} width={300} />
      <p>
        {title}, {artist}
      </p>
    </>
  );
}
