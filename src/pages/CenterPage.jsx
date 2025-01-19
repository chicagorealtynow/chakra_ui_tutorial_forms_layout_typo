import React from 'react';
    import { Center, Box, Heading, Text } from '@chakra-ui/react';
    import BackButton from '../components/BackButton';

    function CenterPage() {
      return (
        <Box p={5}>
          <Heading mb={4}>Center Example</Heading>
          <Text mb={4}>
            The Center component is used to center its children both horizontally
            and vertically.
          </Text>
          <Center bg="teal" h="100px" color="white">
            This is centered
          </Center>
          <BackButton />
        </Box>
      );
    }

    export default CenterPage;
