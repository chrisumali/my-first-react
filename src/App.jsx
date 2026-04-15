/*All imports that starts with 'use' are react hooks
all react hooks must be called only inside react components or other react hooks*/



import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;

/*
 * Rules of hooks:
 * Only call hooks inside of component functions
 * Only call hooks on the top level
 */
