import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/main/Header";
import Home from "./components/main/Home";
import store from "./store/store";
import {Provider} from "react-redux";

function App() {
  return (
   <Provider store={store}>
     <Router>
       <Header/>
       <div className={"container"}>
         <Routes>
           <Route path={"/"} element={<Home/>}/>
             <Route path={"/food/food_detail/:fno"} element={<FoodDetail/>}/>
             <Route path={"/recipe/recipe_list"} element={<RecipeList/>}/>
         </Routes>
       </div>
     </Router>
   </Provider>
  );
}

export default App;
