import React from "react";
import { Grid, List } from "semantic-ui-react";

const Footer = () => {
  return (
    <div className="footer">
      <Grid container className="footer-container" stackable>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <h4 className="footer-title">Messi Ops 2019&copy;</h4>
            <p>
              Messi Ops was built with Lays Sour Cream and Onion. Reference site
              about Lorem Ipsum, giving information on its origins, as well as a
              random Lipsum generator
            </p>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <h4 className="footer-title">Links</h4>
            <List>
              <List.Item>
                <List.Icon name="github alternate" />
                <List.Content>
                  <a
                    className="footer-link"
                    href="http://github.com/simonsankar/messi-ops"
                    target="_blank"
                  >
                    Repository
                  </a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="github" />
                <List.Content>
                  <a
                    className="footer-link"
                    href="http://github.com/simonsankar"
                    target="_blank"
                  >
                    Github
                  </a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="mail" />
                <List.Content>
                  <a
                    className="footer-link"
                    href="mailto:sjsankar10@gmail.com"
                    target="_blank"
                  >
                    Email
                  </a>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <h4 className="footer-title">Resources</h4>
            <List>
              <List.Item>
                <List.Icon name="chart bar" />
                <List.Content>WhoScored?</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="futbol outline" />
                <List.Content>MessivsRonaldo.com</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="game" />
                <List.Content>La Noire</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="youtube" />
                <List.Content>MagicalMessi</List.Content>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <h4 className="footer-title">Built using</h4>
            <List>
              <List.Item>
                <List.Icon name="react" />
                <List.Content>
                  <a
                    className="footer-link"
                    href="https://reactjs.org/"
                    target="_blank"
                  >
                    ReactJS
                  </a>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Icon name="stripe s" />
                <List.Content>
                  <a
                    className="footer-link"
                    href="https://react.semantic-ui.com/"
                    target="_blank"
                  >
                    SemanticUI
                  </a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="database" />
                <List.Content>
                  <a
                    className="footer-link"
                    href="https://firebase.google.com/"
                    target="_blank"
                  >
                    Firebase
                  </a>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Footer;
