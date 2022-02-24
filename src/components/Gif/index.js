import { Link } from 'wouter';
import './Gif.css';

export default function Gif({ title, id, url }) {
  return (
    <div key={id} className="Gif">
      <Link to={`/gif/${id}`} className="gifs__link">
        <img loading="lazy" src={url} alt={title} />
      </Link>
    </div>
  );
}
