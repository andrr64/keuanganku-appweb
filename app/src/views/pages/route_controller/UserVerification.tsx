import { Navigate, Outlet } from "react-router-dom";
import { ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { userVerif } from "../../../controllers/user";
import { userLogout } from "../../../redux/slices/user";
import LoadingModal from "../../modals/LoadingModal";

interface UserVerifProps {
  children?: ReactNode;
}

const UserVerificationRC = ({ children }: UserVerifProps) => {
  const user = useSelector((state: RootState) => state.user);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const verifUser = async () => {
    const ctrlResponse = await userVerif();
    if (!ctrlResponse.is_success){
      setLoading(false);
      console.log("Invalid token");
      dispatch(userLogout());
    } else {
      setLoading(false);
      console.log("Token valid");
    }
  }

  useEffect(() => {
    verifUser()
  }, []);
  if (loading){
    return <>
      <LoadingModal open={loading}/>
    </>
  }
  if (!user.username) {
    return <Navigate to="/login" replace />;
  }
  return children ? <>{children}</> : <Outlet />;
};

export default UserVerificationRC;