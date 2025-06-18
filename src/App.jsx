import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
    </div>
  );
}

function Header() {
  return (
    <header>
      <div className="header-content">
        <div className="logo">IR</div>
        <h1>Indonesian Resto</h1>
      </div>
    </header>
  );
}

export default App;
