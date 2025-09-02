import { BsJoystick, BsLaptop, BsPc, BsPciCardSound } from "react-icons/bs";
import { LuBatteryCharging, LuBox, LuCode, LuMonitor, LuPlug2, LuPrinter, LuRouter } from "react-icons/lu";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { SiPcgamingwiki } from "react-icons/si";


export const navLinks = [
  {
    title: "ГЕЙМИНГ ПРОДУКТИ",
    Icon: SiPcgamingwiki,
    children: [
      {
        title: "Гейминг настолни компютри",
        link: "/gaming/desktops",
        subItems: [
          { title: "Предстоящи модели", link: "/gaming/desktops/upcoming" },
          { title: "Най-добри за 1440p", link: "/gaming/desktops/1440p" },
          { title: "Малки/Mini-ITX гейминг", link: "/gaming/desktops/mini-itx" }
        ]
      },
      {
        title: "Гейминг лаптопи",
        link: "/gaming/laptops",
        subItems: [
          { title: "14\" гейминг лаптопи", link: "/gaming/laptops/14" },
          { title: "15.6\" гейминг лаптопи", link: "/gaming/laptops/15" },
          { title: "17.3\" гейминг лаптопи", link: "/gaming/laptops/17" }
        ]
      },
      {
        title: "Гейминг монитори",
        link: "/gaming/monitors",
        subItems: [
          { title: "240Hz+", link: "/gaming/monitors/240hz" },
          { title: "G-Sync / FreeSync", link: "/gaming/monitors/adaptive-sync" },
          { title: "Извит монитор", link: "/gaming/monitors/curved" }
        ]
      },
      {
        title: "Гейминг периферия",
        link: "/gaming/peripherals",
        subItems: [
          { title: "Мишки за гейминг", link: "/gaming/peripherals/mice" },
          { title: "Клавиатури за гейминг", link: "/gaming/peripherals/keyboards" },
          { title: "Гейминг слушалки", link: "/gaming/peripherals/headsets" }
        ]
      },
      {
        title: "Конзоли и аксесоари",
        link: "/gaming/consoles",
        subItems: [
          { title: "PS5 аксесоари", link: "/gaming/consoles/ps5" },
          { title: "Xbox Series", link: "/gaming/consoles/xbox" },
          { title: "Контролери", link: "/gaming/consoles/controllers" }
        ]
      },
      {
        title: "Гейминг столове и мебели",
        link: "/gaming/chairs",
        subItems: [
          { title: "Ергономични столове", link: "/gaming/chairs/ergonomic" },
          { title: "Мебели за стриймъри", link: "/gaming/chairs/streamer" }
        ]
      },
      {
        title: "RBG и аксесоари",
        link: "/gaming/rgb",
        subItems: [
          { title: "Ленти и контролери", link: "/gaming/rgb/strips" },
          { title: "RBG клавиатури", link: "/gaming/rgb/keyboards" }
        ]
      }
    ]
  },

  {
    title: "КОМПЮТРИ",
    Icon: BsPc,
    children: [
      {
        title: "Настолни компютри",
        link: "/computers/desktops",
        subItems: [
          { title: "Комплектни системи", link: "/computers/desktops/prebuilt" },
          { title: "Сглобяеми конфигурации", link: "/computers/desktops/custom" },
          { title: "Малки/HTPC", link: "/computers/desktops/htpc" }
        ]
      },
      {
        title: "Работни станции",
        link: "/computers/workstations",
        subItems: [
          { title: "За дизайн и 3D", link: "/computers/workstations/3d" },
          { title: "За монтаж и VFX", link: "/computers/workstations/video" },
          { title: "Серверни станции", link: "/computers/workstations/server" }
        ]
      },
      {
        title: "All-in-One компютри",
        link: "/computers/all-in-one",
        subItems: [
          { title: "За офис", link: "/computers/all-in-one/office" },
          { title: "За домашна употреба", link: "/computers/all-in-one/home" }
        ]
      },
      {
        title: "Вградени/системи за индустрията",
        link: "/computers/embedded"
      },
      {
        title: "Компютри за програмисти",
        link: "/computers/dev-machines",
        subItems: [
          { title: "Linux-ready", link: "/computers/dev-machines/linux" },
          { title: "Mac-еквиваленти (PC)", link: "/computers/dev-machines/mac-like" }
        ]
      },
      {
        title: "Аксесоари за компютри",
        link: "/computers/accessories",
        subItems: [
          { title: "Кутии", link: "/computers/accessories/cases" },
          { title: "Охлаждане (въздушно/водно)", link: "/computers/accessories/cooling" },
          { title: "Захранвания (PSU)", link: "/computers/accessories/psu" }
        ]
      }
    ]
  },

  {
    title: "КОМПОНЕНТИ",
    Icon: BsPciCardSound,
    children: [
      {
        title: "Процесори (CPU)",
        link: "/components/cpu",
        subItems: [
          { title: "Intel процесори", link: "/components/cpu/intel" },
          { title: "AMD процесори", link: "/components/cpu/amd" },
          { title: "Софтуер за овърклок", link: "/components/cpu/oc" }
        ]
      },
      {
        title: "Видеокарти (GPU)",
        link: "/components/gpu",
        subItems: [
          { title: "NVIDIA серия", link: "/components/gpu/nvidia" },
          { title: "AMD Radeon", link: "/components/gpu/amd-rx" },
          { title: "Професионални GPU", link: "/components/gpu/pro" }
        ]
      },
      {
        title: "Дънни платки",
        link: "/components/motherboards",
        subItems: [
          { title: "ATX / Micro-ATX / ITX", link: "/components/motherboards/form-factors" },
          { title: "За гейминг", link: "/components/motherboards/gaming" }
        ]
      },
      {
        title: "Памет (RAM)",
        link: "/components/ram",
        subItems: [
          { title: "DDR4", link: "/components/ram/ddr4" },
          { title: "DDR5", link: "/components/ram/ddr5" },
          { title: "С тайминги и профили", link: "/components/ram/profiles" }
        ]
      },
      {
        title: "Съхранение",
        link: "/components/storage",
        subItems: [
          { title: "NVMe SSD", link: "/components/storage/nvme" },
          { title: "SATA SSD", link: "/components/storage/sata" },
          { title: "HDD и NAS", link: "/components/storage/hdd" }
        ]
      },
      {
        title: "Охлаждане",
        link: "/components/cooling",
        subItems: [
          { title: "Въздушни кулери", link: "/components/cooling/air" },
          { title: "Системи AIO", link: "/components/cooling/aio" },
          { title: "Сглобяема водна система", link: "/components/cooling/custom-loop" }
        ]
      },
      {
        title: "Контролери и карти",
        link: "/components/controllers"
      }
    ]
  },

  {
    title: "ПЕРИФЕРИЯ",
    Icon: BsJoystick,
    children: [
      {
        title: "Клавиатури",
        link: "/peripherals/keyboards",
        subItems: [
          { title: "Механични клавиатури", link: "/peripherals/keyboards/mechanical" },
          { title: "Безжични клавиатури", link: "/peripherals/keyboards/wireless" },
          { title: "Клавиатури за лаптопи", link: "/peripherals/keyboards/laptop" }
        ]
      },
      {
        title: "Мишки",
        link: "/peripherals/mice",
        subItems: [
          { title: "Оптични мишки", link: "/peripherals/mice/optical" },
          { title: "Лазерни мишки", link: "/peripherals/mice/laser" },
          { title: "Мишки за дизайн", link: "/peripherals/mice/design" }
        ]
      },
      {
        title: "Слушалки и аудио",
        link: "/peripherals/audio",
        subItems: [
          { title: "Студио слушалки", link: "/peripherals/audio/studio" },
          { title: "Bluetooth слушалки", link: "/peripherals/audio/bluetooth" },
          { title: "Микрофони и подкаст аксесоари", link: "/peripherals/audio/mics" }
        ]
      },
      {
        title: "Геймпади и контролери",
        link: "/peripherals/controllers"
      },
      {
        title: "Устройства за вход (таблети и др.)",
        link: "/peripherals/input-devices"
      },
      {
        title: "Докинг станции и хъбове",
        link: "/peripherals/docks-hubs"
      }
    ]
  },

  {
    title: "МОНИТОРИ",
    Icon: LuMonitor,
    children: [
      {
        title: "Игрови монитори",
        link: "/monitors/gaming",
        subItems: [
          { title: "144Hz и нагоре", link: "/monitors/gaming/144hz" },
          { title: "4K гейминг", link: "/monitors/gaming/4k" }
        ]
      },
      {
        title: "Професионални монитори",
        link: "/monitors/pro",
        subItems: [
          { title: "Цветна калибрация", link: "/monitors/pro/color-calibrated" },
          { title: "За фотографи", link: "/monitors/pro/photography" }
        ]
      },
      {
        title: "Извити монитори",
        link: "/monitors/curved"
      },
      {
        title: "Портативни монитори",
        link: "/monitors/portable"
      },
      {
        title: "Аксесоари за монитори",
        link: "/monitors/accessories",
        subItems: [
          { title: "Стойки и рамена", link: "/monitors/accessories/mounts" },
          { title: "Антирефлекс филтри", link: "/monitors/accessories/filters" }
        ]
      }
    ]
  },

  {
    title: "ЛАПТОПИ",
    Icon: BsLaptop,
    children: [
      {
        title: "Ултрапреносими (Ultrabook)",
        link: "/laptops/ultrabooks",
        subItems: [
          { title: "До 13\"", link: "/laptops/ultrabooks/13" },
          { title: "До 14\"", link: "/laptops/ultrabooks/14" }
        ]
      },
      {
        title: "Бизнес лаптопи",
        link: "/laptops/business",
        subItems: [
          { title: "Сигурност и TPM", link: "/laptops/business/security" },
          { title: "Докинг-ready", link: "/laptops/business/docking" }
        ]
      },
      {
        title: "Гейминг лаптопи",
        link: "/laptops/gaming",
        subItems: [
          { title: "RTX серия", link: "/laptops/gaming/rtx" },
          { title: "Max-Q / тънки гейминг", link: "/laptops/gaming/max-q" }
        ]
      },
      {
        title: "2-in-1 и тъч лаптопи",
        link: "/laptops/2-in-1"
      },
      {
        title: "Аксесоари за лаптопи",
        link: "/laptops/accessories",
        subItems: [
          { title: "Чанти и калъфи", link: "/laptops/accessories/cases" },
          { title: "Зарядни и адаптери", link: "/laptops/accessories/chargers" }
        ]
      },
    ]
  },

  {
    title: "ПРИНТЕРИ",
    Icon: LuPrinter,
    children: [
      {
        title: "Лазерни принтери",
        link: "/printers/laser",
        subItems: [
          { title: "Монохромни", link: "/printers/laser/mono" },
          { title: "Цветни", link: "/printers/laser/color" }
        ]
      },
      {
        title: "Мастилено-струйни (Inkjet)",
        link: "/printers/inkjet",
        subItems: [
          { title: "За фотография", link: "/printers/inkjet/photo" },
          { title: "С резервоар (CISS)", link: "/printers/inkjet/ciss" }
        ]
      },
      {
        title: "3D принтери",
        link: "/printers/3d"
      },
      {
        title: "Аксесоари и тонери",
        link: "/printers/supplies",
        subItems: [
          { title: "Оригинални тонери", link: "/printers/supplies/original" },
          { title: "Съвместими консумативи", link: "/printers/supplies/compatible" }
        ]
      },
      {
        title: "Принтери за голямоформатен печат",
        link: "/printers/large-format"
      }
    ]
  },

  {
    title: "КАБЕЛИ И ПРЕХОДНИЦИ",
    Icon: LuPlug2,
    children: [
      { title: "HDMI кабели", link: "/cables/hdmi" },
      { title: "DisplayPort кабели", link: "/cables/displayport" },
      { title: "USB-C и Thunderbolt", link: "/cables/usb-c" },
      { title: "Ethernet кабели", link: "/cables/ethernet" },
      { title: "Адаптери (VGA/HDMI/etc.)", link: "/cables/adapters" },
      { title: "Зарядни кабели", link: "/cables/charging" },
      { title: "Оптични кабели и аудио", link: "/cables/audio-optical" }
    ]
  },

  {
    title: "МРЕЖОВО ОБОРУДВАНЕ",
    Icon: LuRouter,
    children: [
      {
        title: "Рутери",
        link: "/networking/routers",
        subItems: [
          { title: "Wi-Fi 6/6E/7", link: "/networking/routers/wi-fi" },
          { title: "Малък офис/домашен", link: "/networking/routers/home" },
          { title: "Професионални/ISP", link: "/networking/routers/pro" }
        ]
      },
      {
        title: "Суичове (Switches)",
        link: "/networking/switches",
        subItems: [
          { title: "Managed", link: "/networking/switches/managed" },
          { title: "Unmanaged", link: "/networking/switches/unmanaged" }
        ]
      },
      {
        title: "Безжични точки за достъп (AP)",
        link: "/networking/access-points"
      },
      {
        title: "NAS устройства",
        link: "/networking/nas",
        subItems: [
          { title: "За дома", link: "/networking/nas/home" },
          { title: "За бизнеса", link: "/networking/nas/business" }
        ]
      },
      {
        title: "Мрежови аксесоари",
        link: "/networking/accessories",
        subItems: [
          { title: "Кабелни органайзери", link: "/networking/accessories/organizers" },
          { title: "Мрежови карти (NIC)", link: "/networking/accessories/nic" }
        ]
      }
    ]
  },

  {
    title: "UPS-И ЕЛ. ЗАЩИТА",
    Icon: LuBatteryCharging,
    children: [
      {
        title: "UPS устройства",
        link: "/ups-protection/ups",
        subItems: [
          { title: "Online (двойно преобразуване)", link: "/ups-protection/ups/online" },
          { title: "Line-interactive", link: "/ups-protection/ups/line-interactive" },
          { title: "Offline/Standby", link: "/ups-protection/ups/offline" }
        ]
      },
      { title: "Пренапрежение/филтри", link: "/ups-protection/surge-protectors" },
      { title: "Аксесоари за UPS", link: "/ups-protection/accessories" },
      { title: "Батерии и поддръжка", link: "/ups-protection/batteries" }
    ]
  },

  {
    title: "СОФТУЕР И УСЛУГИ",
    Icon: LuCode,
    children: [
      {
        title: "Операционни системи",
        link: "/software-services/os",
        subItems: [
          { title: "Windows лицензи", link: "/software-services/os/windows" },
          { title: "Linux дистрибуции", link: "/software-services/os/linux" },
          { title: "macOS (хардуер-съвместимост)", link: "/software-services/os/macos" }
        ]
      },
      {
        title: "Антивирус и сигурност",
        link: "/software-services/security",
        subItems: [
          { title: "Антивируси", link: "/software-services/security/avs" },
          { title: "VPN решения", link: "/software-services/security/vpn" }
        ]
      },
      {
        title: "Бизнес софтуер",
        link: "/software-services/business",
        subItems: [
          { title: "Офис пакети", link: "/software-services/business/office" },
          { title: "ERP/CRM решения", link: "/software-services/business/erp-crm" }
        ]
      },
      {
        title: "Инсталация и поддръжка",
        link: "/software-services/support",
        subItems: [
          { title: "On-site поддръжка", link: "/software-services/support/on-site" },
          { title: "Дистанционна поддръжка", link: "/software-services/support/remote" }
        ]
      },
      {
        title: "Облачни услуги",
        link: "/software-services/cloud",
        subItems: [
          { title: "Хостинг и VPS", link: "/software-services/cloud/hosting" },
          { title: "Резервни копия", link: "/software-services/cloud/backups" }
        ]
      }
    ]
  },

  {
    title: "ОФИС ТЕХНИКА",
    Icon: PiBuildingOfficeBold,
    children: [
      { title: "Факсове и мултифункционални устройства", link: "/office-equipment/mfu" },
      { title: "Скенери", link: "/office-equipment/scanners" },
      { title: "Телефони и комуникация", link: "/office-equipment/phones" },
      { title: "Проектори и презентация", link: "/office-equipment/projectors" },
      { title: "Конферентни системи", link: "/office-equipment/conference" },
      { title: "Офис мебелировка (техническа)", link: "/office-equipment/furniture" }
    ]
  },

  {
    title: "КОНСУМАТИВИ",
    Icon: LuBox,
    children: [
      { title: "Тонери и касети", link: "/consumables/toners" },
      { title: "Мастила и бутилки", link: "/consumables/inks" },
      { title: "Дискове и носители", link: "/consumables/media" },
      { title: "Хартии и етикети", link: "/consumables/papers" },
      { title: "Батерии и акумулатори", link: "/consumables/batteries" },
      { title: "Почистване и поддръжка", link: "/consumables/cleaning" }
    ]
  }
];