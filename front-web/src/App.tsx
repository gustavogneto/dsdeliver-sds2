import './App.css';
import Hello from './Hello';
import Counter from './Counter';
   /**Componente */
function App() {
  return (
    <div>
      <Counter />
     <Hello message="Gustavo Gomes"/> 
     <Hello message="marquer"/> 
     <Hello message="lust"/>
    </div>
  );
}

export default App;
