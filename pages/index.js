import Spotlight from "../components/Spotlight/index.js";

export default function SpotlightPage({pieces}) {

  return (
    <div>
      <h1>Art Gallery App</h1>
      <Spotlight pieces={pieces} />
    </div>
  );
}
