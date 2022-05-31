import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

export const Profile = () => {
  // const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const onClickBack = () => history.goBack();
  return (
    <div>
      <p>プロフィール画面だよ</p>
      <button onClick={onClickBack}>閉じる</button>
    </div>
  );
};
