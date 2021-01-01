import React from 'react';
import styled from 'styled-components';
import CommentList from './CommentList';

const Block = styled.div`
  margin: 60px 0 0;
  padding: 60px 0px 60px 0;
  border-top: 1px solid #e5e5e5;
`;

const Section = styled.section`
  text-align: left;

  h1 {
    font-size: 18px;
    color: #222222;
    span {
      color: #2fd8b7;
    }
  }
`;

const Form = styled.form`
  display: flex;
  div {
    img {
      width: 30px;
      height: 30px;
      margin: 5px 10px 0 0;
      border-radius: 100%;
    }
  }

  input {
    display: block;
    width: 80%;
    min-height: 38px;
    background: none;
    color: #424242;
    margin: 0;
    padding: 8px 15px 9px;
    font-family: inherit;
    font-size: 15px;
    line-height: 1.4;
    resize: none;
    overflow: hidden;
    box-sizing: border-box;

    border-radius: 7px 0px 0px 7px;
    border-top: 1px solid #dbdbdb;
    border-left: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
    border-right: none;

    &:focus {
      outline: none;
    }
  }

  button {
    padding: 10px 15px 9px 0px;
    border-radius: 0px 7px 7px 0px;
    border-left: none;
    border-top: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
    color: #2fd8b7;
    background: none;
    font-size: 15px;
    font-weight: 700;
  }
`;

const ButtonBlock = styled.div`
  display: flex;
  button {
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
`;

function Comments({
  comment,
  userData,
  timeDiffToday,
  commentInput,
  inputHandler,
  submitHandler,
  deleteHandler,
}) {
  return (
    <Block>
      <Section>
        <h1>
          댓글&nbsp;
          <span>{comment.length}</span>
        </h1>
        <Form action="submit" onSubmit={(event) => submitHandler(event)}>
          <div>
            <img src={userData.profileImg} alt="" />
          </div>
          <input
            type="text"
            placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다 :)"
            value={commentInput}
            onChange={(event) => inputHandler(event)}
          />
          <ButtonBlock>
            <button type="submit">등록</button>
          </ButtonBlock>
        </Form>
        <CommentList
          userData={userData}
          comment={comment}
          timeDiffToday={timeDiffToday}
          deleteHandler={deleteHandler}
        />
      </Section>
    </Block>
  );
}

export default Comments;
