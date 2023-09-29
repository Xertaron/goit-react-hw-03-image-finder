import React, { Component } from 'react';
import data from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export default class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={data.galleryItem}>
        <img src={this.props.smallImgURL} alt={this.props.id} />
      </li>
    );
  }
}


ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  smallImgURL: PropTypes.string.isRequired,
};