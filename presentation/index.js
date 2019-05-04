// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Notes,
  Image,
  Appear,
  CodePane
} from "spectacle";

import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("../assets/override.css");
require("../assets/atomdark.css");

const images = {
  son: require("../assets/sonof.png"),
  ctjs: require("../assets/ctjs.png"),
  cptmsug: require("../assets/ctmsug.jpg"),
  docker: require("../assets/docker_400x400.png"),
  dockervm: require("../assets/docker-vm-container.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
    primary: "Montserrat",
    secondary: "Helvetica"
  });

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck controls={false} transition={["zoom", "slide"]} transitionDuration={500} theme={theme} contentWidth={1800} contentHeight={1000} progress="none">

        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.cptmsug.replace("/", "")} margin="0px auto 10px" height="600px" />
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Docker & Dotnet Core 
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            CPTMSDUG - July 2019
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fill caps lineHeight={1} textColor="secondary">
            HELLO!
          </Heading>
          <Image margin="50px auto" src={images.son.replace("/", "")} margin="0px auto 50px" height="700px" />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading margin={"0px auto 20px"} size={2} fill caps lineHeight={1} textColor="tertiary">
            What are we going to talk about tonight?
          </Heading>
          <div style={{paddingLeft: "300px" }}>
            <List >
              <Appear>
                <ListItem textSize={56}>What is Docker?</ListItem>
              </Appear>
              <Appear>
                <ListItem textSize={56}>What is Container?</ListItem>
              </Appear> 
              <Appear> 
                <ListItem textSize={56}>dotnet core versus .NET Framework </ListItem>
              </Appear>  
              <Appear>  
                <ListItem textSize={56}>Why Docker?</ListItem>
              </Appear>  
              <Appear>
                <ListItem textSize={56}>Microservice DEMO</ListItem>
              </Appear>
              <Appear>
                <ListItem textSize={56}>Cool Stuff (Swagger, Ocelot, XUnit)</ListItem>
              </Appear>
            </List>
          </div>
          <Notes>
            <ul>
              <li> </li>
            </ul>
          </Notes>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading margin={"0px auto 20px"} size={1} fill caps lineHeight={1} textColor="tertiary">
            Docker?
          </Heading>
          <div style={{ width: '40%', float: 'left' }}>
            <Image margin="50px auto" src={images.docker.replace("/", "")} margin="0px auto 50px" height="500px" />
          </div>
          <div style={{ paddingLeft: "25px", width: '60%', float: 'right' }}>
            <List >
              <Appear>
                <ListItem padding={"10px 0"} textSize={56}>Docker is a computer program that performs operating-system-level virtualization.</ListItem>
              </Appear>
              <Appear>
                <ListItem padding={"10px 0"} textSize={56}>HUH?!</ListItem>
              </Appear>
              <Appear>
                <ListItem padding={"10px 0"} textSize={56}>Docker engine, converts images in containers by running them</ListItem>
              </Appear>
              <Appear>
                <ListItem padding={"10px 0"} textSize={56}>Images come from repositories. </ListItem>
              </Appear>
            </List>
          </div>
          <Notes>
            <ul>
              <li>original author of Turbo Pascal </li>
            </ul>
          </Notes>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fill caps lineHeight={1} textColor="secondary">
            VM's Versus Containers
          </Heading>
          <Image margin="50px auto" src={images.dockervm.replace("/", "")} margin="0px auto 50px" height="700px" />
        </Slide>
        
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fill lineHeight={1} textColor="secondary">
            THANKS
          </Heading>
          <Text textSize="70" margin="20px 0 0" textColor="tertiary" bold fill>
            Complaints to @WrathZA
          </Text>
          <Text textSize="50" margin="20px 0 0" textColor="secondary" bold fill caps>
            
          </Text>
          <Image src={images.ctjs.replace("/", "")} margin="50px auto" height="300px" />
          <Text textSize="70" margin="20px 0 0" textColor="secondary" bold fill> 
            Next Meetup: *** Date here ***
          </Text>
        </Slide>

      </Deck>
    );
  }
}

