import React from 'react';
    import { RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, Box, Heading, Text } from '@chakra-ui/react';
    import BackButton from '../components/BackButton';

    function RangeSliderPage() {
      return (
        <Box p={5}>
          <Heading mb={4}>Range Slider Example</Heading>
          <Text mb={4}>
            This is a range slider example. You can select a range of values.
          </Text>
          <RangeSlider defaultValue={[10, 30]} min={0} max={100}>
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
          <BackButton />
        </Box>
      );
    }

    export default RangeSliderPage;
