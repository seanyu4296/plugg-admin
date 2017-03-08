import React, { Component, PropTypes } from 'react';
import moment from 'moment';
class SingleListing extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      listing: {
        id: 123,
        muvr: {
          id: 123124,
          name: "Sean Yu",
          email: "seanyu4296@gmail.com",
          paypalEmail: "sean@obf.ateneo.edu"
        },
        shoppr: {
          id: 123124,
          name: "Sean Yu",
          email: "seanyu4296@gmail.com",
          paypalEmail: "sean@obf.ateneo.edu"
        },
        invoiceUrl: "http://example.com",
        tags: ['clothing', 'accessories'],
        status: "ACTIVE",
        receivingDates: [moment(), moment()],
        timePaid: moment(),
        timeCreated: moment(),
        localShippingDate: moment(),
        parcelSize: "L",
        intlAddress: "11 May St. Congressional Village Phase Project 8 Quezon City",
        muvrPhAddress: "11 May St. Congressional Village Phase Project 8 Quezon City",
        shopprPhAddress: "11 May St. Congressional Village Phase Project 8 Quezon City"
      }
    }
  };
  render() {
    let listing = this.state.listing;
    return (
      <div className="container card-page-container" >
        <h1 className="title is-3"><strong>Listing {this.props.match.params.id}</strong></h1>
        <div className="card" >
          <div className="card-content">
            <div className="tile is-ancestor">
              <div className="tile is-6 is-vertical is-parent" >

                <div className="tile is-child content-padding" >
                  <div className="content">
                    <p className="title is-4 title-border-bottom"><strong>Muvr</strong></p>
                    <div className="container">
                      <div className="columns">
                        <div className="column is-one-third">
                          <p className=" is-5 is-key">Name</p>
                        </div>
                        <div className="column">
                          <p className=" is-5 is-value">{listing.muvr.name}</p>
                        </div>
                      </div>
                      <div className="columns">
                        <div className="column is-one-third">
                          <p className=" is-5 is-key">Email</p>
                        </div>
                        <div className="column">
                          <p className=" is-5 is-value">{listing.muvr.email}</p>
                        </div>
                      </div>
                      <div className="columns">
                        <div className="column is-one-third">
                          <p className=" is-5 is-key">Paypal Email</p>
                        </div>
                        <div className="column">
                          <p className=" is-5 is-value">{listing.muvr.paypalEmail}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tile is-child" >
                  <div className="content content-padding">
                    <div className="title is-4 title-border-bottom" ><strong>Shoppr</strong></div>
                    <div className="container ">
                      <div className="columns">
                        <div className="column is-one-third">
                          <p className=" is-5 is-key">Name</p>
                        </div>
                        <div className="column">
                          <p className=" is-5 is-value">{listing.shoppr.name}</p>
                        </div>
                      </div>
                      <div className="columns">
                        <div className="column is-one-third">
                          <p className=" is-5 is-key">Email</p>
                        </div>
                        <div className="column">
                          <p className=" is-5 is-value">{listing.shoppr.email}</p>
                        </div>
                      </div>
                      <div className="columns">
                        <div className="column is-one-third">
                          <p className=" is-5 is-key">Paypal Email</p>
                        </div>
                        <div className="column">
                          <p className=" is-5 is-value">{listing.shoppr.paypalEmail}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="tile is-parent" >
                <div className="tile is-child content-padding">
                  <div className="title is-4 title-border-bottom"><strong>General Details</strong></div>
                  <div className="container">
                    <div className="columns">
                      <div className="column is-one-third">
                        <p className=" is-5 is-key">Invoice URL</p>
                      </div>
                      <div className="column">
                        <p className=" is-5 is-value"><a href={`${listing.invoiceUrl}`}>{`${listing.invoiceUrl}`}</a></p>
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column is-one-third">
                        <p className=" is-5 is-key">Tags</p>
                      </div>
                      <div className="column">
                        <p className=" is-5 is-value">
                          {listing.tags.map((tag, index) => {
                            let comma;
                            if (listing.tags.length > 1 && listing.tags.length != index + 1) {
                              comma = ",";
                            }
                            return <span key={index} >{tag}{comma}&nbsp;</span>
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column is-one-third">
                        <p className=" is-5 is-key">Status</p>
                      </div>
                      <div className="column">
                        <p className=" is-5 is-value">{listing.status}</p>
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column is-one-third">
                        <p className=" is-5 is-key">Parcel Size</p>
                      </div>
                      <div className="column">
                        <p className=" is-5 is-value">{listing.parcelSize}</p>
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column is-one-third">
                        <p className=" is-5 is-key">Receiving Dates</p>
                      </div>
                      <div className="column">
                        <p className=" is-5 is-value">{moment(listing.receivingDates[0]).format('L')} - {moment(listing.receivingDates[1]).format('L')}</p>
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column is-one-third">
                        <p className=" is-5 is-key">Time Paid</p>
                      </div>
                      <div className="column">
                        <p className=" is-5 is-value">{moment(listing.timePaid).format('ll')} </p>
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column is-one-third">
                        <p className=" is-5 is-key">Time Created</p>
                      </div>
                      <div className="column">
                        <p className=" is-5 is-value">{moment(listing.timeCreated).format('ll')} </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="card-footer">
            <a className="card-footer-item">Edit</a>
            <a className="card-footer-item">Delete</a>
          </footer>
        </div>
        <br />
        <div className="tile is-ancestor" >
          <div className="tile is-parent is-vertical">
            <div className="card">
              <header className="card-header" >
                <h2 className="card-header-title title is-5">
                  Muvr PH Address
                </h2>
              </header>
              <div className="card-content">
                <div className="columns">
                  <div className="column is-one-third">
                    <p className=" is-key">Local Shipping</p>
                  </div>
                  <div className="column">
                    <p className="is-value">{moment(listing.timeCreated).format('L')} </p>
                  </div>
                </div>
                <p className="is-value">{listing.muvrPhAddress}</p>
              </div>
            </div>
            <br />
            <div className="card">
              <header className="card-header" >
                <h2 className="card-header-title title is-5">
                  Shoppr PH Address
                </h2>
              </header>
              <div className="card-content">
                <p className="is-value">{listing.shopprPhAddress}</p>
              </div>
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child">
              <div className="card">
                <header className="card-header" >
                  <h2 className="card-header-title title is-5">
                    Muvr International Address
                </h2>
                </header>
                <div className="card-content">
                  <p className="is-value">{listing.intlAddress}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

SingleListing.propTypes = {

};

SingleListing.contextTypes = {
  router: PropTypes.object
}

export default SingleListing;
