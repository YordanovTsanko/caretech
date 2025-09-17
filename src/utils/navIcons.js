import { BsFillBinocularsFill } from "react-icons/bs";
import { CgTag } from "react-icons/cg";
import {
  FaLaptop,
  FaMobileAlt,
  FaGamepad,
  FaTv,
  FaCamera,
  FaNetworkWired,
  FaTools,
  FaBox,
  FaChargingStation,
  FaHouseUser,
  FaLock,
  FaBell,
  FaPumpSoap,
  FaBroom,
  FaFan,
  FaCogs,
  FaProjectDiagram,
  FaMicroscope
} from "react-icons/fa";
import { GiDisc } from "react-icons/gi";
import { GrSystem } from "react-icons/gr";
import { IoTelescopeSharp } from "react-icons/io5";
import { MdDevicesOther, MdCable } from "react-icons/md";
import { RiGpsFill, RiWaterFlashFill } from "react-icons/ri";
import { SiPcgamingwiki } from "react-icons/si";

export const iconCategories = {
  "computer-components": SiPcgamingwiki,
  "water-liquid-cooling": RiWaterFlashFill,
  "computer-systems": GrSystem,
  "laptops-tablets-and-accessories": FaLaptop,
  "monitors-and-displays": FaTv,
  "computer-peripherals": MdDevicesOther,
  "vr-virtual-reality": FaGamepad,
  "storage-devices-and-consumables": FaBox,
  "power-protection": FaChargingStation,
  "printers-scanners-and-consumables": FaTools,
  "network-equipment": FaNetworkWired,
  "projectors-interactive-floor-accessories":FaProjectDiagram,
  "electronics": FaCogs,
  "cables": MdCable,
  "tv-video-and-accessories": FaTv,
  "photo-and-video-accessories": FaCamera,
  "mobile-phones-and-accessories": FaMobileAlt,
  "gaming-peripheral-devices": FaGamepad,
  "navigation-systems-dashcam": RiGpsFill,
  "telescopes": IoTelescopeSharp,
  "binoculars": BsFillBinocularsFill,
  "microscopes": FaMicroscope,
  "accessories-optics": CgTag,
  "office-products": FaHouseUser,
  "software": GiDisc,
  "batteries-and-chargers": FaChargingStation,
  "household-products": FaHouseUser,
  "cable-locks": FaLock,
  "bells": FaBell,
  "bicycle-pumps": FaPumpSoap,
  "vacuum-cleaners": FaBroom,
  "air-purifiers": FaFan,
  "service": FaTools,
  "stem": FaCogs
};
