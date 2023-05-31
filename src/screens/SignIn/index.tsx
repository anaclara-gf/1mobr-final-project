import React from 'react';
import {KeyboardAvoidingView, Platform, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Components
import {Button, Divider, GradientBackground, Input} from '@components';

// Styles
import styles from './styles';

// Store
import {useAppDispatch, useAppSelector} from '@store';
import {setLogged} from '@store/auth/authSlice';

// Route Props
import {UnloggedRouteProps} from '@routes';

// Hooks
import {useToast} from '@hooks';

const SignIn = () => {
  const navigation = useNavigation<UnloggedRouteProps>();
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector(state => state.auth.isLogged);
  const {toast} = useToast();

  function signIn() {
    dispatch(setLogged(!isLogged));
    toast('success', 'Bem-vindo(a) a FIAP', 'Educação que transforma!');
  }

  function goToSignUp() {
    navigation.push('SignUp');
  }

  return (
    <GradientBackground>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
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
          onPress={goToSignUp}
          text="Não possui conta? Clique aqui"
          primary={false}
        />
      </KeyboardAvoidingView>
    </GradientBackground>
  );
};

export {SignIn};
