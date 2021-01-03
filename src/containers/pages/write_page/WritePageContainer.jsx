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

  const currentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month =
      today.getMonth() + 1 >= 10
        ? today.getMonth() + 1
        : `0${today.getMonth() + 1}`; // 달
    const getDate =
      today.getDate() >= 10 ? today.getDate() : `0${today.getDate()}`; // 달
    const hours =
      today.getHours() >= 10 ? today.getHours() : `0${today.getHours()}`; // 분
    const minutes =
      today.getMinutes() >= 10 ? today.getMinutes() : `0${today.getMinutes()}`; // 분
    const seconds =
      today.getSeconds() >= 10 ? today.getSeconds() : `0${today.getSeconds()}`; // 초

    const fullMoment = `${year}-${month}-${getDate}T${hours}:${minutes}:${seconds}`;
    return fullMoment;
  };

  const submitCard = () => {
    const data = {
      acreage,
      housingType,
      space,
      description,
      roomImage: url,
      color,
      date: currentDate(),
    };
    dispatch(typeWriteCard(data));
  };

  useEffect(() => {
    if (postId) {
      history.push(`/card_collections/${postId}`);
      dispatch(typeInitUploadCard());
    }
  }, [postId, dispatch]);

  return (
    <WritePage
      goLobby={goLobby}
      uploadImage={uploadImage}
      submitCard={submitCard}
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
