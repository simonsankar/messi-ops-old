import React from "react";

import { Grid, Image, Responsive, List } from "semantic-ui-react";
import HomeCareer from "../Home Components/HomeCareer";
import LM from "../../images/Messi.png";
import LS from "../../images/Suarez.png";
import NJ from "../../images/Neymar.png";

const MSNSingle = ({ img }) => {
  return (
    <div className="msn-single">
      <Grid container>
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
              src={img === 1 ? LM : img === 2 ? LS : NJ}
            />
          </Responsive>
          <Grid.Column
            computer={7}
            tablet={12}
            mobile={16}
            className="msn-single-details"
          >
            <h3 className="msn-single-title">
              {img === 1
                ? "Lionel Messi"
                : img === 2
                ? "Luis Suarez"
                : "Neymar Jr."}
              <small>{img === 1 ? " 10" : img === 2 ? " 9" : " 11"}</small>
            </h3>
            <p className="msn-single-desc">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            </p>
          </Grid.Column>
          <Grid.Column
            computer={6}
            tablet={4}
            mobile={16}
            verticalAlign="middle"
          >
            <HomeCareer
              stats={{
                title: "Contribution",
                apps: 105,
                goals: 106,
                assists: 43
              }}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};
export default MSNSingle;
