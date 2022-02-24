import { useState } from 'react';
import { useLocation } from 'wouter';
import { useGifs } from 'hooks/useGifs';
import ListOfGifs from 'components/ListOfGifs';
import TrendingSearches from 'components/TrendingSearches';
import './Home.css';

const Home = () => {
  const [keyword, setKeyword] = useState('');
  const [, pushLocation] = useLocation();
  const { gifs } = useGifs();

  const handleSubmit = e => {
    e.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = e => {
    setKeyword(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="gifs__form">
        <input
          type="search"
          onChange={handleChange}
          placeholder="Search a gif here...."
          value={keyword}
          className="gifs__input"
        />
        <button className="gif__btn">Buscar</button>
      </form>
      <div className="showHome">
        <div className="home__gifs">
          <h2 className="gifs__subtitle">Última Búsqueda</h2>
          <ListOfGifs gifs={gifs} />
        </div>
        <TrendingSearches className="home__trending" />
      </div>
    </>
  );
};

export default Home;
