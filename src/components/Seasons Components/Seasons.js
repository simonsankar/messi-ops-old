import React, { Component } from "react";

import { Container, Grid, Card, Image } from "semantic-ui-react";
import Slider from "react-slick";
import SeasonsHeader from "./SeasonsHeader";
import SeasonsDetails from "./SeasonsDetails";
import Footer from "../Footer Components/Footer";

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
                    <Card className="seasons-card">
                      <Image src="https://i.pinimg.com/236x/85/1c/06/851c06c393f320792e6330dfb01d4bf8--lionel-messi.jpg" />
                      <Card.Content>
                        <Card.Header>2004/2005</Card.Header>
                      </Card.Content>
                      <div className="seasons-card-overlay">
                        <span className="number">10</span>
                        <span className="name">Messi</span>
                        <span className="year">04/05</span>
                      </div>
                    </Card>
                    <Card className="seasons-card">
                      <Image src="https://i.pinimg.com/236x/85/1c/06/851c06c393f320792e6330dfb01d4bf8--lionel-messi.jpg" />
                      <Card.Content>
                        <Card.Header>2005/2006</Card.Header>
                      </Card.Content>
                      <div className="seasons-card-overlay">
                        <span className="number">10</span>
                        <span className="name">Messi</span>
                        <span className="year">05/06</span>
                      </div>
                    </Card>
                    <Card className="seasons-card">
                      <Image src="https://i.pinimg.com/236x/85/1c/06/851c06c393f320792e6330dfb01d4bf8--lionel-messi.jpg" />
                      <Card.Content>
                        <Card.Header>2006/2007</Card.Header>
                      </Card.Content>
                      <div className="seasons-card-overlay">
                        <span className="number">10</span>
                        <span className="name">Messi</span>
                        <span className="year">06/07</span>
                      </div>
                    </Card>
                    <Card className="seasons-card">
                      <Image src="http://4.bp.blogspot.com/_stB8Rdvhe_c/TUMEz-ruIwI/AAAAAAAAAAo/crBshPCWsPE/s1600/leo-messi-20%255B1%255D.jpg" />
                      <Card.Content>
                        <Card.Header>2007/2008</Card.Header>
                      </Card.Content>
                      <div className="seasons-card-overlay">
                        <span className="number">10</span>
                        <span className="name">Messi</span>
                        <span className="year">07/08</span>
                      </div>
                    </Card>
                    <Card className="seasons-card">
                      <Image src="http://cdn23.us1.fansshare.com/photos/lionelmessi/face-668379736.jpg" />
                      <Card.Content>
                        <Card.Header>2008/2009</Card.Header>
                      </Card.Content>
                      <div className="seasons-card-overlay">
                        <span className="number">10</span>
                        <span className="name">Messi</span>
                        <span className="year">08/09</span>
                      </div>
                    </Card>
                    <Card className="seasons-card">
                      <Image
                        size="small"
                        src="http://4.bp.blogspot.com/-WLU9wazmHo8/T2nKt7WJtlI/AAAAAAAABFk/1XEz4RsMFHw/s1600/messi2.jpg"
                      />
                      <Card.Content>
                        <Card.Header>2009/2010</Card.Header>
                      </Card.Content>
                      <div className="seasons-card-overlay">
                        <span className="number">10</span>
                        <span className="name">Messi</span>
                        <span className="year">09/10</span>
                      </div>
                    </Card>
                    <Card className="seasons-card">
                      <Image src="http://3.bp.blogspot.com/-26CUMGhLqq4/T0xdnioLFcI/AAAAAAAAAJk/c814tyNYh3Y/s1600/MESSI.jpg" />
                      <Card.Content>
                        <Card.Header>2010/2011</Card.Header>
                      </Card.Content>
                      <div className="seasons-card-overlay">
                        <span className="number">10</span>
                        <span className="name">Messi</span>
                        <span className="year">10/11</span>
                      </div>
                    </Card>
                    <Card className="seasons-card">
                      <Image src="https://www.centrocampista.com/wp-content/uploads/2011/07/95803.jpg" />
                      <Card.Content>
                        <Card.Header>2011/2012</Card.Header>
                      </Card.Content>
                      <div className="seasons-card-overlay">
                        <span className="number">10</span>
                        <span className="name">Messi</span>
                        <span className="year">11/12</span>
                      </div>
                    </Card>
                    <Card className="seasons-card">
                      <Image src="https://i.pinimg.com/236x/85/1c/06/851c06c393f320792e6330dfb01d4bf8--lionel-messi.jpg" />
                      <Card.Content>
                        <Card.Header>2012/2013</Card.Header>
                      </Card.Content>
                      <div className="seasons-card-overlay">
                        <span className="number">10</span>
                        <span className="name">Messi</span>
                        <span className="year">12/13</span>
                      </div>
                    </Card>
                    <Card className="seasons-card">
                      <Image src="https://i.pinimg.com/236x/85/1c/06/851c06c393f320792e6330dfb01d4bf8--lionel-messi.jpg" />
                      <Card.Content>
                        <Card.Header>2013/2014</Card.Header>
                      </Card.Content>
                      <div className="seasons-card-overlay">
                        <span className="number">10</span>
                        <span className="name">Messi</span>
                        <span className="year">13/14</span>
                      </div>
                    </Card>
                    <Card className="seasons-card">
                      <Image src="https://drive.google.com/open?id=18ZBUvjF3gQrWz1htuljWVHBW3LAMjvi8" />
                      <Card.Content>
                        <Card.Header>2014/2014</Card.Header>
                      </Card.Content>
                      <div className="seasons-card-overlay">
                        <span className="number">10</span>
                        <span className="name">Messi</span>
                        <span className="year">14/15</span>
                      </div>
                    </Card>
                    <Card className="seasons-card">
                      <Image src="https://lh3.googleusercontent.com/-MzSmwHaoAnU/Vcore42VwkI/AAAAAAAAA2k/AVJfrOmpcsE/w530-h596-n-rw/Leo%2BMessi%2Bofficial%2Bphoto%2Bfor%2B201516.png" />
                      <Card.Content>
                        <Card.Header>2015/2016</Card.Header>
                      </Card.Content>
                      <div className="seasons-card-overlay">
                        <span className="number">10</span>
                        <span className="name">Messi</span>
                        <span className="year">15/16</span>
                      </div>
                    </Card>
                    <Card className="seasons-card">
                      <Image src="https://i.pinimg.com/736x/c7/3d/64/c73d64ebc3ea7ec4a46938eb149c4316--messi--lionel-messi.jpg" />
                      <Card.Content>
                        <Card.Header>2016/2017</Card.Header>
                      </Card.Content>
                      <div className="seasons-card-overlay">
                        <span className="number">10</span>
                        <span className="name">Messi</span>
                        <span className="year">16/17</span>
                      </div>
                    </Card>
                    <Card className="seasons-card">
                      <Image src="https://sortitoutsi.net/uploads/images/W6Fjsv63CAEimRVRmh2FvK9bvLx69RGJ.jpg" />
                      <Card.Content>
                        <Card.Header>2017/2018</Card.Header>
                      </Card.Content>
                      <div className="seasons-card-overlay">
                        <span className="number">10</span>
                        <span className="name">Messi</span>
                        <span className="year">17/18</span>
                      </div>
                    </Card>
                  </Slider>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
        <SeasonsDetails />
        <Footer />
      </div>
    );
  }
}

export default Seasons;
