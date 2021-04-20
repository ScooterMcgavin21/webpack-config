import "../styles/index.scss";
import Recipies from "./Recipes";



const App = () => {
  return (
    <>
      <section className="hero"></section>
        <main>
          <section>
            <h1>Oh Hai, React</h1>
          </section>
        </main>
        
        <Recipies />
    </>
  );
};

export default App;