import React from 'react';
import {Image} from 'react-bootstrap';

export default class ImageComp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { path } = this.props;
    return (
      <Image src={path} responsive />
    )
  }
}