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

/*
export default function handle ({}) {

} 

function handleToggleFavorite({ id }) {
      setIsFavorite(!isFavorite);
    }

    function handleToggleFavorite({id}) {
      setEntries(entries.map(entry => 
        { 
          if(entry.id === id)
          {
            return ...entry, isFavorite: true};
          }
            else { return entry;}
          }));

           function toggleLiked() {
    setLiked(!liked);
  }
  
*/