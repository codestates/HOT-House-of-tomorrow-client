import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import FilterModal from '../../../../components/pages/lobby/filter_Bar/FilterModal';

function FilterModalContainer({ modalHandler, tab }) {
  const { currentTab } = useSelector(({ config }) => ({
    currentTab: config.currentTab,
  }));
  const listArray = Object.keys(currentTab);

  const innerTextList = listArray.map((ele) => <li key={ele}>{ele}</li>);
  return (
    <>
      <FilterModal
        modalHandler={modalHandler}
        tab={tab}
        innerTextList={innerTextList}
      />
    </>
  );
}

//* PROP_TYPES
FilterModalContainer.defaultProps = {
  modalHandler: () => null,
  tab: 'default',
};
FilterModalContainer.propTypes = {
  modalHandler: PropTypes.func,
  tab: PropTypes.string,
};

export default FilterModalContainer;
