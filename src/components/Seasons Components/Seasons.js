import React, { Component } from "react";

import { Container, Grid, Card, Image } from "semantic-ui-react";
import Slider from "react-slick";
import SeasonsHeader from "./SeasonsHeader";
import SeasonsDetails from "./SeasonsDetails";

class Seasons extends Component {
  render() {
    const settings = {
      lazyLoad: true,
      arrows: true,
      adaptiveHeight: true,
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="seasons">
        <div className="seasons-bar">
          <SeasonsHeader />
          <Container className="seasons-container">
            <Grid>
              <Grid.Row>
                <Grid.Column width={16}>
                  <Slider {...settings}>
                    <Card>
                      <Image src="https://i.pinimg.com/236x/85/1c/06/851c06c393f320792e6330dfb01d4bf8--lionel-messi.jpg" />
                      <Card.Content>
                        <Card.Header>2004/2005</Card.Header>
                      </Card.Content>
                    </Card>
                    <Card>
                      <Image src="https://i.pinimg.com/236x/85/1c/06/851c06c393f320792e6330dfb01d4bf8--lionel-messi.jpg" />
                      <Card.Content>
                        <Card.Header>2005/2006</Card.Header>
                      </Card.Content>
                    </Card>
                    <Card>
                      <Image src="https://i.pinimg.com/236x/85/1c/06/851c06c393f320792e6330dfb01d4bf8--lionel-messi.jpg" />
                      <Card.Content>
                        <Card.Header>2007/2008</Card.Header>
                      </Card.Content>
                    </Card>
                    <Card>
                      <Image src="https://i.pinimg.com/236x/85/1c/06/851c06c393f320792e6330dfb01d4bf8--lionel-messi.jpg" />
                      <Card.Content>
                        <Card.Header>2008/2009</Card.Header>
                      </Card.Content>
                    </Card>
                    <Card>
                      <Image src="https://i.pinimg.com/236x/85/1c/06/851c06c393f320792e6330dfb01d4bf8--lionel-messi.jpg" />
                      <Card.Content>
                        <Card.Header>2009/2010</Card.Header>
                      </Card.Content>
                    </Card>
                    <Card>
                      <Image src="https://i.pinimg.com/236x/85/1c/06/851c06c393f320792e6330dfb01d4bf8--lionel-messi.jpg" />
                      <Card.Content>
                        <Card.Header>2010/2011</Card.Header>
                      </Card.Content>
                    </Card>
                    <Card>
                      <Image src="https://i.pinimg.com/236x/85/1c/06/851c06c393f320792e6330dfb01d4bf8--lionel-messi.jpg" />
                      <Card.Content>
                        <Card.Header>2011/2012</Card.Header>
                      </Card.Content>
                    </Card>
                    <Card>
                      <Image src="https://i.pinimg.com/236x/85/1c/06/851c06c393f320792e6330dfb01d4bf8--lionel-messi.jpg" />
                      <Card.Content>
                        <Card.Header>2012/2013</Card.Header>
                      </Card.Content>
                    </Card>
                    <Card>
                      <Image src="https://i.pinimg.com/236x/85/1c/06/851c06c393f320792e6330dfb01d4bf8--lionel-messi.jpg" />
                      <Card.Content>
                        <Card.Header>2013/2014</Card.Header>
                      </Card.Content>
                    </Card>
                    <Card>
                      <Image src="https://i.pinimg.com/236x/85/1c/06/851c06c393f320792e6330dfb01d4bf8--lionel-messi.jpg" />
                      <Card.Content>
                        <Card.Header>2014/2014</Card.Header>
                      </Card.Content>
                    </Card>
                    <Card>
                      <Image src="https://i.pinimg.com/236x/85/1c/06/851c06c393f320792e6330dfb01d4bf8--lionel-messi.jpg" />
                      <Card.Content>
                        <Card.Header>2015/2016</Card.Header>
                      </Card.Content>
                    </Card>
                    <Card>
                      <Image src="https://i.pinimg.com/236x/85/1c/06/851c06c393f320792e6330dfb01d4bf8--lionel-messi.jpg" />
                      <Card.Content>
                        <Card.Header>2016/2017</Card.Header>
                      </Card.Content>
                    </Card>
                    <Card>
                      <Image src="https://i.pinimg.com/236x/85/1c/06/851c06c393f320792e6330dfb01d4bf8--lionel-messi.jpg" />
                      <Card.Content>
                        <Card.Header>2017/2018</Card.Header>
                      </Card.Content>
                    </Card>
                  </Slider>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
        <SeasonsDetails />
      </div>
    );
  }
}

export default Seasons;
