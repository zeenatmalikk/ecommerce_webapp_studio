import logo from './logo.svg';
import './App.css';
import Header from './screens/Header';
import { Introduction } from './screens/Introduction';
import Marketing from './screens/Marketing';
import { Growithus } from './screens/Growithus';
import { Review } from './screens/Review';
import { Different } from './screens/Different';
import { Review2 } from './screens/Review2';
import { Whychooseus } from './screens/Whychooseus';
import { Webcheckup } from './screens/Webcheckup';
import { Footer } from './screens/Footer';




function App() {
  return (
    <div >
     <Header/>
     <Introduction/>
     <Marketing/>
     <Growithus/>
     <Review/>
     <Different/>
     <Review2/>
     <Whychooseus/>
     <Webcheckup/>
     <Footer/>
    </div>
  );
}

export default App;
