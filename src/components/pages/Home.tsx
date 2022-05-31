import { Link } from 'react-router-dom';
import { useLogin } from '../../hooks/useLogin';

export const Home = () => {
  const { userState, handleChangeLoginForm, loginHandler } = useLogin();

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
        <div>{userState.displayName}</div>
        <div>{userState.mailAddress}</div>
        <Link to="/search">検索</Link>

        <Link to="/customer">ユーザー用トップページへ</Link>

        <Link to="/employee">従業員用トップページへ</Link>
      </div>
      <div>ホーム画面だよ</div>
    </>
  );
};
