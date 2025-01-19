import React from 'react';
    import { Button, Box, Heading, Text } from '@chakra-ui/react';
    import BackButton from '../components/BackButton';

    function ButtonPage() {
      return (
        <Box p={5}>
          <Heading mb={4}>Button Example</Heading>
          <Text mb={4}>
            This is a basic button example. You can customize the button with
            different colors, sizes, and variants.
          </Text>
          <Button colorScheme="blue">Click Me</Button>
          <BackButton />
        </Box>
      );
    }

    export default ButtonPage;
