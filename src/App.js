import './App.css';
import CounterClickWithUseStateHook from './components/CounterClickWithUseStateHook';
import CounterClickWithoutHook from './components/CounterClickWithoutHook';

function App() {
  return (
    <div>
      <h1>Btn using react hook - useState</h1>
      <CounterClickWithUseStateHook/>

      <h1>Btn without using react hook</h1>
      <CounterClickWithoutHook />
    </div>
  );
}

export default App;
