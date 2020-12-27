import React, { useState } from 'react';
import HeaderRightSide from '../../../../components/systems/Header/rightSide/HeaderRightSide';

function HeaderRightSideContainer() {
  const [openDropDown, setOpenDropDown] = useState(false);
  const dropDownHandler = () => {
    setOpenDropDown(!openDropDown);
  };

  // * ========================
  // *   RIGHT_SIDE_BTN_HANDLER
  // * ========================
  const onProfileHandler = () => {
    console.log('profile');
    dropDownHandler();
  };
  const onSavedHandler = () => {
    console.log('saved');
    dropDownHandler();
  };
  const onSettingHandler = () => {
    console.log('setting');
    dropDownHandler();
  };
  const onLogOutHandler = () => {
    console.log('logout');
    dropDownHandler();
  };

  return (
    <HeaderRightSide
      openDropDown={openDropDown}
      setOpenDropDown={setOpenDropDown}
      dropDownHandler={dropDownHandler}
      onProfileHandler={onProfileHandler}
      onSavedHandler={onSavedHandler}
      onSettingHandler={onSettingHandler}
      onLogOutHandler={onLogOutHandler}
    />
  );
}

export default HeaderRightSideContainer;
