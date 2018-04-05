import React from "react";

const Style = {
  root:{textAlign: 'center',
  // margin:'5rem 0 5rem 0',
},
  h1:{
marginBottom:'3rem',
  }

}
export const Mission = () => {
  return (
    <div style={Style.root}>
      <h1 style={Style.h1}>Our Mission
      </h1>
      <h5>
        We live in a dynamic age of technology-driven changes that very quickly redefines how we learn and communicate. At Pandahug, we embrace technological and scientific advancement as well as a humanistic future.
      </h5>
      <h5>
        Pandahug leverages technology to tailor your learning program to your unique needs and provide a positive and highly effective online learning experience. We provide you with clear achievable goals that guide you to reach previously unimaginable success.</h5>
    </div>
  );
};
