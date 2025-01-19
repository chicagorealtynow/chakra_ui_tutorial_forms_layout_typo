import React from 'react';
    import { CloseButton, Box, Heading, Text, useToast } from '@chakra-ui/react';
    import BackButton from '../components/BackButton';

    function CloseButtonPage() {
      const toast = useToast();

      const handleClose = () => {
        toast({
          title: 'Close button clicked',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      };

      return (
        <Box p={5}>
          <Heading mb={4}>Close Button Example</Heading>
          <Text mb={4}>
            This is a close button example. It's often used in modals or alerts.
          </Text>
          <CloseButton onClick={handleClose} />
          <BackButton />
        </Box>
      );
    }

    export default CloseButtonPage;
