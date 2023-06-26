import 

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
    return (
    <button
      onClick={() => {
        onToggleFavorite(title);
      }}
    ></button>
  );
}