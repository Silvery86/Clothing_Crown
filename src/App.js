import Navigation from './navigation/navigation.component'
import Home from './home/home.component'
import { Route, Routes} from 'react-router-dom';
import Authentication from './authentication/authentication';
import Shop from './shop/shop.component';
import CheckOut from './check-out/check-out.component';




const App = () => {
  
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
          <Route index element={<Home />}/>
          <Route path='shop' element={<Shop/>}/>
          <Route path='sign-in' element={<Authentication/>}/>
          <Route path='check-out' element={<CheckOut/>}/>
      </Route>   
    </Routes>
  );
}

export default App;
