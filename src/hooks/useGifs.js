import { useContext, useEffect } from 'react';
import getGifs from 'services/getGifs';
import GifContext from 'context/GifContext';

export function useGifs({ keyword } = { keyword: null }) {
  const { gifs, setGifs } = useContext(GifContext);

  useEffect(() => {
    const keywordtoUse =
      keyword || localStorage.getItem('lastKeyword') || 'random';
    getGifs({ keyword: keywordtoUse }).then(gifs => setGifs(gifs));
    localStorage.setItem('lastKeyword', keyword);
  }, [keyword, setGifs]);

  return { gifs };
}
