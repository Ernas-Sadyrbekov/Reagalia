import "./App.css";
import Header from "./components/Header/Header";
import Logo from "./components/Header/logo-v1.svg";
function App() {

  return (
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

  );
}

export default App;
