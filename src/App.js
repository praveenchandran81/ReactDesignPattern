
import './App.css';
import { AppUserInfo } from './ContainerComponents/CurrentUserLoaderComponent/App';
import { AppControlled } from './ControlledAndUnControlled/AppControlled';
import { LayoutApp } from './LayoutComponents/LayoutApp';
import { ListItemApp } from './ListAndListItems/ListItemApp';
import { ModalApp } from './ModalComponents/ModalApp';

function App() {
  return (
    <div className="App">
      {/* <LayoutApp/> */}
      {/* <ListItemApp/> */}
      <ModalApp/>
      {/* <AppUserInfo/> */}
      {/* <AppControlled/> */}
    </div>
  );
}

export default App;
