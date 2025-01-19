import React from 'react';
    import { Flex, Box, Heading, Text } from '@chakra-ui/react';
    import BackButton from '../components/BackButton';

    function FlexPage() {
      return (
        <Box p={5}>
          <Heading mb={4}>Flex Example</Heading>
          <Text mb={4}>
            The Flex component is used to create flexible layouts.
          </Text>
          <Flex bg="gray.100" p={4} align="center" justify="space-between">
            <Box>Item 1</Box>
            <Box>Item 2</Box>
            <Box>Item 3</Box>
          </Flex>
          <BackButton />
        </Box>
      );
    }

    export default FlexPage;
