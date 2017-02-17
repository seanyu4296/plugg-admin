import React, { Component, PropTypes } from 'react';
import moment from 'moment';
class SingleListing extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      listing: {
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
        parcelSize: "L"
      }
    }
  };
  render() {
    let listing = this.state.listing;
    return (
      <div className="container" style={{ maxWidth: 950, margin: "0 auto" }}>
        <h1 className="title is-3"><strong>Listing {this.props.match.params.id}</strong></h1>
        <div className="card" >
          <div className="card-content">
            <div className="tile is-ancestor">
              <div className="tile is-6 is-vertical is-parent" >

                <div className="tile is-child" >
                  <div className="content">
                    <p className="title title-border-bottom">Muvr</p>
                    <div className="container content-padding">
                      <div className="columns">
                        <div className="column is-one-third">
                          <p className=" is-5 key">Name</p>
                        </div>
                        <div className="column">
                          <p className=" is-5">{listing.muvr.name}</p>
                        </div>
                      </div>
                      <div className="columns">
                        <div className="column is-one-third">
                          <p className=" is-5 key">Email</p>
                        </div>
                        <div className="column">
                          <p className=" is-5">{listing.muvr.email}</p>
                        </div>
                      </div>
                      <div className="columns">
                        <div className="column is-one-third">
                          <p className=" is-5 key">Paypal Email</p>
                        </div>
                        <div className="column">
                          <p className=" is-5">{listing.muvr.paypalEmail}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tile is-child" >
                  <div className="content">
                    <div className="title is-3 title-border-bottom" >Shoppr</div>
                    <div className="container content-padding">
                      <div className="columns">
                        <div className="column is-one-third">
                          <p className=" is-5 key">Name</p>
                        </div>
                        <div className="column">
                          <p className=" is-5">{listing.shoppr.name}</p>
                        </div>
                      </div>
                      <div className="columns">
                        <div className="column is-one-third">
                          <p className=" is-5 key">Email</p>
                        </div>
                        <div className="column">
                          <p className=" is-5">{listing.shoppr.email}</p>
                        </div>
                      </div>
                      <div className="columns">
                        <div className="column is-one-third">
                          <p className=" is-5 key">Paypal Email</p>
                        </div>
                        <div className="column">
                          <p className=" is-5">{listing.shoppr.paypalEmail}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="tile is-parent" >
                <div className="tile is-child">
                  <div className="title title-border-bottom" >General Details</div>
                  <div className="container content-padding">
                    <div className="columns">
                      <div className="column is-one-third">
                        <p className=" is-5 key">Invoice URL</p>
                      </div>
                      <div className="column">
                        <p className=" is-5"><a href={`${listing.invoiceUrl}`}>{`${listing.invoiceUrl}`}</a></p>
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column is-one-third">
                        <p className=" is-5 key">Tags</p>
                      </div>
                      <div className="column">
                        <p className=" is-5">{listing.tags.map((tag) => <span>{tag} &nbsp;</span>)}</p>
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column is-one-third">
                        <p className=" is-5 key">Status</p>
                      </div>
                      <div className="column">
                        <p className=" is-5">{listing.status}</p>
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column is-one-third">
                        <p className=" is-5 key">Parcel Size</p>
                      </div>
                      <div className="column">
                        <p className=" is-5">{listing.parcelSize}</p>
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column is-one-third">
                        <p className=" is-5 key">Receiving Dates</p>
                      </div>
                      <div className="column">
                        <p className=" is-5">{moment(listing.receivingDates[0]).format('L')} - {moment(listing.receivingDates[1]).format('L')}</p>
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column is-one-third">
                        <p className=" is-5 key">Time Paid</p>
                      </div>
                      <div className="column">
                        <p className=" is-5">{moment(listing.timePaid).format('L')} </p>
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column is-one-third">
                        <p className=" is-5 key">Time Created</p>
                      </div>
                      <div className="column">
                        <p className=" is-5">{moment(listing.timeCreated).format('L')} </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
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
                    <p className=" key">Local Shipping</p>
                  </div>
                  <div className="column">
                    <p className="">{moment(listing.timeCreated).format('L')} </p>
                  </div>
                </div>
                <p>11 May St. Congressional Village Phase Project 8 Quezon City</p>
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
                <p>11 May St. Congressional Village Phase Project 8 Quezon City</p>
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
                  <p>11 May St. Congressional Village Phase Project 8 Quezon City</p>
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
