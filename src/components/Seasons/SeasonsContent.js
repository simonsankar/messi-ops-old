import React from "react";
import { Grid, Card, Image } from "semantic-ui-react";
import Slider from "react-slick";

// Images
import season0405 from "../../images/seasons/rsz_04-05.png";
import season0506 from "../../images/seasons/rsz_05-06.png";
import season0607 from "../../images/seasons/rsz_06-07.png";
import season0708 from "../../images/seasons/rsz_07-08.png";
import season0809 from "../../images/seasons/rsz_08-09.png";
import season0910 from "../../images/seasons/rsz_09-10.png";
import season1011 from "../../images/seasons/rsz_10-11.png";
import season1112 from "../../images/seasons/rsz_11-12.png";
import season1213 from "../../images/seasons/rsz_12-13.png";
import season1314 from "../../images/seasons/rsz_13-14.png";
import season1415 from "../../images/seasons/rsz_14-15.png";
import season1516 from "../../images/seasons/rsz_15-16.png";
import season1617 from "../../images/seasons/rsz_16-17.png";
import season1718 from "../../images/seasons/rsz_17-18.png";
import season1819 from "../../images/seasons/rsz_18-19.png";
import season1920 from "../../images/seasons/rsz_19-20.png";

const SeasonsContent = () => {
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
          slidesToShow: 4,
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
    <Grid className="seasons__content" container padded="vertically">
      <Grid.Row>
        <Grid.Column width={16}>
          <Slider {...settings}>
            <Card className="seasons__card">
              <Image className="seasons__card__img" src={season0405} />
              <Card.Content className="seasons__card__content">
                <Card.Header>2004/2005</Card.Header>
              </Card.Content>
              <div className="seasons__card__overlay">
                <span className="seasons__card__overlay__number">30</span>
                <span className="seasons__card__overlay__name">Messi</span>
                <span className="seasons__card__overlay__year">04/05</span>
              </div>
            </Card>
            <Card className="seasons__card">
              <Image className="seasons__card__img" src={season0506} />
              <Card.Content className="seasons__card__content">
                <Card.Header>2005/2006</Card.Header>
              </Card.Content>
              <div className="seasons__card__overlay">
                <span className="seasons__card__overlay__number">30</span>
                <span className="seasons__card__overlay__name">Messi</span>
                <span className="seasons__card__overlay__year">05/06</span>
              </div>
            </Card>
            <Card className="seasons__card">
              <Image className="seasons__card__img" src={season0607} />
              <Card.Content className="seasons__card__content">
                <Card.Header>2006/2007</Card.Header>
              </Card.Content>
              <div className="seasons__card__overlay">
                <span className="seasons__card__overlay__number">19</span>
                <span className="seasons__card__overlay__name">Messi</span>
                <span className="seasons__card__overlay__year">06/07</span>
              </div>
            </Card>
            <Card className="seasons__card">
              <Image className="seasons__card__img" src={season0708} />
              <Card.Content className="seasons__card__content">
                <Card.Header>2007/2008</Card.Header>
              </Card.Content>
              <div className="seasons__card__overlay">
                <span className="seasons__card__overlay__number">19</span>
                <span className="seasons__card__overlay__name">Messi</span>
                <span className="seasons__card__overlay__year">07/08</span>
              </div>
            </Card>
            <Card className="seasons__card">
              <Image className="seasons__card__img" src={season0809} />
              <Card.Content className="seasons__card__content">
                <Card.Header>2008/2009</Card.Header>
              </Card.Content>
              <div className="seasons__card__overlay">
                <span className="seasons__card__overlay__number">10</span>
                <span className="seasons__card__overlay__name">Messi</span>
                <span className="seasons__card__overlay__year">08/09</span>
              </div>
            </Card>
            <Card className="seasons__card">
              <Image className="seasons__card__img" src={season0910} />
              <Card.Content className="seasons__card__content">
                <Card.Header>2009/2010</Card.Header>
              </Card.Content>
              <div className="seasons__card__overlay">
                <span className="seasons__card__overlay__number">10</span>
                <span className="seasons__card__overlay__name">Messi</span>
                <span className="seasons__card__overlay__year">09/10</span>
              </div>
            </Card>
            <Card className="seasons__card">
              <Image className="seasons__card__img" src={season1011} />
              <Card.Content className="seasons__card__content">
                <Card.Header>2010/2011</Card.Header>
              </Card.Content>
              <div className="seasons__card__overlay">
                <span className="seasons__card__overlay__number">10</span>
                <span className="seasons__card__overlay__name">Messi</span>
                <span className="seasons__card__overlay__year">10/11</span>
              </div>
            </Card>
            <Card className="seasons__card">
              <Image className="seasons__card__img" src={season1112} />
              <Card.Content className="seasons__card__content">
                <Card.Header>2011/2012</Card.Header>
              </Card.Content>
              <div className="seasons__card__overlay">
                <span className="seasons__card__overlay__number">10</span>
                <span className="seasons__card__overlay__name">Messi</span>
                <span className="seasons__card__overlay__year">11/12</span>
              </div>
            </Card>
            <Card className="seasons__card">
              <Image className="seasons__card__img" src={season1213} />
              <Card.Content className="seasons__card__content">
                <Card.Header>2012/2013</Card.Header>
              </Card.Content>
              <div className="seasons__card__overlay">
                <span className="seasons__card__overlay__number">10</span>
                <span className="seasons__card__overlay__name">Messi</span>
                <span className="seasons__card__overlay__year">12/13</span>
              </div>
            </Card>
            <Card className="seasons__card">
              <Image className="seasons__card__img" src={season1314} />
              <Card.Content className="seasons__card__content">
                <Card.Header>2013/2014</Card.Header>
              </Card.Content>
              <div className="seasons__card__overlay">
                <span className="seasons__card__overlay__number">10</span>
                <span className="seasons__card__overlay__name">Messi</span>
                <span className="seasons__card__overlay__year">13/14</span>
              </div>
            </Card>
            <Card className="seasons__card">
              <Image className="seasons__card__img" src={season1415} />
              <Card.Content className="seasons__card__content">
                <Card.Header>2014/2014</Card.Header>
              </Card.Content>
              <div className="seasons__card__overlay">
                <span className="seasons__card__overlay__number">10</span>
                <span className="seasons__card__overlay__name">Messi</span>
                <span className="seasons__card__overlay__year">14/15</span>
              </div>
            </Card>
            <Card className="seasons__card">
              <Image className="seasons__card__img" src={season1516} />
              <Card.Content className="seasons__card__content">
                <Card.Header>2015/2016</Card.Header>
              </Card.Content>
              <div className="seasons__card__overlay">
                <span className="seasons__card__overlay__number">10</span>
                <span className="seasons__card__overlay__name">Messi</span>
                <span className="seasons__card__overlay__year">15/16</span>
              </div>
            </Card>
            <Card className="seasons__card">
              <Image className="seasons__card__img" src={season1617} />
              <Card.Content className="seasons__card__content">
                <Card.Header>2016/2017</Card.Header>
              </Card.Content>
              <div className="seasons__card__overlay">
                <span className="seasons__card__overlay__number">10</span>
                <span className="seasons__card__overlay__name">Messi</span>
                <span className="seasons__card__overlay__year">16/17</span>
              </div>
            </Card>
            <Card className="seasons__card">
              <Image className="seasons__card__img" src={season1718} />
              <Card.Content className="seasons__card__content">
                <Card.Header>2017/2018</Card.Header>
              </Card.Content>
              <div className="seasons__card__overlay">
                <span className="seasons__card__overlay__number">10</span>
                <span className="seasons__card__overlay__name">Messi</span>
                <span className="seasons__card__overlay__year">17/18</span>
              </div>
            </Card>
            <Card className="seasons__card">
              <Image className="seasons__card__img" src={season1819} />
              <Card.Content className="seasons__card__content">
                <Card.Header>2018/2019</Card.Header>
              </Card.Content>
              <div className="seasons__card__overlay">
                <span className="seasons__card__overlay__number">10</span>
                <span className="seasons__card__overlay__name">Messi</span>
                <span className="seasons__card__overlay__year">18/19</span>
              </div>
            </Card>
            <Card className="seasons__card">
              <Image className="seasons__card__img" src={season1920} />
              <Card.Content className="seasons__card__content">
                <Card.Header>2019/2020</Card.Header>
              </Card.Content>
              <div className="seasons__card__overlay">
                <span className="seasons__card__overlay__number">10</span>
                <span className="seasons__card__overlay__name">Messi</span>
                <span className="seasons__card__overlay__year">19/20</span>
              </div>
            </Card>
          </Slider>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default SeasonsContent;
