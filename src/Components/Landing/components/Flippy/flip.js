import { NODE_PARENT_VALIDATIONS } from '@babel/types';
import React, { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import tickets from "../../../../Assets/images/icons/FreeTickets.jpg";
import noparti from "../../../../Assets/images/icons/Noparti.png";
import certi from "../../../../Assets/images/icons/Certificate.png";
import merch from "../../../../Assets/images/icons/TShirt.png";
import goodies from "../../../../Assets/images/icons/Goodies.png";
import bag from "../../../../Assets/images/icons/intern.png";
import cam from "../../../../Assets/images/icons/Camera.png";

function Flip(props) {
  const ref = useRef();
  return (
    <Flippy
      flipOnHover={true} // default false
      flipOnClick={false} // default false
      flipDirection="vertical" // horizontal or vertical
      ref={ref} // to use toggle method like ref.curret.toggle()
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div
      style={{ zIndex: '1', width: '330px', height: '150px' }} /// these are optional style, it is not necessary
  >
    <FrontSide style={{ backgroundColor: 'rgba(0,0,0,0)'}} >
        <img style={{width: '100px'}} src = {props.url}/>
       <br />
      {/* <button onClick={() => { ref.current.toggle(); }}> Toggle via button</button> */}
    </FrontSide>
    <BackSide >
      <div className='backside-flip-text'>
      {props.text}
      </div>
    </BackSide>
  </Flippy>
  )
}

export default Flip;