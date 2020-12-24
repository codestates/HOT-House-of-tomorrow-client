import React, { useCallback, useEffect, useRef, useState } from 'react';
import ProfileMenu from '../../../components/systems/Header/ProfileMenu';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function ProfileMenuContainer({ trigger }) {
  const menuRef = useRef(null);
  const [position, setPosition] = useState({});
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const getTriggerBounding = useCallback(() => {
    if (!windowDimensions) {
      return false;
    }
    const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = trigger;
    return {
      width: offsetWidth,
      height: offsetHeight,
      left: offsetLeft,
      top: offsetTop,
    };
  }, [windowDimensions, trigger]);
  const [triggerBounding, setTriggerBounding] = useState(getTriggerBounding());

  useEffect(() => {
    setTriggerBounding(getTriggerBounding());
  }, [getTriggerBounding]);

  useEffect(() => {
    if (!menuRef.current) {
      return;
    }
    setPosition({
      left:
        triggerBounding.left +
        triggerBounding.width / 2 -
        menuRef.current.offsetWidth / 2,
      top: triggerBounding.top + triggerBounding.height / 2 + 30,
    });
  }, [triggerBounding]);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <ProfileMenu
      triggerBounding={triggerBounding}
      position={position}
      trigger={trigger}
      menuRef={menuRef}
    />
  );
}

export default ProfileMenuContainer;
