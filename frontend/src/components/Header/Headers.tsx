import MainHeader from "./MainHeader";
import NavigationHeader from "./NavigationHeader";
import SecondHeader from "./SecondHeader";

function Headers() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background">
      {/* <MainHeader /> */}
      <SecondHeader />
      <NavigationHeader />
    </header>
  );
}

export default Headers;
