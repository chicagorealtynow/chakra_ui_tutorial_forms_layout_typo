import React from 'react';
    import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box, Heading, Text } from '@chakra-ui/react';
    import BackButton from '../components/BackButton';

    function SliderPage() {
      return (
        <Box p={5}>
          <Heading mb={4}>Slider Example</Heading>
          <Text mb={4}>
            This is a slider example. You can select a value by dragging the
            thumb.
          </Text>
          <Slider defaultValue={30} min={0} max={100}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <BackButton />
        </Box>
      );
    }

    export default SliderPage;
