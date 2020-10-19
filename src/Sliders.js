import React, { Component } from 'react';
import './Sliders.css';

class Sliders extends Component {

  render() {
    const { ids, slideNr, slideName, title } = this.props;
    return (
        <div id = {ids} className='slide-projects fade'>
          <img className='slide-images' src={slideName} alt='slides' />
          <div className='title-projects'>{slideNr} => {title}</div>
        </div>
    )
  }
}

export default Sliders;
