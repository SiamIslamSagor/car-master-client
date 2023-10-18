const setBrandInLocalStorage = value => {
  localStorage.setItem("clickedBrand", JSON.stringify(value));
};

const getBrandInLocalStorage = () => {
  const storedBrand = localStorage.getItem("clickedBrand");
  return JSON.parse(storedBrand);
};

export { setBrandInLocalStorage, getBrandInLocalStorage };
