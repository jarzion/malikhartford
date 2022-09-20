/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import Button from "components/CustomButtons/Button.js";

import profilePageStyle from "styles/jss/nextjs-material-kit-pro/pages/profilePageStyle.js";

const useStyles = makeStyles(profilePageStyle);

export default function ProfilePage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img
                    src="/img/malik/malik-profile.jpg"
                    alt="..."
                    className={imageClasses}
                  />
                </div>
                <div className={classes.name}>
                  <h3 className={classes.title}>Malik Hartford</h3>
                  <h6>{'4 ' + String.fromCharCode(11088) + ' | S | Lakota West | West Chester, OH'}</h6>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <br />
          <GridContainer justify="center">
          <ul class="image-gallery-thumbnails-container">
            <li>
              <Button onClick={() => {dataLayer.push({'event': 'outbound_click', 'location': 'hudl'});window.open('https://www.hudl.com/profile/12603031/Malik-Hartford','_blank')}} className="hudl" id="hudl" color="hudl" style={{minWidth: '300px', maxWidth: '300px'}}>
                <img src="/img/malik/hudl-icon.svg" type="image/svg+xml" style={{minHeight: '17px', maxHeight: '17px'}}></img>&nbsp;&nbsp;View On Hudl
              </Button>
              </li>
              <li>
              <Button onClick={() => {dataLayer.push({'event': 'outbound_click', 'location': 'twitter'});window.open('https://twitter.com/MalikHartford','_blank')}} className="buttonLink" id="twitter" color="twitter" style={{minWidth: '300px'}}>
                <i className="fab fa-twitter" /> Connect on twitter
              </Button>
              </li>
              <li>
              <Button onClick={() => {dataLayer.push({'event': 'outbound_click', 'location': 'instagram'});window.open('https://www.instagram.com/malik.hartford/','_blank')}} className="buttonLink" id="instagram" color="instagram" style={{minWidth: '300px'}}>
                <i className="fab fa-instagram" /> Connect on Instagram
              </Button>
              </li>
              <li>
              <Button onClick={() => {dataLayer.push({'event': 'outbound_click', 'location': 'tiktok'});window.open('https://www.tiktok.com/@malikhartford','_blank')}} className="buttonLink" id="tiktok" color="tiktok" style={{minWidth: '300px'}}>
                <i className="fab fa-tiktok" /> Connect on TikTok
              </Button>
              </li>
              <li>
              <Button onClick={() => {dataLayer.push({'event': 'outbound_click', 'location': '247sports'});window.open('https://247sports.com/Player/Malik-Hartford-46125498/','_blank')}} className="buttonLink" id="247sports" color="behance" style={{minWidth: '300px'}}>
                <img src="/img/malik/247sports.svg" type="image/svg+xml" style={{minHeight: '17px', maxHeight: '17px'}}></img>&nbsp;&nbsp;View on 247sports
              </Button>
              </li>
              <li>
              <Button onClick={() => {dataLayer.push({'event': 'outbound_click', 'location': 'rivals'});window.open('https://n.rivals.com/content/prospects/2023/malik-hartford-280084','_blank')}} className="buttonLink" id="rivals" color="facebook" style={{minWidth: '300px'}}>
                <img src="/img/malik/rivals.svg" type="image/svg+xml" style={{minHeight: '14px', maxHeight: '14px'}}></img>&nbsp;&nbsp;View on rivals
              </Button>
              </li>
              <li>
              <Button onClick={() => {dataLayer.push({'event': 'outbound_click', 'location': 'on3'});window.open('https://www.on3.com/db/malik-hartford-147153/','_blank')}} className="buttonLink" id="on3" color="github" style={{minWidth: '300px'}}>
                <img src="/img/malik/on3.svg" type="image/svg+xml" style={{minHeight: '17px', maxHeight: '17px', color: '#FFFFFF'}}></img>&nbsp;&nbsp;View on on3
              </Button>
              </li>
              <li>
              <Button onClick={() => {dataLayer.push({'event': 'outbound_click', 'location': 'espn'});window.open('http://www.espn.com/college-sports/football/recruiting/player/_/id/249823/malik-hartford','_blank')}} className="buttonLink" id="espn" color="pinterest" style={{minWidth: '300px'}}>
                <img src="/img/malik/espn-logo.svg" type="image/svg+xml" style={{minHeight: '17px', maxHeight: '17px'}}></img>&nbsp;&nbsp;View on ESPN
              </Button>
              </li>
              <li>
              <Button onClick={() => {dataLayer.push({'event': 'outbound_click', 'location': 'facebook'});window.open('https://www.facebook.com/malik.hartford.9','_blank')}} className="buttonLink" id="facebook" color="facebook" style={{minWidth: '300px'}}>
                <i className="fab fa-facebook-square" /> Connect on Facebook
              </Button>
              </li>
              <li>
              <Button onClick={() => {dataLayer.push({'event': 'outbound_click', 'location': 'youtube'});window.open('https://www.youtube.com/user/KingJamesMMV','_blank')}} className="buttonLink" id="youtube" color="youtube" style={{minWidth: '300px'}}>
                <i className="fab fa-youtube" /> View On Youtube
              </Button>
              </li>
          </ul>
          </GridContainer>
          <br />
          <br />
          <br />
          <Clearfix />
        </div>
      </div>
      <Footer
        content={
          <div>
            <div className={classes.center}>
              &copy; {1900 + new Date().getYear()} , Malik Hartford
            </div>
          </div>
        }
      />
    </div>
  );
}
