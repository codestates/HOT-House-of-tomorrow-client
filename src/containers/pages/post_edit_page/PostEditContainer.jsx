import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostEditPage from '../../../components/pages/post_edit_page/PostEditPage';
import {
  typeUploadImage,
  typeInitUploadCard,
} from '../../../modules/pages/write_page/wrtiePage';
import {
  typeGetCardInfo,
  typePostUpdateCard,
  typeInitUserCards,
} from '../../../modules/pages/post_edit_page/postEdit';

const PostEditContainer = ({ match, history }) => {
  const { url, postId, result } = useSelector(({ writeCard, postEdit }) => ({
    url: writeCard.url,
    postId: writeCard.uploadCard.postId,
    result: postEdit.result,
  }));

  const [description, setDescription] = useState('');
  const [acreage, setAcreage] = useState('0');
  const [color, setColor] = useState('0');
  const [housingType, setHousingType] = useState('0');
  const [space, setSpace] = useState('0');

  const [img, setImg] = useState('');

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
      postId: result?.postData.id,
      acreage,
      housingType,
      space,
      description,
      roomImage: url,
      color,
      date: currentDate(),
    };
    dispatch(typePostUpdateCard(data));
  };

  useEffect(() => {
    if (result?.postUpdate) {
      dispatch(typeInitUserCards());
      history.push(`/card_collections/${match.params.id}`);
    }
  }, [result]);

  useEffect(() => {
    dispatch(typeGetCardInfo(match.params.id));
  }, []);

  useEffect(() => {
    if (result?.postData?.description) {
      setDescription(result?.postData.description);
      setImg(result?.postData.roomImage);
    }
  }, [result]);

  useEffect(() => {
    if (postId) {
      dispatch(typeInitUploadCard());
    }
  }, [postId, dispatch]);

  return result?.postData ? (
    <PostEditPage
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
      img={img}
    />
  ) : null;
};

export default PostEditContainer;
