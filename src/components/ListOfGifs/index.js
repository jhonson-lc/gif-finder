import Gif from '../Gif';
import './ListOfGifs.css';

export default function ListOfGifs({ gifs }) {
  return (
    <div className="gifs__grid">
      {gifs.map(({ title, id, url }) => {
        return <Gif key={id} title={title} id={id} url={url} />;
      })}
    </div>
  );
}
