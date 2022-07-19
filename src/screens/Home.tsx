import { useState } from 'react';
import {
  FlatList,
  Heading,
  HStack,
  IconButton,
  Text,
  useTheme,
  VStack,
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';

import Logo from '../assets/logo_secondary.svg';
import { Filter } from '../components/Filter';
import { Order, OrderProps } from '../components/Order';

export function Home() {
  const [selectedStatus, setSelectedStatus] = useState<'open' | 'closed'>(
    'open'
  );
  const [orders, setOrders] = useState<OrderProps[]>([
    {
      id: '1',
      patrimony: '12415',
      when: '07-18-2022 at 8 pm',
      status: 'open',
    },
    {
      id: '2',
      patrimony: '42362362',
      when: '07-18-2022 at 8 pm',
      status: 'closed',
    },
  ]);

  const { colors } = useTheme();

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
        />
      </VStack>
    </VStack>
  );
}
