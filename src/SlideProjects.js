import React, { Component } from 'react';
import Sliders from './Sliders';
import { slidesDetails } from './slidesDetails';

import './SlideProjects.css';

class SlideProjects extends Component {

  render() {

    const currentSlide = (n) => {
      this.props.showSlides(n);
    }

    let slideTumbnail = [];
    let slideDots = [];

    const cardSlider = slidesDetails.map((slide, i) => {
        slideTumbnail.push(
          <span key = {i+1} className='dotTumbnail' onClick = {() => {currentSlide(i+1)}}>
            <img className = "imgTumbnail" src = {slidesDetails[i].slideName} alt='slideTumb' />
          </span>
        );
        slideDots.push(
          <span key = {i+1} className='dot' onClick = {() => {currentSlide(i+1)}}> {i+1} </span>
        );
     return (
        <Sliders
            key =  {slidesDetails[i].id}
            slideNr = {slidesDetails[i].id}
            slideName= {slidesDetails[i].slideName}
            title = {slidesDetails[i].title}
          /> )
    });

    return (
      <div id='slide-id'>
        { cardSlider }
        <div className='slide-position'>
          {slideDots}
        </div>
        <div className='slide-tumbnail'>
          {slideTumbnail}
        </div>
      </div>
    )
  }
}

export default SlideProjects;
