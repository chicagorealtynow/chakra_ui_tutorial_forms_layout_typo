import React from 'react';
    import { Radio, RadioGroup, Stack, Box, Heading, Text } from '@chakra-ui/react';
    import BackButton from '../components/BackButton';

    function RadioPage() {
      return (
        <Box p={5}>
          <Heading mb={4}>Radio Example</Heading>
          <Text mb={4}>
            This is a radio button example. You can select only one option.
          </Text>
          <RadioGroup defaultValue="option1">
            <Stack spacing={5} direction="row">
              <Radio value="option1">Option 1</Radio>
              <Radio value="option2">Option 2</Radio>
              <Radio value="option3">Option 3</Radio>
            </Stack>
          </RadioGroup>
          <BackButton />
        </Box>
      );
    }

    export default RadioPage;
