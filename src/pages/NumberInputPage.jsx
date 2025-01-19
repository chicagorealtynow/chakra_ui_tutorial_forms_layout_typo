import React from 'react';
    import { NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Box, Heading, Text } from '@chakra-ui/react';
    import BackButton from '../components/BackButton';

    function NumberInputPage() {
      return (
        <Box p={5}>
          <Heading mb={4}>Number Input Example</Heading>
          <Text mb={4}>
            This is a number input example. You can use the stepper or type a
            number.
          </Text>
          <NumberInput defaultValue={1} min={0} max={10}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <BackButton />
        </Box>
      );
    }

    export default NumberInputPage;
