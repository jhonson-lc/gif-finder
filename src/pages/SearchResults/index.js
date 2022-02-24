import ListOfGifs from 'components/ListOfGifs';
import { useGifs } from 'hooks/useGifs';
import './SearchResults.css';

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { gifs } = useGifs({ keyword });

  return (
    <>
      <h3 className="keywordSearch__title">{decodeURI(keyword)}</h3>
      <ListOfGifs gifs={gifs} />
    </>
  );
}
