import logo from "../assets/images/logo.png";

export const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-full bg-[#20ba59] p-6">
      <img className="w-20" src={logo} alt="Logo" />
      <div>Menu</div>
    </div>
  );
};
