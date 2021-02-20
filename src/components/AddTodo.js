import { Box, Button, Input, Stack, useToast } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { useState } from 'react';

function AddTodo({ addTodo }) {
  const toast = useToast();

  function handleSubmit(e) {
    e.preventDefault();
    if (!content) {
      toast({
        title: 'Aucun élément',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    const todo = {
      id: nanoid(),
      body: content,
    };

    addTodo(todo);
    setContent('');
  }

  const [content, setContent] = useState('');

  return (
    <Box width={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}>
      <form onSubmit={handleSubmit}>
        <Stack mt="8" direction={['column', 'row']}>
          <Input
            variant="filled"
            placeholder="Chose à faire"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button colorScheme="pink" px="8" type="submit">
            Ajouter
          </Button>
        </Stack>
      </form>
    </Box>
  );
}

export default AddTodo;
