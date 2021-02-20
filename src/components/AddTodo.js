import { Button, Input, Stack, useToast } from '@chakra-ui/react';
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
  );
}

export default AddTodo;
