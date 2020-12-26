import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import FilterModal from '../../../components/systems/filter_Bar/FilterModal';
import { typeGetFilterCards } from '../../../modules/pages/lobby/cards';

function FilterModalContainer({ modalHandler, tab }) {
  const dispatch = useDispatch();
  const {
    currentTab,
    currentTabArea,
    currentQuery,
    currentQueryTab,
  } = useSelector(({ config, cards }) => ({
    currentTab: config.currentTab,
    currentTabArea: config.currentTabArea,
    currentQuery: cards.currentQuery,
    currentQueryTab: cards.currentQueryTab,
  }));
  const listArray = Object.keys(currentTab);
  const FilterSelectHndler = (option) => {
    dispatch(
      typeGetFilterCards(
        currentTabArea,
        currentTab[option],
        currentQuery,
        currentQueryTab
      )
    );
  };

  const innerTextList = listArray.map((ele) => (
    <li key={ele}>
      <button
        type="button"
        onClick={() => FilterSelectHndler(ele)}
        style={{
          background: 'none',
          border: 'none',
          width: '100%',
          textAlign: 'left',
          height: '40px',
          padding: '10px ',
          fontSize: '15px',
          fontWeight: '400',
          color: '#414141',
          outline: 'none',
        }}
      >
        {ele}
      </button>
    </li>
  ));
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
