import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter
        basename="/app/scoobs"
        forceRefresh={false}
      >
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
