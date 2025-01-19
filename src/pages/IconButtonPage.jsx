import React from 'react';
    import { IconButton, Box, Heading, Text } from '@chakra-ui/react';
    import { EmailIcon } from '@chakra-ui/icons';
    import BackButton from '../components/BackButton';

    function IconButtonPage() {
      return (
        <Box p={5}>
          <Heading mb={4}>Icon Button Example</Heading>
          <Text mb={4}>
            This is an icon button example. It uses an icon instead of text.
          </Text>
          <IconButton icon={<EmailIcon />} aria-label="Send email" />
          <BackButton />
        </Box>
      );
    }

    export default IconButtonPage;
