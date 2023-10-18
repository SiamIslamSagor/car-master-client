/* 
const getItemInLocalStorage = propertyName => {
  const storedValue = localStorage.getItem(propertyName);
  if (storedValue) {
    return JSON.parse(storedValue);
  }
  return [];
};

const setItemInLocalStorage = value => {
  const ckk = localStorage.setItem("id", JSON.stringify(value));
  return ckk;
};

const getDonatedDataInLC = () => {
  const storedDonatedData = localStorage.getItem("donate-data-id");
  if (storedDonatedData) {
    return JSON.parse(storedDonatedData);
  } else {
    return [];
  }
};

const setDonatedDataInLc = donatedId => {
  const donatedStoredId = getDonatedDataInLC();
  donatedStoredId.push(donatedId);
  localStorage.setItem("donate-data-id", JSON.stringify(donatedStoredId));
};

export {
  getItemInLocalStorage,
  setItemInLocalStorage,
  getDonatedDataInLC,
  setDonatedDataInLc,
};

*/

const setBrandInLocalStorage = value => {
  localStorage.setItem("clickedBrand", JSON.stringify(value));
};

const getBrandInLocalStorage = () => {
  const storedBrand = localStorage.getItem("clickedBrand");
  return JSON.parse(storedBrand);
};

export { setBrandInLocalStorage, getBrandInLocalStorage };
