import { Provider } from 'react-redux';
import Home from './Components/Home';
import logo from './logo.svg';
import store from './redux/store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Home></Home>
      </Provider>
    </div>
  );
}

export default App;
