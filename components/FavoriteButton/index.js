import Heart from "../../resources/assets/heart.svg";

export default function FavoriteButton({ pieces, onToggleFavorite, slug }) {
  return (
    <button onClick={onToggleFavorite(slug)}>
      <Heart fill={pieces.isFavorite ? "red" : "lightgrey"} />
    </button>
  );
}
