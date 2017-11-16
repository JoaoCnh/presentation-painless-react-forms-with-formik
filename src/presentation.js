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
  Image,
  Appear,
  Code
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={require("./img/formik.png")} />
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Painless React Forms with Formik
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
            João Cunha
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Formik helps with
          </Heading>
          <List ordered>
            <Appear>
              <ListItem>Transforming props to form state</ListItem>
            </Appear>
            <Appear>
              <ListItem>Validation and error messages</ListItem>
            </Appear>
            <Appear>
              <ListItem>Handling form submission</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" fit caps>
            Installation
          </Heading>
          <Code>$ yarn add formik yup</Code>
          <Text caps bold size={1} textColor="tertiary">
            or
          </Text>
          <Code>$ npm install --save formik yup</Code>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Formik Example
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
