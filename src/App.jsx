import "./App.css";

const menuData = [
  {
    id: 1,
    name: "Nasi Goreng",
    image: "nasi-goreng.png",
    description: "Fried rice with egg, chicken, and sweet soy sauce.",
    price: 12000,
    soldOut: false,
  },
  {
    id: 2,
    name: "Rendang",
    image: "rendang.jpg",
    description: "Spicy slow-cooked beef in coconut milk and spices.",
    price: 17000,
    soldOut: false,
  },
  {
    id: 3,
    name: "Gado-gado",
    image: "gado-gado.png",
    description: "Vegetable salad with peanut dressing and boiled egg.",
    price: 8000,
    soldOut: false,
  },
  {
    id: 4,
    name: "Soto Ayam",
    image: "soto-ayam.png",
    description:
      "Chicken soup with turmeric broth, vermicelli, cabbage, and egg.",
    price: 15000,
    soldOut: false,
  },
  {
    id: 5,
    name: "Bakso",
    image: "bakso.jpg",
    description:
      "Meatball soup with noodles, tofu, boiled egg, and savory broth.",
    price: 10000,
    soldOut: false,
  },
  {
    id: 6,
    name: "Sate Ayam",
    image: "sate-ayam.jpg",
    description: "Grilled chicken skewers with peanut sauce.",
    price: 14000,
    soldOut: true,
  },
];

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
        {menuData.map((menu) => (
          <MenuCard key={menu.id} menuData={menu} />
        ))}
      </div>
    </main>
  );
}

function MenuCard({ menuData }) {
  return (
    <div className="menu-item">
      <img src={menuData.image} alt={menuData.name} />
      <h3>{menuData.name}</h3>
      <p>{menuData.description}</p>
      <p className="price">{menuData.price}</p>
    </div>
  );
}

export default App;
