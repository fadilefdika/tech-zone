import React from 'react';

interface ButtonSidebarProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

const ButtonSidebar: React.FC<ButtonSidebarProps> = ({ label, onClick, className }) => {
  return (
    <div className="button-sidebar">
      <button className={className} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default ButtonSidebar;
