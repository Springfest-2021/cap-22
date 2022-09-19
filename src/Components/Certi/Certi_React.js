import React, { useRef,useEffect } from 'react'
//import Tab from '@material-ui/core/Tab';
import ca from './Campus Ambassador.png'

const Certi = (props) => {
 
const ref =  useRef();
const ref2 = useRef();

useEffect(() => {
  console.log(props.is_cert)
  const ctx = ref.current.getContext('2d');

  const image = new Image(ca);
 
  image.src = ca;
  image.width = ref.current.width 
  image.heigth = ref.current.heigth 
  // console.log(ctx)
   image.addEventListener('load', () => {

      
      //  console.log('image is loaded2');
       ctx.drawImage(image, 0, 0, ref.current.width, ref.current.height)
       ctx.font = '120px monotype corsiva'
       ctx.fillStyle = '#001'
       ctx.fillText(props.name , 720, 800)
   
     }); 
    // ref2.current.href = ref.current.toDataURL("image/png")
    // console.log(ref.current.toDataURL("image/png"))
  },[props.name])
  
const Download = e => {
  ref2.current.href = ref.current.toDataURL("image/png")
}
  return (
    <div>
      <canvas id="canvas" height="1600px" width="2263px" ref={ref} style={{display: "none"}}/>
      <a
        ref={ref2}
        onClick={(e) => Download(e)}
        href="#"
        download={"ca_cert.png"}
        style={{color: "#fff", textAlign: "left", padding: "12px 50px"}}
        className="account_settings_submit"
      >
        Download Certificate
      </a>
    </div>
  );

}

export default Certi;
// import React from "react";
// import participation from "./participation.jpg";

// const Certi = (props) => {
//   let ctx, pass;
//   const handleCanvas = (can) => {
//     const image = new Image(participation);
//     ctx = can.getContext("2d");

//     image.src = participation;
//     console.log(participation);

//     image.addEventListener("load", () => {
//       debugger;
//       console.log("image is loaded2");
//       ctx.drawImage(image, 0, 0, can.width, can.height);
//       ctx.font = "15px monotype corsiva";
//       ctx.fillStyle = "#001";
//       ctx.fillText(props.name, 300, 230);
//       ctx.fillText(props.college, 110, 245);
//       ctx.fillText(props.event, 400, 245);
//     });
//   };

//   const Download = (dwn) => {
//     dwn.href = this.ctx.toDataURL("image/jpg");
//     dwn.download = "SF_participation";
//   };
//   return (
//     <div>
//       <canvas
//         id="canvas"
//         height="400px"
//         width="565.745px"
//         ref={function (k) {
//           handleCanvas(k);
//         }}
//       />
//       <a href="#" id="dwn" onClick={(k) => Download(k.target.id)}>
//         Download_1
//       </a>
//     </div>
//   );
// };

// export default Certi;
