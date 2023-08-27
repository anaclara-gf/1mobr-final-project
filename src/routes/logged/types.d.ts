import type {NavigatorScreenParams} from '@react-navigation/native';

import type {ILoggedDrawer} from './drawer/types';

export type ILoggedStack = {
  Drawer: NavigatorScreenParams<ILoggedDrawer>;
  MemberDetail: {
    member: {
      name: string;
      email: string;
      imageURL: string;
      level: string;
      about: string;
      linkedinURL: string;
      githubURL: string;
      languages: string[];
      skills: string[];
      experiences: {
        company: string;
        place: string;
        time: string;
        jobs: {
          level: string;
          from: string;
          to: string;
          summary: string;
        }[];
      }[];
      academics: {
        institution: string;
        degree: string;
        course: string;
        from: string;
        to: string;
      }[];
    };
  };
};

export type LoggedRouteProps = StackNavigationProp<ILoggedStack>;
