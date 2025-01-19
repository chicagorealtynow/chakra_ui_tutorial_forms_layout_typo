import React from 'react';
    import { FormControl, FormLabel, Input, Box, Heading, Text } from '@chakra-ui/react';
    import BackButton from '../components/BackButton';

    function FormControlPage() {
      return (
        <Box p={5}>
          <Heading mb={4}>Form Control Example</Heading>
          <Text mb={4}>
            This is a form control example. It provides a label and input field.
          </Text>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <BackButton />
        </Box>
      );
    }

    export default FormControlPage;
