import {View, Text} from 'react-native';
import {useMembers} from './useMembers';
import {ListMembers} from './components';

export const Members = () => {
  const {loading, error, members} = useMembers();

  if (loading) {
    return <Text>Carregando...</Text>;
  }
  if (error) {
    return <Text>Erro ao carregar</Text>;
  }

  return (
    <View>
      <ListMembers members={members} />
    </View>
  );
};
