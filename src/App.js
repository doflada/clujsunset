import React, { Component } from 'react';
import SlideProjects from './SlideProjects';
import './App.css';

let slideIndex = 0;
let vtime;

class App extends Component {

  showSlides = (n) => {
    clearTimeout(vtime);
    if ( isNaN(n) ) {
        n = slideIndex
      } else {
        slideIndex = n-1
      };
      let i;
      let slides = document.getElementsByClassName("slide-projects");
      let dots = document.getElementsByClassName("dot");
      let dotsTumbnail = document.getElementsByClassName("dotTumbnail");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      slideIndex++;

      if (slideIndex > slides.length) {
        slideIndex = 1;
      };
      if (slideIndex < 1) {
        slideIndex = slides.length;
      };
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        dotsTumbnail[i].className = dotsTumbnail[i].className.replace(" activeTumbnail", "");
      };
      if (slides.length > 0) {
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        dotsTumbnail[slideIndex-1].className += " activeTumbnail";
        vtime = setTimeout(this.showSlides, 3000);
      };
  };

  componentDidMount() {
    this.showSlides(1);
  };


  render() {
    return (
      <div className="App">
        <div>Wonderful Cluj by sunset - WORK IN PROGRESS ...</div>
        <div id='slide-container'>
          <SlideProjects showSlides = {this.showSlides}/>
        </div>
      </div>
    );
  }

}

export default App;
