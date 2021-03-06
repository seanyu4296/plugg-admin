import React, { Component, PropTypes } from 'react';
import { Table, Column, Cell } from 'fixed-data-table';
import TextCell from './TextCell.jsx';
import moment from 'moment';
import 'fixed-data-table/dist/fixed-data-table.css';

class Dashboard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      listings: [{
        muvrName: "John Wesley Chan",
        shopprName: "Sean Tristan Yu",
        status: "ACTIVE",
        timeCreated: moment(),
        timePaid: moment(),
        parcelSize: "L",
        receivingDate: [moment(), moment()],
        localShippingDate: moment(),
        stepperCount: 4
      }, {
        muvrName: "John Wesley Chan",
        shopprName: "Sean Tristan Yu",
        status: "ACTIVE",
        timeCreated: moment(),
        timePaid: moment(),
        parcelSize: "L",
        receivingDate: [moment(), moment()],
        localShippingDate: moment(),
        stepperCount: 4
      }]
    }
  };

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Table
          onRowClick={(event, index) => {
            console.log(event, index)
          }}
          rowsCount={this.state.listings.length}
          rowHeight={30}
          headerHeight={30}
          width={1100}
          height={800}>
          <Column
            header={<Cell>Muvr</Cell>}
            cell={<TextCell
              data={this.state.listings}
              field="muvrName"
            />}
            width={160}
          />
          <Column
            header={<Cell>Shoppr</Cell>}
            cell={<TextCell
              data={this.state.listings}
              field="shopprName"
            />}
            width={160}
          />
          <Column
            header={<Cell>Status</Cell>}
            cell={<TextCell
              data={this.state.listings}
              field="status"
            />}
            width={125}
          />
          <Column
            header={<Cell>Time Created</Cell>}
            cell={
              <TextCell
                data={this.state.listings}
                field="timeCreated"
                type="dateObject"
              />}
            width={125}
          />

          <Column
            header={<Cell>Time Paid</Cell>}
            cell={
              <TextCell
                data={this.state.listings}
                field="timePaid"
                type="dateObject"
              />
            }
            width={125}
          />
          <Column
            header={<Cell>Parcel Size</Cell>}
            cell={<TextCell
              data={this.state.listings}
              field="parcelSize"
            />}
            width={100}
          />
          <Column
            header={<Cell>Receiving Dates</Cell>}
            cell={<TextCell
              data={this.state.listings}
              field="receivingDate"
              type="dateRange"
            />}
            width={190}
          />
          <Column
            header={<Cell>Local Shipping</Cell>}
            cell={
              <TextCell
                data={this.state.listings}
                field="localShippingDate"
                type="dateObject"
              />
            }
            width={120}
          />
          <Column
            header={<Cell>Stepper</Cell>}
            cell={
              <TextCell
                data={this.state.listings}
                field="stepperCount"

              />
            }
            width={120}
          />

        </Table>


      </div>
    );
  }
}

Dashboard.contextTypes = {
  router: PropTypes.object
}

Dashboard.propTypes = {

};

export default Dashboard;
