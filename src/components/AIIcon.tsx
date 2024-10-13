import React from 'react';
import aiIcon from '../ai-icon.svg';
interface AIIconProps {
  onClick: () => void;
}

const AIIcon: React.FC<AIIconProps> = ({ onClick }) => {
  return (
    <button className="ai-icon-button" onClick={onClick}>
      <img src={aiIcon} alt="AI" className="ai-icon" />
    </button>
  );
};

export default AIIcon;

