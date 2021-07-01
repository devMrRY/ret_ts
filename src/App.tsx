import { BrowserRouter } from 'react-router-dom';
import Toastr from './components/common/Toastr';
import Routes from './Routes/index';

function App() {
  return (
    <div className="App">
      <Toastr />
      <BrowserRouter
        basename="/app/ts"
        forceRefresh={false}
      >
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
