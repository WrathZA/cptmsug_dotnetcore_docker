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

