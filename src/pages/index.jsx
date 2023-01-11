import "../styles/App.css";
import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import FloatButton from "../components/FloatButton";

function App() {
  let popButton = document.getElementById("float-button");

  window.onscroll = function () {
    autoHide();
  };

  const autoHide = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      popButton.style.display = "block";
    } else {
      popButton.style.display = "none";
    }
  };

  return (
    <div className="App w-full">
      <Home />
      <About />
      <Projects />
      <FloatButton />
    </div>
  );
}

export default App;
