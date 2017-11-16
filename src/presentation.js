// Import React
import React from "react";
import { Formik } from "formik";

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
  Code,
  ComponentPlayground
} from "spectacle";
import preloader from "spectacle/lib/utils/preloader";
import CodeSlide from "spectacle-code-slide";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import { formikExample } from "./code/examples";

// Require CSS
require("normalize.css");
const shiaLabeoufMagicGif = require("./img/magic.gif");

preloader({
  shiaLabeoufMagicGif
});

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
        <Slide
          transition={["zoom"]}
          bgColor="primary"
          controlColor="tertiary"
          progressColor="tertiary"
        >
          <Heading size={6} textColor="tertiary" fit caps>
            Installation
          </Heading>
          <Code>$ yarn add formik yup</Code>
          <Text caps bold size={1} textColor="tertiary">
            or
          </Text>
          <Code>$ npm install --save formik yup</Code>
        </Slide>
        <Slide
          transition={["fade", "zoom"]}
          bgColor="secondary"
          textColor="primary"
          align="center flex-start"
        >
          <Heading size={6} textColor="primary" caps>
            Formik Example
          </Heading>
          <ComponentPlayground
            scope={{ Formik }}
            theme="dark"
            code={formikExample}
          />
        </Slide>
        <Slide
          transition={["fade", "zoom"]}
          bgColor="secondary"
          textColor="primary"
          align="center flex-start"
        >
          <CodeSlide
            transition={[]}
            lang="jsx"
            code={formikExample}
            ranges={[
              { loc: [0, 270], title: "Walking through some code" },
              { loc: [0, 1], title: "The Beginning" },
              { loc: [1, 2] },
              { loc: [1, 2], note: "Heres a note!" },
              { loc: [2, 3] },
              { loc: [4, 7], image: shiaLabeoufMagicGif },
              { loc: [8, 10] }
            ]}
          />
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
