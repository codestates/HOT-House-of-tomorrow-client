/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WritePage from '../../../components/pages/write_page/WritePage';
import {
  typeWriteCard,
  typeUploadImage,
  typeInitUploadCard,
} from '../../../modules/pages/write_page/wrtiePage';

const WritePageContainer = ({ history }) => {
  const { url, postId } = useSelector(({ writeCard }) => ({
    url: writeCard.url,
    postId: writeCard.uploadCard.postId,
  }));

  const [image, setImage] = useState('');

  const [description, setDescription] = useState('');
  const [acreage, setAcreage] = useState('0');
  const [color, setColor] = useState('0');
  const [housingType, setHousingType] = useState('0');
  const [space, setSpace] = useState('0');

  const dispatch = useDispatch();
  const goLobby = () => {
    history.push('/');
  };

  const uploadImage = (imageFormData) => {
    const formData = new FormData();
    formData.append('uploadImg', imageFormData);
    dispatch(typeUploadImage(formData));
  };

  const submitCard = (formData) => {
    const data = {
      acreage,
      housingType,
      space,
      description,
      roomImage: url,
      color,
      date: new Date(),
    };
    dispatch(typeWriteCard(data));
  };

  useEffect(() => {
    if (postId) {
      history.push(`/card_collections/${postId}`);
      dispatch(typeInitUploadCard());
    }
  }, [postId]);

  return (
    <WritePage
      goLobby={goLobby}
      uploadImage={uploadImage}
      submitCard={submitCard}
      setImage={setImage}
      setDescription={setDescription}
      setAcreage={setAcreage}
      setColor={setColor}
      setHousingType={setHousingType}
      setSpace={setSpace}
      description={description}
      acreage={acreage}
      color={color}
      housingType={housingType}
      space={space}
    />
  );
};

export default WritePageContainer;
