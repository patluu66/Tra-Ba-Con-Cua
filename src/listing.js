import batman from './data/batmanRealty.js';
import superman from './data/supermanRealty.js';
import tea from './data/teaListing.js';


export const getListings = () => {
  return processBatman().concat(processSuperman());
};

export const processTea = () => {
  const teaData = tea.teaList;
  // console.log(teaData[0].price);
  return teaData;
};

function processBatman() {
  const data = batman.__BATMAN_DATA__;
  const listings = [];
  for (const address in data) {
    const listData = data[address];
    const cost = parseFloat(listData["cost"].replace(/,/g,''));
    const listing = {
      address: address,
      cost: cost, beds: parseInt(listData["beds"], 0),
      baths: parseInt(listData["baths"], 0),
      sq_ft: parseInt(listData["sq_ft"], 0),
      img: listData["img"],
      url: listData["url"],
    };
    listings.push(listing);
  }
  return listings;
};

function processSuperman() {
  const data = superman.__SUPERMAN_DATA__['items'];
  const listings = [];

  data.forEach(function(element) {
    const listing = {
      address: element["address"],
      cost: parseFloat(element["price"], 0),
      beds: parseFloat(element["beds"], 0),
      baths: parseFloat(element["baths"], 0),
      sq_ft: element["sqft"] !== "" ? parseFloat(element["sqft"]) : 0,
      img: element["thumb"],
      url: element["url"],
      built: element["built"],
    }
    listings.push(listing);
  })
  return listings;
}
