import {FlatList} from 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import {ListMembersItem} from './ListMembersItem';
import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

interface ListMembersProps {
  members:
    | FirebaseFirestoreTypes.QueryDocumentSnapshot<FirebaseFirestoreTypes.DocumentData>[]
    | undefined;
}

export const ListMembers = ({members}: ListMembersProps) => {
  return (
    <FlatList
      data={members}
      ListEmptyComponent={
        <View>
          <Text>Nada</Text>
        </View>
      }
      renderItem={({item}) => <ListMembersItem item={item.data()} />}
    />
  );
};
