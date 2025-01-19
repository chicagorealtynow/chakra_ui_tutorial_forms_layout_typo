import React from 'react';
    import { Wrap, WrapItem, Box, Heading, Text } from '@chakra-ui/react';
    import BackButton from '../components/BackButton';

    function WrapPage() {
      return (
        <Box p={5}>
          <Heading mb={4}>Wrap Example</Heading>
          <Text mb={4}>
            The Wrap component is used to wrap elements to the next line when
            there is not enough space.
          </Text>
          <Wrap spacing={4}>
            <WrapItem>
              <Box bg="tomato" p={4} color="white">
                Item 1
              </Box>
            </WrapItem>
            <WrapItem>
              <Box bg="teal" p={4} color="white">
                Item 2
              </Box>
            </WrapItem>
            <WrapItem>
              <Box bg="blue.500" p={4} color="white">
                Item 3
              </Box>
            </WrapItem>
            <WrapItem>
              <Box bg="yellow.500" p={4} color="black">
                Item 4
              </Box>
            </WrapItem>
            <WrapItem>
              <Box bg="green.500" p={4} color="white">
                Item 5
              </Box>
            </WrapItem>
            <WrapItem>
              <Box bg="purple.500" p={4} color="white">
                Item 6
              </Box>
            </WrapItem>
          </Wrap>
          <BackButton />
        </Box>
      );
    }

    export default WrapPage;
