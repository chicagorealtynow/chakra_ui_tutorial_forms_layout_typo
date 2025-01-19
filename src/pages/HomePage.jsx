import React from 'react';
    import { Link } from 'react-router-dom';
    import { Box, Heading, List, ListItem } from '@chakra-ui/react';

    function HomePage() {
      return (
        <Box p={5}>
          <Heading mb={5}>Chakra UI Examples</Heading>
          <List spacing={3}>
            <ListItem>
              <Link to="/button">Button</Link>
            </ListItem>
            <ListItem>
              <Link to="/checkbox">Checkbox</Link>
            </ListItem>
            <ListItem>
              <Link to="/editable">Editable</Link>
            </ListItem>
            <ListItem>
              <Link to="/form-control">Form Control</Link>
            </ListItem>
            <ListItem>
              <Link to="/icon-button">Icon Button</Link>
            </ListItem>
            <ListItem>
              <Link to="/input">Input</Link>
            </ListItem>
            <ListItem>
              <Link to="/number-input">Number Input</Link>
            </ListItem>
            <ListItem>
              <Link to="/pin-input">Pin Input</Link>
            </ListItem>
            <ListItem>
              <Link to="/radio">Radio</Link>
            </ListItem>
            <ListItem>
              <Link to="/range-slider">Range Slider</Link>
            </ListItem>
            <ListItem>
              <Link to="/select">Select</Link>
            </ListItem>
            <ListItem>
              <Link to="/slider">Slider</Link>
            </ListItem>
            <ListItem>
              <Link to="/switch">Switch</Link>
            </ListItem>
            <ListItem>
              <Link to="/textarea">Textarea</Link>
            </ListItem>
            <ListItem>
              <Link to="/box">Box</Link>
            </ListItem>
            <ListItem>
              <Link to="/center">Center</Link>
            </ListItem>
            <ListItem>
              <Link to="/container">Container</Link>
            </ListItem>
            <ListItem>
              <Link to="/flex">Flex</Link>
            </ListItem>
            <ListItem>
              <Link to="/grid">Grid</Link>
            </ListItem>
            <ListItem>
              <Link to="/simple-grid">Simple Grid</Link>
            </ListItem>
            <ListItem>
              <Link to="/stack">Stack</Link>
            </ListItem>
            <ListItem>
              <Link to="/wrap">Wrap</Link>
            </ListItem>
            <ListItem>
              <Link to="/typography">Typography</Link>
            </ListItem>
            <ListItem>
              <Link to="/close-button">Close Button</Link>
            </ListItem>
            <ListItem>
              <Link to="/portal">Portal</Link>
            </ListItem>
            <ListItem>
              <Link to="/show-hide">Show/Hide</Link>
            </ListItem>
            <ListItem>
              <Link to="/transition">Transition</Link>
            </ListItem>
          </List>
        </Box>
      );
    }

    export default HomePage;
