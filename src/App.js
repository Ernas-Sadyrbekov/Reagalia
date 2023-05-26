import "./App.css";

function App() {
  //const pathname = window.location.pathname;

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
