import React from "react";
import { Box, Grid } from "@chakra-ui/react";

import Header from "../Components/Header";
import Card from "../Components/Card";

import ta from "../images/teaching.svg";
import ey from "../images/ml.svg";
import robot from "../images/r.svg";
import data from "../images/data.svg";

const Experience = (props) => {
  return (
    <Box p={["5", "10", "20"]} id="experience" {...props}>
      <Header description="where i've worked" title="Work Experience" />
      <Grid
        templateRows={{ sm: "repeat(1, auto)", lg: "repeat(2, auto)" }}
        templateColumns={{ sm: "repeat(1, auto)", lg: "repeat(2, auto)" }}
        gap={[10, null, 20]}
        mt="10"
        mb="10"
        maxW="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Card
          name="CSE 14x Head Teaching Assistant"
          start="2020"
          end="Present"
          description="University of Washington"
          image={ta}
          size={["3xl", null, "5xl"]}
          height={500}
          descriptionSize={["md", null, "xl"]}
        />
        <Card
          name="Machine Learning Intern"
          start="2019"
          end={null}
          description="Ernst & Young"
          image={ey}
          size={["3xl", null, "5xl"]}
          height={700}
          descriptionSize={["md", null, "xl"]}
        />

        <Card
          name="Embedded Systems Programmer"
          start="2018"
          end="2019"
          description="Husky Robotics"
          image={robot}
          size={["3xl", null, "5xl"]}
          height={700}
          descriptionSize={["md", null, "xl"]}
        />
        <Card
          name="Data Analytics Intern"
          start="2018"
          end={null}
          description="Mu Sigma"
          image={data}
          size={["3xl", null, "5xl"]}
          height={700}
          descriptionSize={["md", null, "xl"]}
        />
      </Grid>
    </Box>
  );
};

export default Experience;
