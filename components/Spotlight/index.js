import Image from "next/image";
import FavoriteButton from "../FavoriteButton/index.js";

export default function Spotlight({ pieces, onToggleFavorite, isFavorite }) {
  const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];
  console.log(randomPiece);

  return (
    <>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      <Image
        src={randomPiece.imageSource}
        alt={randomPiece.name}
        height={300}
        width={300}
      />
      <p role="title">
        {randomPiece.name}, {randomPiece.artist}
      </p>
    </>
  );
}
