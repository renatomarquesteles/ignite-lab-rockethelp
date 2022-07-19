import { VStack } from 'native-base';

import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { Input } from '../components/Input';

export function Register() {
  return (
    <VStack flex={1} p={6} bg="gray.600">
      <Header title="New Request" />

      <Input placeholder="Patrimony Code" mt={4} />

      <Input
        placeholder="Problem description"
        mt={5}
        flex={1}
        textAlignVertical="top"
        multiline
      />

      <Button title="Register" mt={5} />
    </VStack>
  );
}
