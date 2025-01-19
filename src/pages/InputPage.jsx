import React from 'react';
    import { Input, Box, Heading, Text } from '@chakra-ui/react';
    import BackButton from '../components/BackButton';

    function InputPage() {
      return (
        <Box p={5}>
          <Heading mb={4}>Input Example</Heading>
          <Text mb={4}>
            This is a basic input field example. You can type text into it.
          </Text>
          <Input placeholder="Enter text" />
          <BackButton />
        </Box>
      );
    }

    export default InputPage;
