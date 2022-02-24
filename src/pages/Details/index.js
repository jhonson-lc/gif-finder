import Gif from 'components/Gif';
import useGlobalGifs from 'hooks/useGlobalGifs';

function Details({ params }) {
  const { id } = params;
  const gifs = useGlobalGifs();

  let gif = gifs.find(singleGif => {
    if (singleGif.id === id) {
      localStorage.setItem('gif', JSON.stringify(singleGif));
      return singleGif;
    } else {
      return [];
    }
  });

  return gif ? (
    <Gif {...gif} />
  ) : (
    <Gif {...JSON.parse(localStorage.getItem('gif'))} />
  );
}

export default Details;
