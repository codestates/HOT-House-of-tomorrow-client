import React from 'react';
import { MdCancel } from 'react-icons/md';

function Tag({ tag }) {
  return (
    <>
      <li>
        <button type="button">
          <span>
            <strong>{tag}</strong>
            <MdCancel />
          </span>
        </button>
      </li>
    </>
  );
}

export default Tag;
