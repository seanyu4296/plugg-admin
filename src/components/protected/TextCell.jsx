import {Table, Column, Cell} from 'fixed-data-table';
import React, {Component, PropTypes} from 'react';
import moment from 'moment';


class TextCell extends React.Component {
  constructor(props, context) {
      super(props, context);
      this.state = {

      }
      this.renderContent = this.renderContent.bind(this);
  };

  renderContent(data) {
    switch (this.props.type) {
        case "array":
            let newArray = [];
            data.map((value, index) => {
            let comma;
            if(data.length > 1 && data.length != index + 1) {
                comma = ", ";
            }
            let span = <span key={index}>{value}{comma}</span>
            newArray.push(span)
            })
            return newArray

        case "dateObject" :
            return moment(data).format('ll')

        case "dateRange" :
            return <span>{moment(data[0]).format('l')} - {moment(data[1]).format('l')}</span>

        default:
            return data;
      }
  }
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    return (
      <Cell {...props}>
        {this.renderContent(data[rowIndex][field])}
      </Cell>
    );
  }
}

export default TextCell;
