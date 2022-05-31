import { useHistory } from 'react-router-dom';

export const Ctop = () => {
  const history = useHistory();
  const toProfile = () => history.push('/customer/profile');
  const toReserve = () => history.push('/customer/reserve');
  const toInterest = () => history.push('/customer/interested');
  return (
    <>
      <button onClick={toProfile}>プロフィール</button>
      <button onClick={toReserve}>予約イベント一覧</button>
      <button onClick={toInterest}>気になるイベント一覧</button>
    </>
  );
};
