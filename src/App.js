import './App.css';
import { Provider } from 'react-redux';
import store from './store'
import ListTask from './componnets/ListTask'

function App() {

  return (
    <Provider store={store}>
      <div className='px-0'>
      <ListTask/></div>
    </Provider>
  );
}

export default App;
