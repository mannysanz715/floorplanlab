import LivingRoom from './LivingRoom';
import Bath from './Bath';
import Bedroom from './Bedroom';
import Kitchen from './Kitchen';

import './App.css';

function App() {
  return (
    <div className="App">
      <Kitchen />
      <LivingRoom />
      <Bedroom bedNum={1}/>
      <Bath bathNum={2}/>
      <Bedroom bedNum={2}/>
      <Bath bathNum={1}/>
      <Bedroom bedNum={3}/>
    </div>
  );
}

export default App;
