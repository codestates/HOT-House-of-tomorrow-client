/* eslint-disable prefer-const */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Comment from '../../../../components/pages/post_detail/card_detail/card_comments/Comment';
import {
  typePostComment,
  typeDeleteComment,
} from '../../../../modules/pages/post/cardDetail';

function CommentFeedContainer({ comment, userData, timeDiffToday, postId }) {
  const dispatch = useDispatch();
  const { id, lastCommentId } = useSelector(({ cards, cardDetail }) => ({
    id: cards.card.postData.id,
    lastCommentId: cardDetail.commentId,
  }));

  const [commentInput, setCommentInput] = useState('');
  const [commentList, setCommentList] = useState(comment);
  const [currentTime, setCurrentTime] = useState('');

  const inputHandler = (event) => {
    const { value } = event.target;
    setCommentInput(value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
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

    const commentObj = {
      postId: id,
      date: fullMoment,
      comment: commentInput,
    };
    dispatch(typePostComment(commentObj));
    setCurrentTime(fullMoment);
  };

  const updateCommentDom = (fullMoment) => {
    const currentUser = JSON.parse(localStorage.getItem('CURRENT_USER'));
    const fakeComment = {
      comment: commentInput,
      date: fullMoment,
      id: lastCommentId,
      User: {
        nickname: currentUser.nickname,
        profileImg: currentUser.profileImg,
      },
    };
    setCommentList([fakeComment, ...commentList]);
    setCommentInput('');
  };

  useEffect(() => {
    if (typeof lastCommentId === 'number') {
      updateCommentDom(currentTime);
    }
  }, [lastCommentId]);

  useEffect(() => {
    let data = [...commentList];
    data.unshift();
    setCommentList(data);
  }, []);

  const deleteHandler = (deleteId) => {
    const currentIndex = commentList.find((ele) => ele.id === deleteId);
    const index = commentList.indexOf(currentIndex);
    const newlist = [...commentList];

    newlist.splice(index, 1);
    setCommentList(newlist);

    const commentId = commentList[index].id;

    const commentObj = {
      postId,
      commentId,
    };
    dispatch(typeDeleteComment(commentObj));
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
