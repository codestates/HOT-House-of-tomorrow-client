/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import styled from 'styled-components';

const Comments = styled.ul`
  list-style: none;
`;

const Image = styled.img`
  width: 30px;
  border-radius: 100%;
  position: absolute;
  padding: -118px;
  left: 15px;
`;

const List = styled.li`
  article {
    p {
      display: flex;
      align-items: flex-start;
      margin-bottom: 5px;
      span {
        font-weight: 500;
        color: #515151;
        font-size: 15px;
      }

      a {
        text-decoration: none;
        display: flex;
        align-items: flex-start;
        margin-right: 10px;

        span {
          font-weight: 700;
          color: #424242;
        }
      }
    }
  }
`;

const Footer = styled.footer`
  margin-right: 10px;
  span {
    font-size: 13px;
    font-weight: 400;
    color: #767676;
  }
  span::after {
    display: inline-block;
    color: rgb(189, 189, 189);
    content: '·';
    font-size: 13px;
    font-weight: 400;
    margin: 0px 5px;
  }
  button {
    font-size: 13px;
    font-weight: 900;
    background: none;
    border: none;
    padding: 0;
    color: #767676;
  }
`;

function CommentList({ comment, timeDiffToday }) {
  useEffect(() => {
    console.log(comment);
  }, [comment]);

  const comments =
    comment.length > 1
      ? comment.map((data) => (
          // eslint-disable-next-line react/jsx-indent
          <Comments key={data.date}>
            <List>
              <article>
                <p>
                  <a href="/">
                    <Image src={data.User.profileImg} alt="profileImage" />
                    <span>{data.User.nickname}</span>
                  </a>
                  <span>{data.comment}</span>
                </p>
                <Footer>
                  <span>{timeDiffToday(data.date)}</span>
                  <button type="button">답글</button>
                </Footer>
              </article>
            </List>
          </Comments>
        ))
      : null;
  return <>{comments}</>;
}

export default CommentList;
