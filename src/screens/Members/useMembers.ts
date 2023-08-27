import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import {useServices} from '@services';
import {useEffect, useState} from 'react';

export const useMembers = () => {
  const {getMembers} = useServices();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [members, setMembers] =
    useState<
      FirebaseFirestoreTypes.QueryDocumentSnapshot<FirebaseFirestoreTypes.DocumentData>[]
    >();

  const fetchMembers = () => {
    setLoading(true);
    getMembers()
      .then(data => {
        setMembers(data.docs);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  return {loading, error, members};
};
