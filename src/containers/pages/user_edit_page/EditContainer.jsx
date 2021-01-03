/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Edit from '../../../components/pages/user_edit_page/Edit';
import {
  typeGetUserInfo,
  typeUpdateUserInfo,
  typeInitUpdateInfo,
} from '../../../modules/pages/edit/userEdit';
import { typeUploadImage } from '../../../modules/pages/write_page/wrtiePage';

const EditContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { info, update, url } = useSelector(({ userEdit, writeCard }) => ({
    info: userEdit.info,
    url: writeCard.url,
    update: userEdit.update,
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

  const uploadImage = (imageFormData) => {
    const formData = new FormData();
    formData.append('uploadImg', imageFormData);
    dispatch(typeUploadImage(formData));
  };

  const onUpdateInfo = () => {
    const data = {
      nickname,
      profileImg: url,
      introduction,
    };
    dispatch(typeUpdateUserInfo(data));
  };

  useEffect(() => {
    if (update?.updateSuccess) {
      dispatch(typeInitUpdateInfo());
      history.push('/');
    }
  }, [update]);

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
        onUpdateInfo={onUpdateInfo}
        uploadImage={uploadImage}
      />
    </>
  );
};

export default EditContainer;
