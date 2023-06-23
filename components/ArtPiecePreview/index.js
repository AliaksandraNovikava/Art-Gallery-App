export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <img src={image} alt={title} width={300} />
      <p>
        {title}, {artist}
      </p>
    </>
  );
}
