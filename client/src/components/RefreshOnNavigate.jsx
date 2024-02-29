import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RefreshOnNavigate = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      const handleBeforeUnload = () => {
        window.location.reload();
      };

      window.addEventListener('beforeunload', handleBeforeUnload);

      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }
  }, [location]);

  return null;
};

export default RefreshOnNavigate;
