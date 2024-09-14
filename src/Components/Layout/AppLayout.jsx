import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Loading } from "./Loading";

const AppLayout = () => {

  const navigate = useNavigation();
  if(navigate.state === 'loading') return <Loading/>;
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
};

export default AppLayout;