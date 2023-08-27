import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

interface CardProps {
  data: Experience[];
}

interface Experience {
  company: string;
  time: string;
  place: string;
  jobs: Job[];
}

interface Job {
  level: string;
  from: string;
  to: string;
  summary: string;
}

export const JobCard = ({data}: CardProps) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>Experiência</Text>
      {data.map((job, index) => (
        <View key={job.company}>
          <View style={styles.jobContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.textBold}>{job.company}</Text>
              <Text style={styles.textNormal}>{job.time}</Text>
              <Text style={styles.textLight}>{job.place}</Text>
              {job.jobs.map(job => (
                <View key={job.level} style={styles.descriptionContainer}>
                  <Text style={styles.textBoldSmall}>{job.level}</Text>
                  <Text style={styles.textLight}>
                    {job.from} - {job.to}
                  </Text>
                  {job.summary && (
                    <Text style={styles.textNormal}>{job.summary}</Text>
                  )}
                </View>
              ))}
            </View>
          </View>
          {index !== data.length - 1 && <View style={styles.divider} />}
        </View>
      ))}
    </View>
  );
};
