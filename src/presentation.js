// Import React
import React from "react";
import { Formik } from "formik";
import yup from "yup";

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
  ComponentPlayground,
  Link
} from "spectacle";
import preloader from "spectacle/lib/utils/preloader";
import CodeSlide from "spectacle-code-slide";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import { formikExample, shortExample } from "./code/examples";

// Require CSS
require("normalize.css");

const images = {
  formik: require("./img/formik.png"),
  magic: require("./img/magic.gif"),
  doit: require("./img/doit.gif"),
  code: require("./img/code.jpg")
};

preloader(images);

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
          <Image src={images.formik} />
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
          textColor="primary"
          bgImage={images.code}
          bgDarken={0.75}
        >
          <Heading size={6} textColor="primary" caps>
            Formik Example
          </Heading>
          <ComponentPlayground
            scope={{ Formik, yup }}
            theme="dark"
            code={formikExample}
          />
        </Slide>
        <CodeSlide
          transition={[]}
          bgColor="#122b45"
          textColor="primary"
          lang="jsx"
          code={shortExample}
          ranges={[
            { loc: [0, 59], title: "Let's talk code" },
            { loc: [0, 1], note: "Import Formik" },
            { loc: [2, 3] },
            { loc: [3, 8], note: "We define our 'model'" },
            { loc: [8, 15], note: "The validation schema" },
            { loc: [8, 15], image: images.magic },
            { loc: [15, 18], note: "The submit callback" },
            {
              loc: [18, 27],
              note: (
                <Link
                  href="https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce"
                  target="_blank"
                >
                  Michael Jackson - Render props
                </Link>
              )
            },
            { loc: [27, 28] },
            { loc: [28, 36] },
            { loc: [31, 33], note: "The Formik handlers" },
            { loc: [52, 56], note: "The submit button" },
            { loc: [0, 59], image: images.doit },
            { loc: [0, 59], title: "All done!" }
          ]}
        />
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
