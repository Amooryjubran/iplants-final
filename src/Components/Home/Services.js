import React from "react";
import "./Services.css";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import HighQualityIcon from "@material-ui/icons/HighQuality";
import RedeemIcon from "@material-ui/icons/Redeem";

export default function Services() {
  return (
    <div class="section" id="section-services">
      <div class="container" id="container-services">
        <div class="col four">
          <h1 class="icon">
            <DriveEtaIcon />
          </h1>
          <h1 class="service">Delievry</h1>
          <p>
            iPlants provides full delievries worldwide, no matter where you are
          </p>
        </div>
        <div class="col four">
          <h1 class="icon">
            <AccessibilityIcon />
          </h1>
          <h1 class="service">Servies</h1>
          <p>Plants need to be taken care of, that is why iPlants exsits</p>
        </div>
        <div class="responsivegroup"></div>
        <div class="col four">
          <h1 class="icon">
            <HighQualityIcon />
          </h1>
          <h1 class="service">Quality</h1>
          <p>
            Highly dureable and reliable when it comes to quality of products
          </p>
        </div>

        <div class="col four">
          <h1 class="icon">
            <RedeemIcon />
          </h1>
          <h1 class="service">Options</h1>
          <p>
            iPlants was created to provide customers with amazing different
            options
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
}
