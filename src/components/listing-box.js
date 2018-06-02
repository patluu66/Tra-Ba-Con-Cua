import React, { Component } from 'react';
import '../App.css';

export class ListingBox extends Component {
  render() {
    const listing = this.props.listing;
    // const tea = this.props.teaListings;
    // console.log(tea);

    const price = listing.cost.toLocaleString(
      'us-US',
      {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
    return (

      <div className="listing-container">
          <div className="left-box">
            <img className="listPic" alt="thumbnail" src={listing.img} />
          </div>
          <div className="right-box">
            <div className="built-block">
              <p className="yearBuilt">{listing.built ? "Built in " + listing.built : null}</p>
            </div>
            <a href={listing.url} className="active">
              <p className="text-address">{listing.address}</p>
            </a>
            <p className="price">{price}</p>
            <p>{listing.beds} beds * {listing.baths} baths * {listing.sq_ft} sq ft</p>
          </div>
      </div>

    );
  }
}
