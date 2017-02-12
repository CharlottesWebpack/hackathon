import React, { Component } from 'react'; import { Button, Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap'; import { Link
} from 'react-router'; const MainPage = () => (

<div>

  <div className="w-section w-clearfix section _1">
    <Image className="logo-landing" src ="split-level-logo.png" />
    <h1 className="main-heading" data-ix="heading" >Keep your home.</h1>
    <h4 className="subheading" data-ix="subheading">25% of Americans <br/> Worry about <br/>Making their next mortgage payment</h4>


     <Row>
      <Col xs={4} xsOffset={2} sm={3} smOffset={3} md={2} mdOffset={4}>
          <Button className="button" > <Link to="/owners"> Owners </Link></Button>
      </Col>
      <Col xs={4} sm={3} md={2}>
          <Button className="button"> <Link to="/investors"> Investors </Link> </Button>
      </Col>
    </Row> 
    
     </div>
  <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
  <script type="text/javascript" src="https://daks2k3a4ib2z.cloudfront.net/547738bfcc3501d816240cbb/js/webflow.3a8662067.js"></script>

  </div>
); export default MainPage;