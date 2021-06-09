import React from 'react';
import { Box, UnorderedList, ListItem, ModalBody } from '@chakra-ui/react';

const Robotics = () => {
  return (
    <Box mt={2}>
      <ModalBody>
        Entering college, I joined the Husky Robotics community, whose goal is
        to bring the unreachable a little closer, aligned with my own interests.
        In a journey to create a fully funvtional Mars Rover prototype, I
        learned the value of having a tight-knit community to ensure the success
        of the team, as individuals themselves strive to build on their
        experiences and failures. As a member of the community, I:
        <br />
        <br />
        <UnorderedList as="ul" px={10}>
          <ListItem>
            Created embedded systems framework, programming microprocessor
            boards to control parts such as the chassis, arms & legs
          </ListItem>
          <ListItem>
            Developed movement abilities such as forward & inverse kinematics by
            integrating computer vision
          </ListItem>
        </UnorderedList>
        <br />
        This experience helped me get more comfortable to explore computing to
        try and directly better design these systems. Although I faced a steep
        learning curve with a high time commitment, and continuous pressure, I
        could see myself <strong>deliberating</strong> constantly on the
        practicality and feasibility of my ideas rather than directly jumping
        into trying new things. I learned to work within a team and with the
        support of my team, we successfully built a Mars Rover prototype for the
        university rover challenge. t
      </ModalBody>
    </Box>
  );
};

export default Robotics;
