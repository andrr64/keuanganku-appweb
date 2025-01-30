import { Outlet } from "react-router-dom";
import { ReactNode } from "react";

interface GetUserdataRouteProps {
  children?: ReactNode;
}

const GetUserdataRoute = ({ children }: GetUserdataRouteProps) => {
  return children ? <>{children}</> : <Outlet />;
};

export default GetUserdataRoute;
