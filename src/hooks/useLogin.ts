import axios from 'axios';
import { ChangeEvent, useContext, useState } from 'react';
import { UserContext } from '../providers/UserProvider';

const useLogin = () => {
  // グローバルユーザーstate
  const { userState, userDispatch } = useContext(UserContext);
  // フォームの状態
  const initialValues = { userCode: '', password: '' };
  const [loginValues, setLoginValues] = useState(initialValues);

  // ログインフォームに変更が入った場合の処理
  const handleChangeLoginForm = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'userCode') {
      setLoginValues({ ...loginValues, userCode: value });
    } else {
      setLoginValues({ ...loginValues, password: value });
    }
  };

  // ログイン処理
  const loginHandler = () => {
    const data = { userCode: loginValues.userCode, password: loginValues.password };
    axios
      .post('http://localhost:3001/api/v1/auth/login', data)
      .then((result) => {
        userDispatch({ type: 'LOGIN', token: result.data.token, payLoad: result.data.result });
      })
      .catch((error) => {
        console.log('エラー');
        console.log(error);
      });
  };
  return { userState, handleChangeLoginForm, loginHandler };
};

export { useLogin };
