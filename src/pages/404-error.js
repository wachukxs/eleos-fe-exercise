import React from "react";

export default function ErrorPage() {
  return (
    <div style={{
      textAlign: "center",
      paddingTop: "35%",
    }}>
      <img
        alt="eleos logo"
        height={30}
        loading="lazy"
        src="https://www.eleos.co.uk/consumer/eleos-logo-new-color.svg"
      />
      <h3>What are you trying to do? <a href="/">Go Home</a>. </h3>
    </div>
  );
}
