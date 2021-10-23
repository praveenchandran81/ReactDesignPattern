
import './App.css';
import { AppUserInfo } from './ContainerComponents/CurrentUserLoaderComponent/App';
import { AppControlled } from './ControlledAndUnControlled/AppControlled';
import { AppCustomHooks } from './CustomHooks/AppCustomHooks';
import { AppHOC } from './HOC/AppHOC';
import { AppHOCAdvanced } from './HOC/HOC-Advanced/AppHOCAdvanced';
import { LayoutApp } from './LayoutComponents/LayoutApp';
import { ListItemApp } from './ListAndListItems/ListItemApp';
import { ModalApp } from './ModalComponents/ModalApp';
import { AppCOBF } from './OnBoardingFlow/Controlled/AppCOBF';
import { AppUOBF } from './OnBoardingFlow/UncontrolledOnBoardingFlow/AppUOBF';

function App() {
  return (
    <div className="App">
      {/* <LayoutApp/> */}
      {/* <ListItemApp/> */}
      {/* <ModalApp/> */}
      {/* <AppUserInfo/> */}
      {/* <AppControlled/> */}
      {/* <AppUOBF/> */}
      {/* <AppCOBF/> */}
      {/* <AppHOC/> */}
      {/* <AppHOCAdvanced/> */}
      <AppCustomHooks/>
    </div>
  );
}

export default App;
