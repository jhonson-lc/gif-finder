import React from 'react';
import { Link } from 'wouter';
import './Category.css';

function Category({ name, options = [] }) {
  return (
    <div className="category">
      <h2 className="category__name">{name}</h2>
      <ul className="category__list">
        <li className="category__item">
          {options.map(word => {
            return <Link to={`/search/${word}`}>{word}</Link>;
          })}
        </li>
      </ul>
    </div>
  );
}

export default Category;
