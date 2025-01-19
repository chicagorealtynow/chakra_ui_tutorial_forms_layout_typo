import React from 'react';
    import { Container, Box, Heading, Text } from '@chakra-ui/react';
    import BackButton from '../components/BackButton';

    function ContainerPage() {
      return (
        <Box p={5}>
          <Heading mb={4}>Container Example</Heading>
          <Text mb={4}>
            The Container component is used to constrain the content to a
            specific width.
          </Text>
          <Container maxW="container.sm" bg="gray.100" p={4}>
            This is a container
          </Container>
          <BackButton />
        </Box>
      );
    }

    export default ContainerPage;
