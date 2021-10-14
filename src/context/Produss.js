import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import { listProduss } from "../api/queries";
import { processComanda } from "../api/mutations";

const ProdusContext = React.createContext();

const ProdusProvider = ({ children }) => {
  const [Produss, setProduss] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProduss();
  }, []);

  const checkout = async (ComandaDetails) => {
    const payload = {
      id: uuidv4(),
      ...ComandaDetails
    };
    try {
      await API.graphql(graphqlOperation(processComanda, { input: payload }));
      console.log("Comanda is successful");
    } catch (err) {
      console.log(err);
    }
  };

  const fetchProduss = async () => {
    try {
      setLoading(true);
      // Switch authMode to API_KEY for public access
      const { data } = await API.graphql({
        query: listProduss,
        authMode: "API_KEY"
      });
      const Produss = data.listProduss.items;
      const featured = Produss.filter((Produs) => {
        return !!Produs.featured;
      });
      setProduss(Produss);
      setFeatured(featured);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ProdusContext.Provider value={{ Produss, featured, loading, checkout }}>
      {children}
    </ProdusContext.Provider>
  );
};

export { ProdusContext, ProdusProvider };
