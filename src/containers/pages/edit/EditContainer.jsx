/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Edit from '../../../components/systems/edit/Edit';
import {
  typeGetUserInfo,
  typeUpdateUserInfo,
} from '../../../modules/pages/edit/userEdit';

const EditContainer = () => {
  const dispatch = useDispatch();
  const { info } = useSelector(({ userEdit }) => ({
    info: userEdit.info,
  }));

  const [nickname, setNickname] = useState('');
  const [img, setImg] = useState('');
  const [introduction, setIntroduction] = useState('');

  useEffect(() => {
    dispatch(typeGetUserInfo());
  }, []);

  useEffect(() => {
    setNickname(info.nickname);
    setIntroduction(info.introduction);
  }, [info]);

  const onUpldateInfo = () => {
    const data = {
      nickname,
      profileImg: img,
      introduction,
    };
    console.log(data);
    dispatch(typeUpdateUserInfo(data));
  };

  return (
    <>
      <Edit
        email={info.email}
        nickname={nickname}
        setNickname={setNickname}
        img={img}
        setImg={setImg}
        introduction={introduction}
        setIntroduction={setIntroduction}
        onUpldateInfo={onUpldateInfo}
      />
    </>
  );
};

export default EditContainer;
