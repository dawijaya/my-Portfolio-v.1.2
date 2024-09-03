import React from "react";

const LanguageSelection: React.FC = () => {
  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('https://source.unsplash.com/random')` }}>
      <div className="bg-black bg-opacity-50 p-8 rounded-lg text-white text-center w-80">
        <h2 className="text-lg font-semibold mb-2">Silahkan Pilih Bahasa 💎</h2>
        <p className="text-sm mb-6">Please select language 🌐</p>

        <button className="w-full mb-4 py-2 bg-blue-500 rounded-full flex items-center justify-center">
          Indonesia 🇮🇩
        </button>

        <button className="w-full mb-4 py-2 bg-blue-500 rounded-full flex items-center justify-center">
          English 🇬🇧
        </button>

        <button className="w-full py-2 bg-blue-700 rounded-full flex items-center justify-center">
          🛠️ Pusat bantuan <span className="text-xs">( help center )</span>
        </button>
      </div>
    </div>
  );
};

export default LanguageSelection;
