// components/ProtectedRoute.tsx
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const ProtectedRoute = () => {
  // Ambil state user dari Redux
  const user = useSelector((state: RootState) => state.user);

  // Jika user.username kosong, alihkan ke halaman login
  if (!user.username) {
    return <Navigate to="/login" replace />;
  }

  // Jika user sudah login, tampilkan child route
  return <Outlet />;
};

export default ProtectedRoute;