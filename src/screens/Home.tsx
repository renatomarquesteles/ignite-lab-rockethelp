import { useState } from 'react';
import {
  Center,
  FlatList,
  Heading,
  HStack,
  IconButton,
  Text,
  useTheme,
  VStack,
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Logo from '../assets/logo_secondary.svg';
import { Filter } from '../components/Filter';
import { Order, OrderProps } from '../components/Order';
import { Button } from '../components/Button';

export function Home() {
  const [selectedStatus, setSelectedStatus] = useState<'open' | 'closed'>(
    'open'
  );
  const [orders, setOrders] = useState<OrderProps[]>([]);

  const { colors } = useTheme();
  const navigation = useNavigation();

  const handleNewRequest = () => {
    navigation.navigate('register');
  };

  return (
    <VStack flex={1} pb={6} bg="gray.700">
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.600"
        pt={12}
        pb={5}
        px={6}
      >
        <Logo />

        <IconButton
          icon={
            <Ionicons name="exit-outline" size={24} color={colors.gray[300]} />
          }
        />
      </HStack>

      <VStack flex={1} px={6}>
        <HStack
          w="full"
          mt={8}
          mb={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading color="gray.100">Requests</Heading>
          <Text color="gray.200">3</Text>
        </HStack>

        <HStack space={3} mb={8}>
          <Filter
            type="open"
            title="in progress"
            onPress={() => setSelectedStatus('open')}
            isActive={selectedStatus === 'open'}
          />
          <Filter
            type="closed"
            title="finished"
            onPress={() => setSelectedStatus('closed')}
            isActive={selectedStatus === 'closed'}
          />
        </HStack>

        <FlatList
          data={orders}
          keyExtractor={(order) => order.id}
          renderItem={({ item }) => <Order data={item} />}
          contentContainerStyle={{ paddingBottom: 100 }}
          ListEmptyComponent={() => (
            <Center>
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={40}
                color={colors.gray[300]}
              />
              <Text color="gray.300" fontSize="xl" mt={6} textAlign="center">
                There are no{'\n'}
                {selectedStatus === 'open'
                  ? 'requests in progress'
                  : 'finished requests'}
              </Text>
            </Center>
          )}
        />

        <Button title="New request" onPress={handleNewRequest} />
      </VStack>
    </VStack>
  );
}
