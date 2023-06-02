import { Routes, BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Login from "./components/Login";
import { Provider } from "react-redux";
import store from "./redux/store";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Register from "./components/Register";
import Posts from "./pages/Posts";
import Header from './components/Header'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Detail from "./pages/Detail";
import Search from "./components/Search";

function App() {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />}/>
            <Route path="/posts" element={<Posts />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/search" element={<Search />} />
          </Routes>
          <ToastContainer theme="colored"/>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </Provider>
  );
}

export default App;
