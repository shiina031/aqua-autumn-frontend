import { createContext, ReactNode, useReducer, useState } from 'react';

type UserInformation = {
  token: string;
  userId: string;
  userCode: string;
  mailAddress: string;
  userRoleLevel: number;
  displayName: string;
  iconImage: string | undefined;
  updateVersion: number;
};

type UserPayLoad = {
  userId: string;
  userCode: string;
  mailAddress: string;
  userRoleLevel: number;
  displayName: string;
  iconImage: string | undefined;
  updateVersion: number;
};

type UserAuthAction = {
  type: 'LOGIN' | 'LOGOUT';
  token: string;
  payLoad: UserPayLoad;
};

const defaultValue: UserInformation = {
  token: '',
  userId: '',
  userCode: '',
  mailAddress: '',
  userRoleLevel: -1,
  displayName: '',
  iconImage: undefined,
  updateVersion: 0,
};

const userReducer = (currentState: UserInformation, action: UserAuthAction): UserInformation => {
  switch (action.type) {
    case 'LOGIN':
      console.log('コール');
      console.log(action.payLoad);
      return {
        ...currentState,
        token: action.token,
        userId: action.payLoad.userId,
        userCode: action.payLoad.userCode,
        mailAddress: action.payLoad.mailAddress,
        userRoleLevel: action.payLoad.userRoleLevel,
        displayName: action.payLoad.displayName,
        iconImage: action.payLoad.iconImage,
        updateVersion: action.payLoad.updateVersion,
      };
    case 'LOGOUT':
      return defaultValue;
  }
};

type Props = {
  children: ReactNode | ReactNode[];
};

const UserContext = createContext({} as { userState: UserInformation; userDispatch: React.Dispatch<UserAuthAction> });

const UserProvider = (props: Props) => {
  const { children } = props;
  const [userState, userDispatch] = useReducer(userReducer, defaultValue);
  return <UserContext.Provider value={{ userState, userDispatch }}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
