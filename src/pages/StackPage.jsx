import React from 'react';
    import { Stack, Box, Heading, Text } from '@chakra-ui/react';
    import BackButton from '../components/BackButton';

    function StackPage() {
      return (
        <Box p={5}>
          <Heading mb={4}>Stack Example</Heading>
          <Text mb={4}>
            The Stack component is used to stack elements on top of each other.
          </Text>
          <Stack spacing={4}>
            <Box bg="tomato" p={4} color="white">
              Item 1
            </Box>
            <Box bg="teal" p={4} color="white">
              Item 2
            </Box>
            <Box bg="blue.500" p={4} color="white">
              Item 3
            </Box>
          </Stack>
          <BackButton />
        </Box>
      );
    }

    export default StackPage;
