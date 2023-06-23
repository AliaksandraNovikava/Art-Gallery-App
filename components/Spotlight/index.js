import Image from "next/image";

export default function Spotlight({ pieces }) {
  const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];
  console.log(randomPiece);

  return (
    <>
      <Image src={randomPiece.imageSource} alt={randomPiece.name} width={300} />
      <p role="title">
        {randomPiece.name}, {randomPiece.artist}
      </p>
    </>
  );
}
