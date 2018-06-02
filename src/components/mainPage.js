import React, { Component } from 'react';
import '../App.css';
import { Row, Col, Grid, Button, ButtonToolbar } from 'react-bootstrap';
import { getListings, processTea } from '../listing.js';
import { ListingBox } from './listing-box';
import { BrowserRouter as Router } from 'react-router-dom';
// import Background2 from '../images/wood.jpeg';
// import Background from '../images/teaBackground.png';
//
// var sectionStyle = {
//   backgroundImage: `url(${Background})`
// };


// var backgroundStyle = {
//   // height: "100px",
//   backgroundImage: `url(${Background2})`
// };

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teaListings: processTea(),
      listings: getListings(),
      selectedButton: "price",
    };
  };

  buttonClicked = (e) => {
    let key = e.target.id;
    const sortedListings = this.state.teaListings.sort(function(a, b) {
      return a[key] - b[key];
    });
    this.setState({
      teaListings: sortedListings,
      selectedButton: key,
    });
  };

  componentDidMount() {
    const sortedListings = this.state.teaListings.sort(function(a, b) {
      return a['price'] - b['price'];
    });
    this.setState({
      teaListings: sortedListings
    });
  };

  printTeaList4 = () => {
    const teaList = this.state.teaListings
    // console.log(teaList[0].thumb)
    const rows = [];

    for(let i = 0; i < teaList.length; i += 2) {
      // console.log(teaList[i].price);
      const leftListing = teaList[i];
      const rightListing = teaList[i + 1];
      const row = (
        <Row key={leftListing.name} className="show-grid">
          <Col key={leftListing.rating} xs={12} md={6}>
            <div className="listing-container">
                <div className="left-box">
                  <img className="listPic" alt="thumbnail" src={leftListing.thumb} />
                </div>
                <div className="right-box">
                  <div className='space'>
                  </div>
                  <p className='teaName'>{leftListing.name}</p>
                  <p className='teaRating'>Rating: {leftListing.rating}/5</p>
                  <p className='teaPrice'>${leftListing.price}</p>
                  <p className='teaWeight'>{leftListing.weight} oz * {leftListing.size} packs</p>
                </div>
            </div>
          </Col>
          <Col key={i + rightListing.rating} xs={12} md={6}>
            <div className="listing-container">
                <div className="left-box">
                  <img className="listPic" alt="thumbnail" src={rightListing.thumb} />
                </div>
                <div className="right-box">
                  <div className='space'>
                  </div>
                  <p className='teaName'>{rightListing.name}</p>
                  <p className='teaRating'>Rating: {rightListing.rating}/5</p>
                  <p className='teaPrice'>${rightListing.price}</p>
                  <p className='teaWeight'>{leftListing.weight} oz * {leftListing.size} packs</p>
                </div>
            </div>
          </Col>
        </Row>
      )
      rows.push(row);
    };

    return rows;
  };

  printListing = () => {
    const listings = this.state.listings;
    const rows = [];
    for (let i = 0; i < listings.length; i += 2) {
      const leftListing = listings[i];
      const rightListing = listings[i + 1];
      const row = (
        <Row key={leftListing.address} className="show-grid">
          <Col key={leftListing.url} xs={12} md={6}>
            <ListingBox listing={leftListing} />
          </Col>
          <Col key={i + rightListing.cost} xs={12} md={6}>
            <ListingBox listing={rightListing} />
          </Col>
        </Row>
      );
      rows.push(row);
    }
    return rows;
  };


  render() {

    return (
      <Router>
        <div>
          <Grid>
            <h2>Awesome Tea Listings</h2>

            <ButtonToolbar>
              <Button
                onClick={this.buttonClicked}
                bsStyle={this.state.selectedButton === "price" ? "primary" : "success"}
                id="price">Price</Button>
              <Button
                onClick={this.buttonClicked}
                bsStyle={this.state.selectedButton === "name" ? "primary" : "success"}
                id="name">Name</Button>
              <Button
                onClick={this.buttonClicked}
                bsStyle={this.state.selectedButton === "rating" ? "primary" : "success"}
                id="rating">Rating</Button>
            </ButtonToolbar>

            { this.printTeaList4() }

          </Grid>
        </div>
      </Router>
    );
  }
}

export default MainPage;
