const setBrandInLocalStorage = value => {
  localStorage.setItem("clickedBrand", JSON.stringify(value));
};

const getBrandInLocalStorage = () => {
  const storedBrand = localStorage.getItem("clickedBrand");
  return JSON.parse(storedBrand);
};

const setObjInLS = oneObject => {
  localStorage.setItem("clickedUpdateCard", JSON.stringify(oneObject));
};

const getObjInLS = () => {
  const data = localStorage.getItem("clickedUpdateCard");
  return JSON.parse(data);
};

export {
  setBrandInLocalStorage,
  getBrandInLocalStorage,
  setObjInLS,
  getObjInLS,
};
