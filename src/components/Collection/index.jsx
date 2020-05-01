import React from "react";

import CollectionItem from "../CollectionItem";

import "./styles.sass";

const Collection = ({ title, items }) => (
  <div className="collections">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="collection-preview">
      {items
        .filter((_, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default Collection;
