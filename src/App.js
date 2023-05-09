import Navigation from './navigation/navigation.component'
import Home from './home/home.component'
import { Route, Routes} from 'react-router-dom';
import SignIn from './sign-in/sign-in.component';


 
const Shop = () => {
  return <h1>This is shop</h1>
}   

const App = () => {
  
  return (
    <Routes>
    <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='sign-in' element={<SignIn/>}/>
    </Route>   
</Routes>
  );
}

export default App;
