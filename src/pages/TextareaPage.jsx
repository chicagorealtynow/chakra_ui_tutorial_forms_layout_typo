import React from 'react';
    import { Textarea, Box, Heading, Text } from '@chakra-ui/react';
    import BackButton from '../components/BackButton';

    function TextareaPage() {
      return (
        <Box p={5}>
          <Heading mb={4}>Textarea Example</Heading>
          <Text mb={4}>
            This is a textarea example. You can type multiple lines of text.
          </Text>
          <Textarea placeholder="Enter text" />
          <BackButton />
        </Box>
      );
    }

    export default TextareaPage;
