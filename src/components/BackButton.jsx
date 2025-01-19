import React from 'react';
    import { Button } from '@chakra-ui/react';
    import { useNavigate } from 'react-router-dom';

    function BackButton() {
      const navigate = useNavigate();

      return (
        <Button onClick={() => navigate('/')} mt={4}>
          Back to Home
        </Button>
      );
    }

    export default BackButton;
