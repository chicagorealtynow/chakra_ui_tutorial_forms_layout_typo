import React from 'react';
    import { Checkbox, Box, Heading, Text } from '@chakra-ui/react';
    import BackButton from '../components/BackButton';

    function CheckboxPage() {
      return (
        <Box p={5}>
          <Heading mb={4}>Checkbox Example</Heading>
          <Text mb={4}>
            This is a basic checkbox example. You can use checkboxes to allow
            users to select multiple options.
          </Text>
          <Checkbox defaultChecked>Remember me</Checkbox>
          <BackButton />
        </Box>
      );
    }

    export default CheckboxPage;
