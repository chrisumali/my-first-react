import  Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import { CORE_CONCEPTS } from './data.js';
import TabButton from './components/TabButton.jsx';

function App() {
  function handleSelect(selectedButton){
    //selectedButton => 'components', 'jsx', 'props', 'state'
    console.log(selectedButton + ' - Selected');
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image} />
          </ul>
        </section>
        <section id='examples'>
          <h2>Example</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Component</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          Dynamic Content
        </section>
      </main>
    </div>
  );
}

export default App;