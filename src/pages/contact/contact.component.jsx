import React from 'react';

import './contact.styles.scss';
import {Image} from 'react-bootstrap';

const Contact = () => (
    <div className='contact'>
      <hr/>
      <p><b>Email:  </b></p>
      <p> crwnclothing.029@gmail.com</p>
      
      <hr/>
      
      <p><b>Contact No: </b></p>
      <p> 09059172071</p>
      <hr/>


      <Image src="https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" thumbnail />
    

     </div>
  );



export default Contact;