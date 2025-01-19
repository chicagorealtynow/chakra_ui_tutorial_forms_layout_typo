import React from 'react';
    import { Switch, Box, Heading, Text } from '@chakra-ui/react';
    import BackButton from '../components/BackButton';

    function SwitchPage() {
      return (
        <Box p={5}>
          <Heading mb={4}>Switch Example</Heading>
          <Text mb={4}>
            This is a switch example. You can toggle it on or off.
          </Text>
          <Switch defaultChecked />
          <BackButton />
        </Box>
      );
    }

    export default SwitchPage;
