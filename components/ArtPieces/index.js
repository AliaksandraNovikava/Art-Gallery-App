import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <>
      <ul>
        {pieces.map(({ slug, imageSource, name, artist }) => (
          <li key={slug}>
            <ArtPiecePreview image={imageSource} title={name} artist={artist} />
          </li>
        ))}
      </ul>
    </>
  );
}
