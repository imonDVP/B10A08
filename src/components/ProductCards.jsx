import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

export default function ProductCards() {
  const data = useLoaderData();
  const { category } = useParams();
  const [filteredData, setFilteredData] = useState(data);
  useEffect(() => {
    if (category) {
      setFilteredData(data.filter((product) => product.category === category));
    } else {
      setFilteredData(data);
    }
  }, [category, data]);
  return (
    <>
      <Helmet>
        <title>
          {category ? `${category} | Gadget Heaven` : "Gadget Heaven"}
        </title>
      </Helmet>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredData.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
