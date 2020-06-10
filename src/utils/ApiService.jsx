const URL_BASE = "https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog";

const ApiService = {
  ListContacts: () => {
    return fetch(`${URL_BASE}`, {method: "GET"}).then((res) => res.json());
  },
}; 

export default ApiService;
