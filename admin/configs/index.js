import {
  FiUsers,
  FiUser,
  FiCompass,
  FiGift,
  FiSettings,
  FiLayers,
  FiShoppingCart,
} from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { RiShoppingBag3Line } from "react-icons/ri";
import { AiOutlineBars } from "react-icons/ai";
import { ImCreditCard } from "react-icons/im";

export const menus = [
  {
    pathname: "/admin",
    Icon: RxDashboard,
    title: "Dashboard",
    secure: false,
  },
  {
    pathname: "/admin/products",
    Icon: RiShoppingBag3Line,
    title: "Products",
    secure: true,
  },
  {
    pathname: "/admin/categorys",
    Icon: AiOutlineBars,
    title: "Category",
    secure: true,
  },
  {
    pathname: "/admin/customers",
    Icon: FiUsers,
    title: "Customers",
    secure: true,
  },
  {
    pathname: "/admin/orders",
    Icon: FiCompass,
    title: "Orders",
    secure: true,
  },
  {
    pathname: "/admin/coupons",
    Icon: FiGift,
    title: "Coupons",
    secure: true,
  },
  {
    pathname: "/admin/our-staff",
    Icon: FiUser,
    title: "Our Staff",
    secure: true,
  },
  {
    pathname: "/admin/setting",
    Icon: FiSettings,
    title: "Setting",
    secure: true,
  },
];

//Dashboard Total Card
export const priceOverview = [
  {
    title: "today order",
    Icon: FiLayers,
    price: 100,
    bg: "blue",
  },
  {
    title: "this month",
    Icon: FiShoppingCart,
    price: 1000,
    bg: "sky",
  },
  {
    title: "total order",
    Icon: ImCreditCard,
    price: 43000,
    bg: "green",
  },
];

//Products Category

export const PCATEGORY = [
  {
    name: "রাজশাহীর আম",
    id: "রাজশাহীর আম",
    path: "/rajshahiraam",
  },
  {
    name: "লিচু",
    id: "লিচু",
    path: "/lichu",
  },
  {
    name: "আখের গুড়",
    id: "আখের গুড়",
    path: "/akher-gur",
  },
  {
    name: "মধু",
    id: "মধু",
    path: "/modhu",
  },
  {
    name: "সরিষার তেল",
    id: "সরিষার তেল",
    path: "/sorishar-tel",
  },
  {
    name: "পেয়ারা",
    id: "পেয়ারা",
    path: "/peyara",
  },
  {
    name: "রংপুরের আম",
    id: "রংপুরের আম",
    path: "/rongpureraam",
  },
];

export const CCATEGORY = [
  {
    name: "গোপালভোগ",
    id: "গোপালভোগ",
  },
  {
    name: "হিমসাগর",
    id: "হিমসাগর",
  },
  {
    name: "ল্যাংড়া",
    id: "ল্যাংড়া",
  },
  {
    name: "আম্রপালি",
    id: "আম্রপালি",
  },
  {
    name: "বোম্বাই লিচু",
    id: "বোম্বাই লিচু",
  },
  {
    name: "চায়না 3 লিচু",
    id: "চায়না 3 লিচু",
  },
  {
    name: "আখের ঝোলা গুড়",
    id: "আখের ঝোলা গুড়",
  },
  {
    name: "আখেল দানা গুড়",
    id: "আখেল দানা গুড়",
  },
  {
    name: "আখেল লিকুইড গুড়",
    id: "আখেল লিকুইড গুড়",
  },
  {
    name: "খাটি ঘি",
    id: "খাটি ঘি",
  },
  {
    name: "প্রাকৃতিক মধু",
    id: "প্রাকৃতিক মধু",
  },
  {
    name: "চাষকৃত মধু",
    id: "চাষকৃত মধু",
  },
  {
    name: "সরিষার তেল",
    id: "সরিষার তেল",
  },
  {
    name: "পেয়ারা",
    id: "পেয়ারা",
  },
  {
    name: "রংপুরের আম",
    id: "রংপুরের আম",
  },
];

export const TCATEGORY = [
  {
    name: "আম",
    id: "আম",
  },
  {
    name: "লিচু",
    id: "লিচু",
  },
  {
    name: "আখের গুড়",
    id: "আখের গুড়",
  },
];
