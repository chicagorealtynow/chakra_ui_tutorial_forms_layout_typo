import React from 'react';
    import { Grid, GridItem, Box, Heading, Text } from '@chakra-ui/react';
    import BackButton from '../components/BackButton';

    function GridPage() {
      return (
        <Box p={5}>
          <Heading mb={4}>Grid Example</Heading>
          <Text mb={4}>
            The Grid component is used to create grid layouts.
          </Text>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            <GridItem bg="tomato" p={4} color="white">
              Item 1
            </GridItem>
            <GridItem bg="teal" p={4} color="white">
              Item 2
            </GridItem>
            <GridItem bg="blue.500" p={4} color="white">
              Item 3
            </GridItem>
            <GridItem bg="yellow.500" p={4} color="black">
              Item 4
            </GridItem>
            <GridItem bg="green.500" p={4} color="white">
              Item 5
            </GridItem>
            <GridItem bg="purple.500" p={4} color="white">
              Item 6
            </GridItem>
          </Grid>
          <BackButton />
        </Box>
      );
    }

    export default GridPage;
