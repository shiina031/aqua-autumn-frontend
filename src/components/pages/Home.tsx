import axios from 'axios';
import { ChangeEvent, useContext, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../providers/UserProvider';

export const Home = () => {
  const { userState, userDispatch } = useContext(UserContext);
  const initialValues = { userCode: '', password: '' };
  const [loginValues, setLoginValues] = useState(initialValues);

  const handleChangeLoginForm = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'userCode') {
      setLoginValues({ ...loginValues, userCode: value });
    } else {
      setLoginValues({ ...loginValues, password: value });
    }
  };

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

  return (
    <>
      <div>
        <h1>ヘッダー</h1>

        <div>
          <label>ユーザーID</label>
          <input
            type="text"
            name="userCode"
            placeholder="ユーザーID"
            onChange={(e) => {
              handleChangeLoginForm(e);
            }}
          />
          <br />
          <label>パスワード</label>
          <input
            type="password"
            name="password"
            placeholder="パスワード"
            onChange={(e) => {
              handleChangeLoginForm(e);
            }}
          />
          <br />
          <button onClick={loginHandler}>ログイン</button>
        </div>
        <Link to="/search">検索</Link>

        <Link to="/customer">ユーザー用トップページへ</Link>

        <Link to="/employee">従業員用トップページへ</Link>
      </div>
      <div>ホーム画面だよ</div>
    </>
  );
};
