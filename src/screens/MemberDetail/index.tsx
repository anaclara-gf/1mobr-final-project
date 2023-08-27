import {RouteProp, useRoute} from '@react-navigation/native';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Pressable,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ILoggedStack} from 'src/routes/logged/types';
import styles from './styles';
import {JobCard} from './components';
import {EducationCard} from './components/EducationCard';

export const MemberDetail = () => {
  const route = useRoute<RouteProp<ILoggedStack, 'MemberDetail'>>();
  const member = route.params.member;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.cardContainer}>
          <Image source={{uri: member.imageURL}} style={styles.image} />
          <Text style={styles.titleCentral}>{member.name}</Text>
          <Text style={styles.languageTitle}>Idiomas</Text>
          <View style={styles.borderTextContainer}>
            {member.languages.map(language => (
              <Text style={styles.borderText} key={language}>
                {language}
              </Text>
            ))}
          </View>
          <View style={styles.buttonsContainer}>
            <Pressable
              style={styles.button}
              onPress={() => {
                Linking.openURL(member.linkedinURL);
              }}>
              <Icon name="linkedin" size={16} color={'grey'} />
              <Text style={styles.buttonText}>LinkedIn</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => {
                Linking.openURL(member.githubURL);
              }}>
              <Icon name="github" size={16} color={'grey'} />
              <Text style={styles.buttonText}>GitHub</Text>
            </Pressable>
          </View>
          <Pressable
            style={styles.contractButton}
            onPress={() => {
              Linking.openURL(
                `mailto:${member.email}?subject=Contrate-me&body=Vi seu perfil no site freelancer e gostaria de te contratar para um projeto!`,
              );
            }}>
            <Text style={styles.contractButtonText}>Contrate agora</Text>
          </Pressable>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.title}>Sobre</Text>
          <Text style={styles.textNormal}>{member.about}</Text>
          <Text style={styles.subtitle}>Competências</Text>
          <View style={styles.borderTextContainer}>
            {member.skills.map(skill => (
              <Text style={styles.borderText} key={skill}>
                {skill}
              </Text>
            ))}
          </View>
        </View>
        <JobCard data={member.experiences} />
        <EducationCard data={member.academics} />
      </ScrollView>
    </SafeAreaView>
  );
};
