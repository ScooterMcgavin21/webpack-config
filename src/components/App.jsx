import "../styles/index.scss";
import Recipies from "./Recipes";
import Whatever from "./Whatever";



const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
          <section>
            <h1>Oh Hai, React</h1>
          </section>
          <Recipies />
          <Whatever />
      </main>
    </>
  );
};

export default App;