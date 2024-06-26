import path from "path";

export const manufacturers = [
  "Acura",
  "Alfa Romeo",
  "Aston Martin",
  "Audi",
  "Bentley",
  "BMW",
  "Buick",
  "Cadillac",
  "Chevrolet",
  "Chrysler",
  "Citroen",
  "Dodge",
  "Ferrari",
  "Fiat",
  "Ford",
  "GMC",
  "Honda",
  "Hyundai",
  "Infiniti",
  "Jaguar",
  "Jeep",
  "Kia",
  "Lamborghini",
  "Land Rover",
  "Lexus",
  "Lincoln",
  "Maserati",
  "Mazda",
  "McLaren",
  "Mercedes-Benz",
  "MINI",
  "Mitsubishi",
  "Nissan",
  "Porsche",
  "Ram",
  "Rolls-Royce",
  "Subaru",
  "Tesla",
  "Toyota",
  "Volkswagen",
  "Volvo",
];

export const yearsOfProduction = [
  { title: "Year", value: "" },
  { title: "2015", value: "2015" },
  { title: "2016", value: "2016" },
  { title: "2017", value: "2017" },
  { title: "2018", value: "2018" },
  { title: "2019", value: "2019" },
  { title: "2020", value: "2020" },
  { title: "2021", value: "2021" },
  { title: "2022", value: "2022" },
  { title: "2023", value: "2023" },
];

export const fuels = [
  {
    title: "Fuel",
    value: "",
  },
  {
    title: "Gas",
    value: "Gas",
  },
  {
    title: "Electricity",
    value: "Electricity",
  },
];

export const footerLinks = [
  {
    title: "About",
    links: [
      { title: "How it works", url: "/" },
      { title: "Featured", url: "/" },
      { title: "Partnership", url: "/" },
      { title: "Bussiness Relation", url: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Events", url: "/" },
      { title: "Blog", url: "/" },
      { title: "Podcast", url: "/" },
      { title: "Invite a friend", url: "/" },
    ],
  },
  {
    title: "Socials",
    links: [
      { title: "Discord", url: "/" },
      { title: "Instagram", url: "/" },
      { title: "Twitter", url: "/" },
      { title: "Facebook", url: "/" },
    ],
  },
];

// Menu

interface MenuItem {
  title: string;
  path: string;
  subMenu: { title: string; path: string }[];
}

export const menuItems: MenuItem[] = [
  {
    title: "Buy Car",
    path: "/",
    subMenu: [
      { title: "Used Cars", path: "/buy-car/used" },
      { title: "New Cars", path: "/buy-car/new" },
      { title: "Certified Cars", path: "/buy-car/certified" },
    ],
  },
  {
    title: "Sell Car",
    path: "/",
    subMenu: [
      { title: "Sell Used Car", path: "/sell-car/used" },
      { title: "Sell New Car", path: "/sell-car/new" },
    ],
  },
  {
    title: "Car Services",
    path: "/",
    subMenu: [
      { title: "Car Inspection", path: "/car-services/inspection" },
      { title: "Car Repair", path: "/car-services/repair" },
      { title: "Car Maintenance", path: "/car-services/maintenance" },
    ],
  },
  {
    title: "Finance",
    path: "/",
    subMenu: [
      { title: "Loan", path: "/finance/loan" },
      { title: "EMI Calculator", path: "/finance/calculator" },
      { title: "Insurance", path: "/finance/insurance" },
    ],
  },
  {
    title: "More",
    path: "/",
    subMenu: [
      { title: "About Us", path: "/more/about" },
      { title: "Contact Us", path: "/more/contact" },
      { title: "Blog", path: "/more/blog" },
      { title: "Careers", path: "/more/careers" },
    ],
  },
];

export const menuItemsHindi = [
  {
    title: "मुख्य पृष्ठ", // Home
    subMenu: [
      "उपमुख्य पृष्ठ 1", // Sub Home 1
      "उपमुख्य पृष्ठ 2", // Sub Home 2
    ],
  },
  {
    title: "गाड़ियों के बारे में", // About Cars
    subMenu: [
      "सभी गाड़ियाँ", // All Cars
      "नवीनतम गाड़ियाँ", // Latest Cars
    ],
  },
  {
    title: "संपर्क करें", // Contact Us
    subMenu: [
      "हमारे बारे में", // About Us
      "हमसे संपर्क करें", // Contact Us
    ],
  },
];

export interface LanguageOption {
  label: string;
  flagIcon: string;
  langCode: string;
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { label: "English (US)", flagIcon: "flag-icon-css-us", langCode: "en" },
  { label: "हिन्दी", flagIcon: "flag-icon-css-in", langCode: "hi" },
  { label: "Deutsch", flagIcon: "flag-icon-css-de", langCode: "de" },
  { label: "Italiano", flagIcon: "flag-icon-css-it", langCode: "it" },
  { label: "中文 (繁體)", flagIcon: "flag-icon-css-cn", langCode: "zh-Hant" },
];

// Banner search bar items
export const budgets = [
  "$10,000 - $20,000",
  "$20,000 - $30,000",
  "$30,000 - $40,000",
];
export const vehicleTypes = ["SUV", "Sedan", "Truck", "Coupe"];
export const cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
];
