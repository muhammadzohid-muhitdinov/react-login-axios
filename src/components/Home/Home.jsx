import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { api } from "../base/baseUrl";
import Loading from "../Loading/Loading";

const Home = () => {
  const [ProductsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    get_products();
  }, []);

  function get_products() {
    setIsLoading(true);
    axios.get(api).then((data) => {
      setProductsData(data.data);
      setIsLoading(false);
    });
  }
  return (
    <div className="container">
      <div className="wrapper">
        {isLoading ? (
          <Loading />
        ) : (
          ProductsData.map((item, i) => <Card key={i} item={item} />)
        )}
      </div>
    </div>
  );
};

export default Home;
