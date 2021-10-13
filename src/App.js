
import './App.css';
import { AppUserInfo } from './ContainerComponents/CurrentUserLoaderComponent/App';
import { LayoutApp } from './LayoutComponents/LayoutApp';
import { ListItemApp } from './ListAndListItems/ListItemApp';
import { ModalApp } from './ModalComponents/ModalApp';

function App() {
  return (
    <div className="App">
      {/* <LayoutApp/> */}
      {/* <ListItemApp/> */}
      {/* <ModalApp/> */}
      <AppUserInfo/>
    </div>
  );
}

export default App;
