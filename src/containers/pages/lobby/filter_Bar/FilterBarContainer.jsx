import React, { useState } from 'react';
import FilterBarBlock from '../../../../components/pages/lobby/filter_Bar/FilterBarBlock';

function FilterBarContainer() {
  // eslint-disable-next-line no-unused-vars
  const [openModal, setOpenModal] = useState({
    sort: false,
    housingType: false,
    space: false,
    roomSize: false,
    color: false,
  });

  const modalHandler = (state, area) => {
    if (state === 'open') {
      setOpenModal({ ...openModal, [area]: true });
    } else {
      setOpenModal({ ...openModal, [area]: false });
    }
  };
  return (
    <>
      <FilterBarBlock
        modalHandler={modalHandler}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </>
  );
}

export default FilterBarContainer;
