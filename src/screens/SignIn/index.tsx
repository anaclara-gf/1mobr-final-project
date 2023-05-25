import React from 'react';
import {SafeAreaView, Text} from 'react-native';

// Components
import {Button, Divider, GradientBackground, Input} from '@components';

// Styles
import styles from './styles';

import {useAppDispatch, useAppSelector} from '@store';
import {setLogged} from '@store/auth/authSlice';

const SignIn = () => {
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector(state => state.auth.isLogged);

  function signIn() {
    dispatch(setLogged(!isLogged));
  }

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>FIAP</Text>
        <Text style={styles.subTitle}>Educação que transforma!</Text>
        <Divider size={32} />
        <Input placeholder="Digite seu e-mail" keyboardType="email-address" />
        <Divider size={12} />
        <Input placeholder="Digite sua senha" secureTextEntry />
        <Divider size={24} />
        <Button onPress={signIn} text="Entrar" />
        <Divider size={12} />
        <Button
          onPress={() => {}}
          text="Não possui conta? Clique aqui"
          primary={false}
        />
      </SafeAreaView>
    </GradientBackground>
  );
};

export {SignIn};
