import './App.css';
import DisplayList from './components/dashboard/DisplayList';
import Addstd from './components/students/Addstd';
import Editstd from './components/students/Editstd';
import PageNotFound from './components/students/PageNotFound';
import {BrowserRouter,Route,Switch,NavLink} from "react-router-dom";
import { ChakraProvider,Container,Text} from "@chakra-ui/react";


function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <h1>Student Management tool</h1>
      </header>
      <ChakraProvider>  
      <BrowserRouter>
      <Switch>
          <Route exact path="/" component={DisplayList} />
          <Route exact path="/add" component={Addstd} />
          <Route exact path="/edit/:id" component={Editstd} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
    </BrowserRouter>
    </ChakraProvider>
    </div>
  );
}

export default App;
