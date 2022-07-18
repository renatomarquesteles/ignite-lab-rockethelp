import { useState } from 'react';
import { Heading, Icon, useTheme, VStack } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';

import Logo from '../assets/logo_primary.svg';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { colors } = useTheme();

  const handleSignIn = () => {
    console.log({ email, password });
  };

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Logo />
      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Access your account
      </Heading>

      <Input
        placeholder="Email"
        mb={4}
        InputLeftElement={
          <Icon
            as={
              <FontAwesome name="envelope" size={24} color={colors.gray[300]} />
            }
            ml={4}
          />
        }
        onChangeText={setEmail}
      />
      <Input
        placeholder="Password"
        mb={8}
        InputLeftElement={
          <Icon
            as={<FontAwesome name="key" size={24} color={colors.gray[300]} />}
            ml={4}
          />
        }
        secureTextEntry
        onChangeText={setPassword}
      />

      <Button title="Login" w="full" onPress={handleSignIn} />
    </VStack>
  );
};
