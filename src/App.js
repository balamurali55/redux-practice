import { Provider } from 'react-redux';
import './App.css';
import { store } from './Store';
import Users from './Components/Users';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <center>
       <Provider store={store}>
       <Users />
       </Provider>
    </center>
    );
}

export default App;
