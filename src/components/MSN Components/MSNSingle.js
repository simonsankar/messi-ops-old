import React from 'react';

import { Grid, Image, Responsive, List, Rating } from 'semantic-ui-react';
import LM from '../../images/Messi.png';
import LS from '../../images/Suarez.png';
import NJ from '../../images/Neymar.png';

const desc = [
  "Being the superior player he is, Messi moved back out to the RW to facilitate Suarez in the 2014/2015 season. It was because of this the MSN worked so well as a trio as it allowed each of the prones to attack with exteme fluidity where Messi was the gel. His ability to drop deeper and play wide without sacrificing goals is unheard of in the modern game. He was the inital link that helped settled Suarez into the Barca system, along with dictating play to thread Neymar an co in attack. There's simply too much to speak of when it comes to Messi and by extension his role in the MSN ",
  'Suarez intially, for a brief period found life difficult at the start of his maiden campaign at Barca where he was out on the right side as the current CF was the god king. Luis Enrique moved Messi out on the right and played Suarez through the middle and the rest was history. His elite skillset as a CF, with dribbling, passing,vision etc made it the perfect fit with the Barca system. Not to mention having the greatest player in the world be your best friend. He is the only player to have 2 let alone 1 European Golden Boots within this entire Messi/Ronaldo era [2014(31),2016(40)]. The best striker in the world since 2013.',
  "That extra bit of flair you need for the recipe of destruction. Neymar blossomed having to play with the best player in the world and the best striker in the world. Technically gifted, deadly skill, with many spells to conjure that would unlock any defence. Neymar became easily the 3rd best player in the world with a comfortable margin. Though his stats are as inflated as the other two, his consistency throughout the attack was key in all of Barca's success within those 3 seasons."
];

const MSNSingle = ({ player }) => {
  return (
    <div className="msn-single">
      <Grid container stackable>
        <Grid.Row divided>
          <Responsive
            minWidth={Responsive.onlyComputer.minWidth}
            as={Grid.Column}
            computer={3}
            verticalAlign="middle"
          >
            <Image
              className="msn-single-img"
              size="small"
              src={player === 1 ? LM : player === 2 ? LS : NJ}
            />
          </Responsive>
          <Grid.Column
            computer={7}
            tablet={10}
            mobile={16}
            className="msn-single-details"
          >
            <h3 className="msn-single-title">
              {player === 1
                ? 'Lionel Messi'
                : player === 2
                ? 'Luis Suarez'
                : 'Neymar Jr.'}
              <small>
                {player === 1 ? ' 10' : player === 2 ? ' 9' : ' 11'}
              </small>
            </h3>
            <p className="msn-single-desc">
              {player === 1 ? desc[0] : player === 2 ? desc[1] : desc[2]}
            </p>
          </Grid.Column>
          <Grid.Column
            computer={6}
            tablet={6}
            mobile={16}
            verticalAlign="middle"
            textAlign="center"
          >
            {player === 1 ? (
              <List
                horizontal
                className="hero-list"
                animated
                verticalAlign="middle"
                inverted
                size="large"
              >
                <List.Item>
                  <List.Content>
                    <List.Header>Appearances</List.Header>
                    158
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header>Goals</List.Header>153
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header>Assists</List.Header>66
                  </List.Content>
                </List.Item>

                <List.Item>
                  <List.Content>
                    <List.Header>Positions</List.Header>
                    RW/CF/CAM
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header>Skills</List.Header>
                    <Rating
                      className="hero-skills"
                      defaultRating={5}
                      maxRating={5}
                      disabled
                    />{' '}
                    5/5
                  </List.Content>
                </List.Item>
              </List>
            ) : player === 2 ? (
              <List
                horizontal
                className="hero-list"
                animated
                verticalAlign="middle"
                inverted
                size="medium"
              >
                <List.Item>
                  <List.Content>
                    <List.Header>Appearances</List.Header>
                    149
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header>Goals</List.Header>121
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header>Assists</List.Header>59
                  </List.Content>
                </List.Item>

                <List.Item>
                  <List.Content>
                    <List.Header>Positions</List.Header>
                    RW/CF/ST
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header>Skills</List.Header>
                    <Rating
                      className="hero-skills"
                      defaultRating={5}
                      maxRating={5}
                      disabled
                    />{' '}
                    5/5
                  </List.Content>
                </List.Item>
              </List>
            ) : (
              <List
                horizontal
                className="hero-list"
                animated
                verticalAlign="middle"
                inverted
                size="medium"
              >
                <List.Item>
                  <List.Content>
                    <List.Header>Appearances</List.Header>
                    151
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header>Goals</List.Header>90
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header>Assists</List.Header>46
                  </List.Content>
                </List.Item>

                <List.Item>
                  <List.Content>
                    <List.Header>Positions</List.Header>
                    LW/RW
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header>Skills</List.Header>
                    <Rating
                      className="hero-skills"
                      defaultRating={5}
                      maxRating={5}
                      disabled
                    />{' '}
                    5/5
                  </List.Content>
                </List.Item>
              </List>
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};
export default MSNSingle;
