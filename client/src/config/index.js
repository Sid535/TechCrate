export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "Monitor", label: "Monitor" },
      { id: "Grafic_Card", label: "Grafic Card" },
      { id: "CPU", label: "CPU" },
      { id: "RAM", label: "RAM" },
      { id: "Storage", label: "Storage" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "amd", label: "AMD" },
      { id: "asus", label: "Asus" },
      { id: "intel", label: "Intel" },
      { id: "nvidia", label: "Nvidia" },
      { id: "samsumg", label: "Samsumg" },
      { id: "seagate", label: "Seagate" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "Monitor",
    label: "Monitor",
    path: "/shop/listing",
  },
  {
    id: "Grafic_Card",
    label: "Grafic Card",
    path: "/shop/listing",
  },
  {
    id: "CPU",
    label: "CPU",
    path: "/shop/listing",
  },
  {
    id: "RAM",
    label: "RAM",
    path: "/shop/listing",
  },
  {
    id: "Storage",
    label: "Storage",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  Monitor: "Monitor",
  Grafic_Card: "Grafic Card",
  CPU: "CPU",
  RAM: "RAM",
  Storage: "Storage",
};

export const brandOptionsMap = {
  amd: "AMD",
  asus: "Asus",
  intel: "Intel",
  nvidia: "Nvidia",
  samsumg: "Samsumg",
  seagate: "Seagate",
};

export const filterOptions = {
  category: [
    { id: "Monitor", label: "Monitor" },
    { id: "Grafic_Card", label: "Grafic Card" },
    { id: "CPU", label: "CPU" },
    { id: "RAM", label: "RAM" },
    { id: "Storage", label: "Storage" },
  ],
  brand: [
    { id: "amd", label: "AMD" },
    { id: "asus", label: "Asus" },
    { id: "intel", label: "Intel" },
    { id: "nvidia", label: "Nvidia" },
    { id: "samsumg", label: "Samsumg" },
    { id: "seagate", label: "Seagate" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
