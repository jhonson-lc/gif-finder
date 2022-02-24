import React from 'react';
import Details from './pages/Details';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import { Route, Link } from 'wouter';
import { GifContextProvider } from './context/GifContext';

const App = () => {
  return (
    <>
      <Link to="/" className="gifs__title">
        Giffy
      </Link>
      <GifContextProvider>
        <div>
          <Route component={Home} path="/" />
          <Route component={SearchResults} path="/search/:keyword" />
          <Route component={Details} path="/gif/:id" />
        </div>
      </GifContextProvider>
    </>
  );
};

export default App;
