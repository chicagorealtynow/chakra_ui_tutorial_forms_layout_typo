import React from 'react';
    import { Heading, Highlight, Text, Box } from '@chakra-ui/react';
    import BackButton from '../components/BackButton';

    function TypographyPage() {
      return (
        <Box p={5}>
          <Heading mb={4}>Typography Example</Heading>
          <Heading as="h2" size="2xl" mb={4}>
            Heading 2xl
          </Heading>
          <Heading as="h3" size="xl" mb={4}>
            Heading xl
          </Heading>
          <Heading as="h4" size="lg" mb={4}>
            Heading lg
          </Heading>
          <Heading as="h5" size="md" mb={4}>
            Heading md
          </Heading>
          <Heading as="h6" size="sm" mb={4}>
            Heading sm
          </Heading>
          <Text mb={4}>
            This is a basic text example. You can use the Text component for
            paragraphs and other text content.
          </Text>
          <Highlight
            query="highlight"
            styles={{ px: '2', py: '1', bg: 'yellow.100' }}
            mb={4}
          >
            This is a text with a highlight. You can highlight specific words
            like this: highlight.
          </Highlight>
          <BackButton />
        </Box>
      );
    }

    export default TypographyPage;
