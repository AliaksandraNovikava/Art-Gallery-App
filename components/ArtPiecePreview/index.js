import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <Image src={image} alt={title} height={300} width={300} />
      <p>
        {title}, {artist}
      </p>
    </>
  );
}
