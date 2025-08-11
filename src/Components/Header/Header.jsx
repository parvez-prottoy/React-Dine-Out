import logo from "../../assets/logo.svg";
const Header = () => {
  return (
    <header>
      <nav class="bg-navbg rounded-full mt-4 px-8 py-3 flex justify-left items-center">
        <div class="flex items-center ">
          <div class="text-primary mr-2">
            <img src={logo} />
          </div>
          <h1 class="text-2xl font-bold">
            <span class="text-primary">Dine</span>Out
          </h1>
        </div>
      </nav>
    </header>
  );
};

export default Header;
