import React from "react";
import styles from "./Purpose.module.css";
import phoneImg  from "./iphoneimage.png";
import gov from "../../../images/govsponsors.png";

function Purpose(props) {
  return (
    <div id="parent">
      <h1> Welcome to HopeOneSource </h1>
      <div className={styles.purposeContainer}>
        <div className={styles.phoneDiv}><img src={phoneImg} /> </div>
        <div className={styles.whatWeDo}>
        <h2>What We Do?</h2>
					<h5>We collaborate with Service Providers to provide the most up todate & accurate info about available programs & services to our vulnerable neighbors in real-time.</h5>
         </div>
        <div className={styles.providers}>
          <h4>Service Providers</h4>
          <p>Connect those most vulnerable with your services.</p>
        </div>
        <div className={styles.vulnerable}>
          <h4>Vulnerable Community Members</h4>
          <p>Connect to housing, career, and social services needed.</p>
        </div>
        <div className={styles.local}>
          <h4>Local Government</h4>
          <p>Real-time data driven solutions that support the continuum of care.</p>
        </div>

      </div>
    </div>
  );
}

export default Purpose;
