import React from 'react';

import Directory from '../../components/directory/directory.component';
import {Carousel} from 'react-bootstrap';
import './homepage.styles.scss';

const HomePage = () => (
  


  <div className='homepage'>


<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://hasselbladstudios.com/wp-content/uploads/2018/05/WED21670.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
       src="

       https://astudio.ae/wp-content/uploads/2018/07/005-astudio-fashion-dubai-photographers.jpg
"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://astudio.ae/wp-content/uploads/2018/07/016-astudio-fashion-dubai-photographers.jpg"
      alt="Third slide"
    />

    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel> 
<br/>
<p className='as'><b>Season Sale Upto 50% off</b></p>
<br/>
    <Directory />
    
    



  </div>
);

export default HomePage;
