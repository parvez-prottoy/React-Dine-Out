import logo from "../../assets/logo.svg";
const Header = () => {
  return (
    <header>
      <nav className="bg-navbg rounded-full mt-4 px-8 py-3 flex justify-left items-center">
        <div className="flex items-center ">
          <div className="text-primary mr-2">
            <img src={logo} />
          </div>
          <h1 className="text-2xl font-bold">
            <span className="text-primary">Dine</span>Out
          </h1>
        </div>
      </nav>
    </header>
  );
};

export default Header;
