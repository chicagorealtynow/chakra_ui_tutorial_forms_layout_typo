import React from 'react';
    import { SimpleGrid, Box, Heading, Text } from '@chakra-ui/react';
    import BackButton from '../components/BackButton';

    function SimpleGridPage() {
      return (
        <Box p={5}>
          <Heading mb={4}>Simple Grid Example</Heading>
          <Text mb={4}>
            The SimpleGrid component is used to create a responsive grid layout.
          </Text>
          <SimpleGrid columns={3} spacing={4}>
            <Box bg="tomato" p={4} color="white">
              Item 1
            </Box>
            <Box bg="teal" p={4} color="white">
              Item 2
            </Box>
            <Box bg="blue.500" p={4} color="white">
              Item 3
            </Box>
            <Box bg="yellow.500" p={4} color="black">
              Item 4
            </Box>
            <Box bg="green.500" p={4} color="white">
              Item 5
            </Box>
            <Box bg="purple.500" p={4} color="white">
              Item 6
            </Box>
          </SimpleGrid>
          <BackButton />
        </Box>
      );
    }

    export default SimpleGridPage;
