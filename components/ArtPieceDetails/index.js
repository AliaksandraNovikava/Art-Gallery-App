import Link from "next/link";
import Image from "next/image";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <div>
      <button>
        <Link href="/art-pieces">Go back</Link>
      </button>
      <br></br>
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
