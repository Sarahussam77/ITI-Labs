import { Component } from "react";
import "./imageSliderStyle.css";

class ImageSliderComponent extends Component {
  imagesArr =  ["https://pe-images.s3.amazonaws.com/type/effects/image-in-text/new/hawaii.jpg","https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg"
  ,"https://www.w3schools.com/css/img_5terre.jpg","https://cdn.esawebb.org/archives/images/screen/carinanebula3.jpg","https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg"];
  i = 0;
  interval = "";

  constructor() {
    super();
    this.state = {
      imageSource: this.imagesArr[0],
    };
  }

  next = () => {
    if (this.i < this.imagesArr.length - 1) {
      this.i++;
    }
  this.setState({ imageSource: this.imagesArr[this.i] });
  };
  previous = () => {
    if (this.i > 0) {
      this.i--;
    }
  this.setState({ imageSource: this.imagesArr[this.i] });
  };
  start = () => {
    this.interval = setInterval(() => {
      this.next();
      if (this.i === this.imagesArr.length - 1) {
        this.i = -1;
      }
    }, 1500);
  };
  stop = () => {
    clearInterval(this.interval);
  };

  render() {
    return (
      <>
        <div class="center">
          <h1>Image Slider</h1>
          <img src={this.state.imageSource} alt="img" />
          <div class="btns">
            <input style={{ marginLeft: "140px" }} type="button" value="Next" onClick={this.next}/>
            <input type="button" value="Prev"  onClick={this.previous} />
            <input type="button" value="Start" onClick={this.start}  />
            <input type="button" value="Stop"  onClick={this.stop} />
          </div>
        </div>
      </>
    );
  }
}

export default ImageSliderComponent;