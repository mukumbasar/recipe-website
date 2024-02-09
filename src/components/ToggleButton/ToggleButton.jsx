import React, { useState } from 'react';

function ToggleButton() {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button onClick={handleClick}>
      {isToggled ? 'On' : 'Off'}
    </button>
  );
}

export default ToggleButton;
