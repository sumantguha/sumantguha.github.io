import React from "react";
import { Box, SimpleGrid, Grid, GridItem } from "@chakra-ui/react";
import tt from "../images/tt.svg";
import webapps from "../images/webapps.svg";
import gradeit from "../images/gradeit.svg";
import maps from "../images/maps.svg";
import insurance from "../images/insurance.svg";
import message from "../images/message.svg";
import portfolio1 from "../images/portfolio1.svg";
import portfolio2 from "../images/portfolio2.svg";

import Header from "../Components/Header";
import Card from "../Components/Card";

const Projects = (props) => {
  return (
    <Box p={["5", "10", "20"]} id="projects" {...props}>
      <Header description="case studies" title="Projects" />
      <Grid
        templateRows={{ sm: "repeat(1, auto)", lg: "repeat(3, auto)" }}
        templateColumns={{ sm: "repeat(1, auto)", lg: "repeat(3, auto)" }}
        gap={10}
        mt="10"
        mb="10"
      >
        <GridItem>
          <Card
            name="Code.it"
            description="HighSchool Education Platform"
            start="2020"
            end="Present"
            image={tt}
            size="2xl"
            height={500}
            descriptionSize="md"
            newPost={true}
          />
        </GridItem>

        <GridItem>
          <Card
            name="Nifty Web Apps"
            description="Build web apps for any programming assignment"
            start="2020"
            end="Present"
            image={webapps}
            size="2xl"
            height={500}
            descriptionSize="md"
            newPost={true}
          />
        </GridItem>

        <GridItem>
          <Card
            name="Java Code Quality Linter"
            description="Web/Text Checker"
            start="2020"
            end="Present"
            image={insurance}
            size="2xl"
            height={500}
            descriptionSize="md"
            newPost={true}
          />
        </GridItem>

        <GridItem>
          <Card
            name="Course Data Migration"
            description="Writing jUnit tests"
            start="2020"
            end="Present"
            image={gradeit}
            size="2xl"
            height={500}
            descriptionSize="md"
          />
        </GridItem>

        <GridItem>
          <Card
            name="Husky Maps"
            description="Interactive Map Viz"
            start="2019"
            end="2020"
            image={maps}
            size="2xl"
            height={500}
            descriptionSize="md"
          />
        </GridItem>

        <GridItem>
          <Card
            name="Talkly"
            description="Reactive Message Platform"
            start="2020"
            end="Present"
            image={message}
            size="2xl"
            height={500}
            descriptionSize="md"
          />
        </GridItem>

        <GridItem>
          <Card
            name="Portfolio version 2"
            description="My old portfolio website"
            start="2020"
            end="Present"
            image={portfolio1}
            size="2xl"
            height={500}
            descriptionSize="md"
          />
        </GridItem>

        <GridItem>
          <Card
            name="Portfolio version 1"
            description="My old portfolio website"
            start="2019"
            end="2020"
            image={portfolio2}
            size="2xl"
            height={500}
            descriptionSize="md"
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Projects;
