import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
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

function Menu() {
  return (
    <main>
      <h2 className="menu-title">Today's Menu 🍽️</h2>
      <p>
        Welcome to <strong>Indonesian Resto</strong>! We serve authentic
        Indonesian cuisine — from savory street food to comforting traditional
        soups. Explore today's menu below.
      </p>
      <div className="menu-grid">
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </div>
    </main>
  );
}

function MenuCard() {
  return (
    <div className="menu-item">
      <img src="bakso.jpg" alt="Bakso" />
      <h3>Bakso</h3>
      <p>Meatball soup with noodles, tofu, boiled egg, and savory broth.</p>
      <p>10000</p>
    </div>
  );
}

export default App;
