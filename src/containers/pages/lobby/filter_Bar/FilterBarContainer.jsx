import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FilterBarBlock from '../../../../components/pages/lobby/filter_Bar/FilterBarBlock';
import FilterModalContainer from './FilterModalContainer';
import { typeChangeTab } from '../../../../modules/config/filterTabText';
import { tabList } from '../../../../data/lobby/filter_bar/tabList';

function FilterBarContainer() {
  const [openModal, setOpenModal] = useState({});

  const dispatch = useDispatch();

  const modalHandler = (state, area) => {
    if (state === 'open') {
      setOpenModal({
        sort: false,
        housingType: false,
        space: false,
        roomSize: false,
        color: false,
        [area]: true,
      });
      dispatch(typeChangeTab(tabList[area], area));
    } else {
      setOpenModal({ ...openModal, [area]: false });
    }
  };
  return (
    <>
      <FilterBarBlock
        modalHandler={modalHandler}
        openModal={openModal}
        FilterModalContainer={FilterModalContainer}
      />
    </>
  );
}

export default FilterBarContainer;
