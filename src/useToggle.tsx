import { useState } from 'react';

export const useToggle = (initialState: boolean = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggle = () => setIsOpen((isOpen) => !isOpen);

  return [isOpen, toggle] as const;
};
