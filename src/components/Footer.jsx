import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaViber,
  FaInfoCircle,
  FaHandshake,
  FaQuestionCircle,
  FaTags,
  FaUsers,
  FaBriefcase,
  FaBlog,
  FaHeadset,
  FaCertificate,
  FaLaptop,
  FaDesktop,
  FaVideo,
  FaMicrochip,
  FaPlug,
  FaSnowflake,
  FaKeyboard,
  FaMouse,
  FaHeadphones,
} from "react-icons/fa";

// Info section links with icons
const infoLinks = [
  {
    name: "Контакти",
    href: "/contact",
    icon: <FaInfoCircle className="text-primary" />,
  },
  {
    name: "Нашите услуги",
    href: "/services",
    icon: <FaHandshake className="text-primary" />,
  },
  {
    name: "Как да поръчам",
    href: "/how-to-order",
    icon: <FaQuestionCircle className="text-primary" />,
  },
  {
    name: "Отстъпки и промоции",
    href: "/promotions",
    icon: <FaTags className="text-primary" />,
  },
  {
    name: "Партньори",
    href: "/partners",
    icon: <FaUsers className="text-primary" />,
  },
  {
    name: "Кариери",
    href: "/careers",
    icon: <FaBriefcase className="text-primary" />,
  },
  { name: "Блог", href: "/blog", icon: <FaBlog className="text-primary" /> },
  {
    name: "Поддръжка",
    href: "/support",
    icon: <FaHeadset className="text-primary" />,
  },
  {
    name: "Сертификати",
    href: "/certificates",
    icon: <FaCertificate className="text-primary" />,
  },
];

// Category section links with icons
const categoryLinks = [
  {
    name: "Лаптопи",
    href: "/laptops",
    icon: <FaLaptop className="text-primary" />,
  },
  {
    name: "Компютри",
    href: "/pcs",
    icon: <FaDesktop className="text-primary" />,
  },
  {
    name: "Видеокарти",
    href: "/graphics-cards",
    icon: <FaVideo className="text-primary" />,
  },
  {
    name: "Дънни платки",
    href: "/motherboards",
    icon: <FaMicrochip className="text-primary" />,
  },
  {
    name: "Захранвания",
    href: "/power-supplies",
    icon: <FaPlug className="text-primary" />,
  },
  {
    name: "Охладители",
    href: "/coolers",
    icon: <FaSnowflake className="text-primary" />,
  },
  {
    name: "Клавиатури",
    href: "/keyboards",
    icon: <FaKeyboard className="text-primary" />,
  },
  { name: "Мишки", href: "/mice", icon: <FaMouse className="text-primary" /> },
  {
    name: "Слушалки",
    href: "/headphones",
    icon: <FaHeadphones className="text-primary" />,
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-background px-10 lg:px-0">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 px-2 pt-6 pb-12 lg:px-32 gap-6">
        {/* Logo + Contacts */}
        <div>
          <img
            src="/logo.png"
            alt="caretech.bg logo"
            className="w-44 h-auto mx-auto md:mx-0"
          />
          <h2 className="text-md text-white mt-1 mb-5 text-center md:text-start">
            СВЪРЖИ СЕ С НАС:
          </h2>
          <p className="text-sm text-white mt-1 text-center md:text-start">
            📍 Адрес: гр.Враца, България
          </p>
          <p className="text-sm text-white mt-1 text-center md:text-start">
            📧 Email: info@caretech.bg
          </p>
          <p className="text-sm text-white mt-1 text-center md:text-start">
            📞 Телефон: +359 899 850 777
          </p>
          <div className="flex items-center gap-3 mt-6 justify-center md: justify-start">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="text-[#1da1f2] text-3xl cursor-pointer" />
            </a>
            <a
              href="https://www.viber.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Viber"
            >
              <FaViber className="text-[#6a1b9a] text-3xl cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-[#c13584] text-3xl cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Info links */}
        <div className="grid grid-cols-1 gap-4 sm:gap-0 sm:grid-cols-2 col-span-2">
          <div className="flex flex-col items-center md:items-end">
            <h2 className="text-md text-white md:self-center md:ms-3 mb-5">
              ИНФОРМАЦИЯ:
            </h2>
            <ul className="space-y-2 text-sm text-white">
              {infoLinks.map((link, i) => (
                <li key={i} className="flex items-center gap-2">
                  {link.icon}
                  <a href={link.href} className="hover:text-primary transition">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Category links */}
          <div className="flex flex-col items-center md:items-end">
            <h2 className="text-md text-white self-center md:ms-[70px] mb-5">
              КАТАЛОГ:
            </h2>
            <ul className="space-y-2 text-sm text-white">
              {categoryLinks.map((link, i) => (
                <li key={i} className="flex items-center gap-2">
                  {link.icon}
                  <a href={link.href} className="hover:text-primary transition">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Shippng */}
        <div className="flex flex-col items-center md:items-end">
          <h2 className="text-md text-white md:me-10 mb-5">ДОСТАВКА:</h2>
          <img
            src="/speedy-logo.jpg"
            alt="shipping"
            className="w-32 rounded-lg h-auto"
          />
          <h2 className="text-md text-white md:me-[25px] my-5">ПЛАЩАНИЯ :</h2>
          <div className="flex gap-2 flex-col md:me-[48px]">
            <img
              src="https://logos-world.net/wp-content/uploads/2020/05/Visa-Logo.png"
              alt="visa"
              className="w-20 object-fit p-2 rounded-lg h-12 bg-white"
            />
            <img
              src="https://bcassetcdn.com/public/blog/wp-content/uploads/2025/04/17172559/mastercard-2016-1024x683.webp"
              alt="mastercard"
              className="w-20 object-fit p-2 rounded-lg h-12 bg-white"
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black py-2 flex items-center justify-center">
        <p className="text-sm text-white text-center">
          &copy; {new Date().getFullYear()} caretech.bg. Всички права запазени.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
