import React from 'react';

function Tag({ tag }) {
  return (
    <>
      <li>
        <button type="button">
          <span>
            <strong>{tag}</strong>
          </span>
        </button>
      </li>
    </>
  );
}

export default Tag;
