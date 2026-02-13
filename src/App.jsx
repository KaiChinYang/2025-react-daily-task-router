import "./App.css";
import {
  HashRouter,
  NavLink,
  Link,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";

const Home = () => {
  return <p>這是首頁</p>;
};
const Todo = () => {
  return (
    <div>
      <p>這是 Todo 頁面</p>
      <LogOut />
    </div>
  );
};
const Login = () => {
  const Location = useLocation();
  return (
    <div>
      <p>這是登入頁面</p>
      {JSON.stringify(Location)}
      {Location.state ? <p>{Location.state.id}</p> : <></>}
    </div>
  );
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};
const PAPAYA = () => {
  return <p>這是 PAPAYA 的地盤</p>;
};
const LogOut = () => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() =>
        navigate("/login", { state: { id: 123,dog:true },replace: true})
      }
    >
      登出
    </button>
  );
};

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/papaya">
            <p>拜訪PAPAYA</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/papaya" element={<PAPAYA />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
