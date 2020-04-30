import React from "react";
import { Link } from "react-router-dom";

import "./styles.sass";

const CategoryItem = ({ title, imageUrl, size, linkUrl }) => (
  <Link to={linkUrl} className={`${size} category-item`}>
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}></div>
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">shop now</span>
    </div>
  </Link>
);

export default CategoryItem;
