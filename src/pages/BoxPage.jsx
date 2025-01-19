import React from 'react';
    import { Box, Heading, Text } from '@chakra-ui/react';
    import BackButton from '../components/BackButton';

    function BoxPage() {
      return (
        <Box p={5}>
          <Heading mb={4}>Box Example</Heading>
          <Text mb={4}>
            The Box component is the most fundamental layout component in Chakra UI.
            It's a versatile container that you can use to build any layout.
          </Text>
          <Box bg="tomato" w="100px" p={4} color="white">
            This is a Box
          </Box>
          <BackButton />
        </Box>
      );
    }

    export default BoxPage;
