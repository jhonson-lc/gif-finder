import { useEffect, useState } from 'react';
import getTrendingSearches from 'services/getTrendingSearches';
import Category from '../Category';

function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingSearches().then(setTrends);
  }, [trends]);
  return <Category name="Tendencias" options={trends} />;
}

export default TrendingSearches;
