import React from 'react';
    import { Select, Box, Heading, Text } from '@chakra-ui/react';
    import BackButton from '../components/BackButton';

    function SelectPage() {
      return (
        <Box p={5}>
          <Heading mb={4}>Select Example</Heading>
          <Text mb={4}>
            This is a select dropdown example. You can choose one option from the
            list.
          </Text>
          <Select placeholder="Select option">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <BackButton />
        </Box>
      );
    }

    export default SelectPage;
