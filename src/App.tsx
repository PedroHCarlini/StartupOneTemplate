import { Body } from "./components/body";
import { Footer } from "./components/footer";
import { NavBar } from "./components/nav-bar";

function App() {
  return (
    <div className="w-full h-[100vh] overflow-y-scroll">
      <NavBar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
