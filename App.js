import React from "react";

const games = [
  { id: 1, name: "World of Warcraft", image: "https://i.ibb.co/NZFK7TX/wow.jpg", offers: 342 },
  { id: 2, name: "CS:GO", image: "https://i.ibb.co/rd3Kw1m/csgo.jpg", offers: 210 },
  { id: 3, name: "GTA V", image: "https://i.ibb.co/xY8Cvj6/gtav.jpg", offers: 125 },
  { id: 4, name: "Dota 2", image: "https://i.ibb.co/ZHj90KX/dota2.jpg", offers: 98 },
];

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">FanPay Clone</h1>
          <input
            type="text"
            placeholder="Поиск игр, товаров..."
            className="border rounded-lg px-4 py-2 w-1/3"
          />
          <div className="space-x-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Войти</button>
            <button className="px-4 py-2 bg-gray-200 rounded-lg">Регистрация</button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-xl font-bold mb-4">Популярные игры</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-2 cursor-pointer"
            >
              <img
                src={game.image}
                alt={game.name}
                className="w-full h-32 object-cover rounded-lg"
              />
              <h3 className="mt-2 text-lg font-semibold">{game.name}</h3>
              <p className="text-sm text-gray-500">{game.offers} предложений</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;