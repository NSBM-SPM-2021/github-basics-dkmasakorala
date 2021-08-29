
import NavBar from './component/NavBar';
import Codeforinterview from './component/Codeforinterview';
import Allusers from './component/Allusers';
import Adduser from './component/Adduser';
import Notfound from './component/Notfound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Switch>
    <Route exact path="/" component={Codeforinterview} />
    <Route exact path="/all" component={Allusers} />
    <Route exact path="/add" component={Adduser} />
    <Route component={Notfound} />
    </Switch>
    </BrowserRouter>

    
  
    
    
  );
}

export default App;
