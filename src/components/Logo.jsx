import logo from "../assets/images/logo.svg";

const Logo = () => {
  return (
    <img
      src={logo}
      alt="jobster logo"
      className="logo"
      width={"25px"}
      height={"25px"}
    />
  );
};
export default Logo;
