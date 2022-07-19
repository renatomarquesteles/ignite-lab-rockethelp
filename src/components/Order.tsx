import {
  Box,
  Circle,
  HStack,
  IPressableProps,
  Pressable,
  Text,
  useTheme,
  VStack,
} from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export type OrderProps = {
  id: string;
  patrimony: string;
  when: string;
  status: 'open' | 'closed';
};

type Props = IPressableProps & {
  data: OrderProps;
};

export function Order({ data, ...rest }: Props) {
  const { colors } = useTheme();

  const statusColor =
    data.status === 'open' ? colors.secondary[700] : colors.green[300];

  return (
    <Pressable {...rest}>
      <HStack
        bg="gray.600"
        mb={4}
        alignItems="center"
        justifyContent="space-between"
        rounded="sm"
        overflow="hidden"
      >
        <Box h="full" w={2} bg={statusColor} />

        <VStack flex={1} my={5} ml={5}>
          <Text color="white" fontSize="md">
            Patrimony {data.patrimony}
          </Text>

          <HStack alignItems="center">
            <MaterialCommunityIcons
              name="clock-outline"
              size={15}
              color={colors.gray[300]}
            />

            <Text color="gray.200" fontSize="xs" ml={1}>
              {data.when}
            </Text>
          </HStack>
        </VStack>

        <Circle bg="gray.500" h={12} w={12} mr={5}>
          {data.status === 'open' ? (
            <MaterialIcons
              name="hourglass-empty"
              size={24}
              color={statusColor}
            />
          ) : (
            <MaterialCommunityIcons
              name="check-decagram-outline"
              size={24}
              color={statusColor}
            />
          )}
        </Circle>
      </HStack>
    </Pressable>
  );
}
