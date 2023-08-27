import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {LoggedDrawer} from './drawer';
import type {ILoggedStack} from './types';
import {MemberDetail} from 'src/screens/MemberDetail';

import {$COLORS} from '@utils';

const Stack = createStackNavigator<ILoggedStack>();

export function LoggedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: $COLORS.white,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: $COLORS.primary,
        },
        animationEnabled: false,
      }}>
      <Stack.Screen
        name="Drawer"
        component={LoggedDrawer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MemberDetail"
        component={MemberDetail}
        options={({route}) => ({title: route.params.member.name})}
      />
    </Stack.Navigator>
  );
}
