import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

interface CardProps {
  data: Academic[];
}

interface Academic {
  institution: string;
  degree: string;
  course: string;
  from: string;
  to: string;
}

export const EducationCard = ({data}: CardProps) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>Formação acadêmica</Text>
      {data.map((academic, index) => (
        <View key={index}>
          <View style={styles.jobContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.textBold}>{academic.institution}</Text>
              <Text style={styles.textNormal}>
                {academic.degree} - {academic.course}
              </Text>
              <Text style={styles.textLight}>
                {academic.from} - {academic.to}
              </Text>
            </View>
          </View>
          {index !== data.length - 1 && <View style={styles.divider} />}
        </View>
      ))}
    </View>
  );
};
