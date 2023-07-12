import { Header } from "./styles";

import Image from "next/image";

import logo from "../../../public/images/logo.png";

const HeaderComponent = () => {
  return (
    <Header>
      <div className="image-holder">
        <Image src={logo} alt="logo" width={200} height={80} />
      </div>
    </Header>
  );
};

export default HeaderComponent;
