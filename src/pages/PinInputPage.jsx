import React from 'react';
    import { PinInput, PinInputField, Box, Heading, Text } from '@chakra-ui/react';
    import BackButton from '../components/BackButton';

    function PinInputPage() {
      return (
        <Box p={5}>
          <Heading mb={4}>Pin Input Example</Heading>
          <Text mb={4}>
            This is a pin input example. It's used for entering a pin code.
          </Text>
          <PinInput>
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
          <BackButton />
        </Box>
      );
    }

    export default PinInputPage;
