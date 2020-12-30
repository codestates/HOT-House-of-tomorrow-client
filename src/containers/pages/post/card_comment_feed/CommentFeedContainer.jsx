/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Comment from '../../../../components/pages/post/card_detail/card_comments/Comment';
import { typePostComment } from '../../../../modules/pages/post/cardDetail';

function CommentFeedContainer({ comment, userData, timeDiffToday, postId }) {
  const dispatch = useDispatch();
  const { id } = useSelector(({ cards }) => ({
    id: cards.card.postData.id,
  }));

  const [commentInput, setCommentInput] = useState('');
  const [commentList, setCommentList] = useState(comment);

  const inputHandler = (event) => {
    const { value } = event.target;
    setCommentInput(value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const getDate = today.getDate();
    const hours = today.getHours(); // 시
    const minutes =
      today.getMinutes() >= 10
        ? today.getMinutes()
        : Number(`0${today.getMinutes()}`); // 분
    const seconds =
      today.getSeconds() >= 10
        ? today.getSeconds()
        : Number(`0${today.getSeconds()}`); // 초

    const fullMoment = `${year}-${month}-${getDate}T${hours}:${minutes}:${seconds}`;

    const commentObj = {
      postId: id,
      date: fullMoment,
      comment: commentInput,
    };
    dispatch(typePostComment(commentObj));
    const currentUser = JSON.parse(localStorage.getItem('CURRENT_USER'));
    const fakeComment = {
      comment: commentInput,
      date: fullMoment,
      User: {
        nickname: currentUser.nickname,
        profileImg: currentUser.profileImg,
      },
    };
    setCommentList([fakeComment, ...commentList]);
    setCommentInput('');
  };

  const deleteHandler = (commentId) => {
    console.log(postId, commentId);
  };

  return (
    <>
      <Comment
        comment={commentList}
        userData={userData}
        timeDiffToday={timeDiffToday}
        commentInput={commentInput}
        inputHandler={inputHandler}
        submitHandler={submitHandler}
        deleteHandler={deleteHandler}
      />
    </>
  );
}

export default CommentFeedContainer;
