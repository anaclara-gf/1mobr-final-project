import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {LoggedRouteProps} from '@routes';

interface ListMembersItemProps {
  item: FirebaseFirestoreTypes.DocumentData;
}

export const ListMembersItem = ({item}: ListMembersItemProps) => {
  const navigation = useNavigation<LoggedRouteProps>();
  return (
    <View style={styles.containerButton}>
      <TouchableOpacity
        containerStyle={styles.button}
        onPress={() => navigation.push('MemberDetail', {member: item})}>
        <View style={styles.container}>
          <View>
            <Image
              style={styles.image}
              source={{uri: item.imageURL}}
              alt="profile"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.level}>{item.level}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
