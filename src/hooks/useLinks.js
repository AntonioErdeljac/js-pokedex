import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';

export default () => {
  const location = useLocation();
  const isActive = useCallback((path) => location.pathname === path, [location.pathname]);

  return { isActive };
};
