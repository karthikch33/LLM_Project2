import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Connections from './components/pages/Connections/SideBar/Connections';
import FlatFile from './components/pages/Connections/FlatFile/flatFile';
import Layouter from './components/pages/WorkSpace/SideBar/Layouter';
import Project from './components/pages/Project/SideBar/Project';
import CreateProject from './components/pages/Project/CreateProject';
import DeleteProject from './components/pages/Project/DeleteProject';
import EditProject from './components/pages/Project/EditProject';
import ReadProject from './components/pages/Project/ReadProject';
import MainScreen from './components/pages/MainScreen/MainScreen';
import MySqlForm from './components/pages/Connections/Forms/MySqlForm';
import HanaForm from './components/pages/Connections/Forms/HanaForm';
import ErpForm from './components/pages/Connections/Forms/ErpForm';
import OracleForm from './components/pages/Connections/Forms/OracleForm';
import ViewConnection from './components/pages/Connections/ViewConnections/ViewConnection';


function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            {/* MainScreen Route*/}
            <Route path="/" element={<MainScreen/>} />

            {/* Project Routes */}
            <Route path='/project' element={<Project/>} >
            <Route path='createproject' element={<CreateProject/>}/>
            <Route path='editproject' element={<EditProject/>}/>
            <Route path='deleteproject' element={<DeleteProject/>}/>
            <Route path='readproject' element={<ReadProject/>}/>
            </Route>

            {/* Connections Routes */}
            <Route path="/connections" element={<Connections/>}>
              <Route path='mysql' element={<MySqlForm/>}/>
              <Route path='hana' element={<HanaForm/>}/>
              <Route path='erp' element={<ErpForm/>}/>
              <Route path='oracle' element={<OracleForm/>}/>
              <Route path='flatfile' element={<FlatFile/>} />
              <Route path='view-connections' element={<ViewConnection/>} />
            </Route>


            
            {/* Workspace Routes*/}
            <Route path="/workspace" element={<Layouter/>}>
                
            </Route>
            
          </Routes>

        </BrowserRouter>
    </>
  );
}

export default App;
