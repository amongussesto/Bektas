import './App.css';
import Header from "./components/header"
import Main from "./components/main"
import  Footer from './components/footer';
import secondPage from './components/secondPage';
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <div className="Container">
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Main></Main>}/>
            <Route path="/secondPage" element={<secondPage></secondPage>}/>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
        
      </div>
    </div>
  );
}

export default App;
