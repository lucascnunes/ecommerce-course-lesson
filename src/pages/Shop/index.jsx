import React from "react";

import collectionsData from "./collections";

import Collection from "../../components/Collection";

import "./styles.sass";

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: collectionsData,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <Collection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
