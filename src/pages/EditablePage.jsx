import React from 'react';
    import { Editable, EditableInput, EditablePreview, Box, Heading, Text } from '@chakra-ui/react';
    import BackButton from '../components/BackButton';

    function EditablePage() {
      return (
        <Box p={5}>
          <Heading mb={4}>Editable Example</Heading>
          <Text mb={4}>
            This is an editable text example. You can click on the text to edit
            it.
          </Text>
          <Editable defaultValue="Click to edit">
            <EditablePreview />
            <EditableInput />
          </Editable>
          <BackButton />
        </Box>
      );
    }

    export default EditablePage;
