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
  dockervm: require("../assets/docker-vm-container.png"),
  container: require("../assets/container.png"),
  tcci: require("../assets/tcci.png"),
  demo: require("../assets/demo.gif"),
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
      <Deck controls={false} transition={["zoom", "slide"]} transitionDuration={500} theme={theme} contentWidth={2000} contentHeight={1000} progress="none">

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
          <div style={{ paddingLeft: "300px" }}>
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
                <ListItem textSize={56}>Demos and stuff</ListItem>
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
                <ListItem padding={"10px 0"} textSize={56}>Think of docker as a process. lightweight and fast</ListItem>
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
              <li></li>
            </ul>
          </Notes>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading margin={"0px auto 20px"} size={1} fill caps lineHeight={1} textColor="tertiary">
            Container?
          </Heading>
          <div style={{ width: '35%', float: 'left'}}>
            <Image src={images.container.replace("/", "")} margin="60px auto" height="400px" />
          </div>
          <div style={{ paddingLeft: "45px", width: '65%', float: 'right' }}>
            <List >
              <Appear>
                <ListItem padding={"10px 0"} textSize={56}>
                  is an instance of an image.
                </ListItem>
              </Appear>
              <Appear>
                <ListItem padding={"10px 0"} textSize={56}>
                  runs natively (on Linux, soon Windows) and shares the kernel.
                </ListItem>
              </Appear>
              <Appear>
                <ListItem padding={"10px 0"} textSize={56}>
                  are isolated from each other
                </ListItem>
              </Appear>
              <Appear>
                <ListItem padding={"10px 0"} textSize={56}>
                  bundle their own application, libraries, toolds and config 
                </ListItem>
              </Appear>
              <Appear>
                <ListItem padding={"10px 0"} textSize={56}>
                  can only communicate with each other through well-defined channels.
                </ListItem>
              </Appear>
            </List>
          </div>
          <Notes>
            <ul>
              <li></li>
            </ul>
          </Notes>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fill caps lineHeight={1} textColor="secondary">
            VM's Versus Containers
          </Heading>
          <Image margin="50px auto" src={images.dockervm.replace("/", "")} margin="0px auto 50px" height="700px" />
          <Notes>
            <ul>
              <li>A virtual machine (VM) runs a full-blown “guest” operating system with virtual access to host resources through a hypervisor</li>
            </ul>
          </Notes>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading margin={"0px auto 20px"} size={1} fill caps lineHeight={1} textColor="tertiary">
            Why Docker?
          </Heading>
          <div style={{ paddingLeft: "25px" }}>
            <List >
              <Appear>
                <ListItem padding={"10px 0"} textSize={40}>
                  Only need to know how to run a Container, not know the application and it's dependecies
                </ListItem>
              </Appear>
              <Appear>
                <ListItem padding={"10px 0"} textSize={40}>
                  Simplifies deployment and pushes dependecy issues on "install" to CI process or developers
                </ListItem>
              </Appear>
              <Appear>
                <ListItem padding={"10px 0"} textSize={40}>
                  Quickly and easily run applications/services that were difficult to install or setup.
                </ListItem>
              </Appear>
              <Appear>
                <ListItem padding={"10px 0"} textSize={40}>
                  Containers gives you instant application portability. (Cloud Native!)
                </ListItem>
              </Appear>
              <Appear>
                <ListItem padding={"10px 0"} textSize={40}>
                  Distributed in an effective, standardized, and repeatable way
                </ListItem>
              </Appear>
              <Appear>
                <ListItem padding={"10px 0"} textSize={40}>
                  Makes it possible to set up local development environments that are exactly like a live server!
                </ListItem>
              </Appear>
              <Appear>
                <ListItem padding={"10px 0"} textSize={40}>
                  Run the CI locally!
                </ListItem>
              </Appear>
            </List>
          </div>
          <Notes>
            <ul>
              <li>Running a container is the same regardless of whats in the the container</li>
              <li>Makes it possible to get far more apps running on the same old servers</li>
              <li>run multiple development environments from the same host with unique software, operating systems</li>
            </ul>
          </Notes>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fill lineHeight={1} textColor="secondary">
            My Teamcity Config
          </Heading>
          <Image margin="60px auto" src={images.tcci.replace("/", "")} margin="30px auto 50px" height="700px" />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="primary" caps>Reference Concepts</Heading>
          <Text textSize="66" textColor="primary" bold>
            <dl>
              <dt>images</dt>
              <dt>containers</dt>
              <dt>registaries</dt>
              <dt>volume</dt>
              <dt>---</dt>
              <dt>Docker Compose</dt>
              <dt>Docker Swarm</dt>
              <dt>Kubernetes</dt>
            </dl>
          </Text>
          <Notes>
            <ul>
              <li>Compose: group containers into on one "application".</li>
              <li>Swarm: group multiple docker engines into a single engine</li>
            </ul>
          </Notes>
        </Slide>


        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fill caps lineHeight={1} textColor="secondary">
            DEMO TIME!
          </Heading>
          <Image margin="50px auto" src={images.demo.replace("/", "")} margin="30px auto 50px" height="700px" />
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

