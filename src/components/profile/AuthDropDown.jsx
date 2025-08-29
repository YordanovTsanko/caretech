import React from "react";
import { FaUser, FaLock, FaEnvelope, FaFacebook, FaGoogle } from "react-icons/fa";

const AuthDropDown = () => {
  return (
    <div className="bg-background rounded-lg shadow-lg p-6 w-full max-w-md mx-auto">
      {/* Login */}
      <h2 className="text-center text-primary text-lg font-semibold mb-4">Вход</h2>
      <div className="flex gap-2 mb-2">
        <div className="flex items-center border border-gray-300 rounded px-2 w-1/2">
          <FaEnvelope className="text-gray-400 mr-2" />
          <input
            type="email"
            placeholder="E-Mail адрес"
            className="outline-none text-white w-full py-1 bg-transparent text-sm"
          />
        </div>
        <div className="flex items-center border border-gray-300 rounded px-2 w-1/2">
          <FaLock className="text-gray-400 mr-2" />
          <input
            type="password"
            placeholder="Парола"
            className="outline-none text-white w-full py-1 bg-transparent text-sm"
          />
        </div>
      </div>
      <div className="flex items-center justify-between text-xs mb-3">
        <a href="/forgotten-password" className="text-primary hover:underline">
          Забравена парола
        </a>
        <label className="flex items-center gap-1 text-primary">
          <input type="checkbox" className="accent-primary" />
          Запомни ме
        </label> 
      </div>
      <button className="w-full bg-primary text-white py-2 rounded mb-3 hover:bg-primary/90 transition">
        Вход
      </button>
      <div className="text-center text-primary text-xs mb-3">ИЛИ</div>
      <div className="flex gap-2 mb-4">
        <button className="flex-1 flex items-center justify-center bg-blue-600 text-white py-1 rounded hover:bg-blue-700 transition">
         <FaFacebook className="mr-2" /> Facebook
        </button>
        <button className="flex-1 flex items-center justify-center text-white bg-white py-1 bg-[#EA4335] rounded hover:bg-[#EA4335]/90 transition">
         <FaGoogle className="mr-2" /> Google
        </button>
      </div>

      {/* Register */}
      <h2 className="text-center font-semibold text-primary mb-4 border-t pt-4">Нов профил</h2>
      <div className="grid grid-cols-2 gap-2 mb-2">
        <div className="flex items-center border border-gray-300 rounded px-2">
          <FaUser className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Име"
            className="outline-none text-white w-full py-1 bg-transparent text-sm"
          />
        </div>
        <div className="flex items-center border border-gray-300 rounded px-2">
          <FaLock className="text-gray-400 mr-2" />
          <input
            type="password"
            placeholder="Парола"
            className="outline-none text-white w-full py-1 bg-transparent text-sm"
          />
        </div>
        <div className="flex items-center border border-gray-300 rounded px-2">
          <FaUser className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Фамилия"
            className="outline-none text-white w-full py-1 bg-transparent text-sm"
          />
        </div>
        <div className="flex items-center border border-gray-300 rounded px-2">
          <FaLock className="text-gray-400 mr-2" />
          <input
            type="password"
            placeholder="Повтори парола"
            className="outline-none text-white w-full bg-transparent py-1 text-sm"
          />
        </div>
      </div>
      <div className="flex items-center border border-gray-300 rounded px-2 mb-2">
        <FaEnvelope className="text-gray-400 mr-2" />
        <input
          type="email"
          placeholder="E-Mail адрес"
          className="outline-none text-white w-full py-1 bg-transparent text-sm"
        />
      </div>
      <button className="w-full bg-primary text-white py-2 rounded mb-2 hover:bg-primary/90 transition">
        Регистрация
      </button>
      <label className="flex items-center gap-2 text-xs text-primary">
        <input type="checkbox" className="accent-primary" />
        Съгласявам се да получавам рекламни съобщения
      </label>
    </div>
  );
};

export default AuthDropDown;
