import { Helmet } from "react-helmet-async";
import Heading from "./Heading";
import {
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useLoaderData } from "react-router-dom";

export default function Statistics() {
  const data = useLoaderData();

  return (
    <>
      <Helmet>
        <title>Statistics | Gadget Heaven</title>
      </Helmet>

      <Heading
        title="Statistics"
        description="Check out the statistics of our products to get a deeper understanding of our offerings. Our team of experts is always on the lookout for new and exciting trends."
      />

      <div className="mx-auto mb-20 mt-10 w-11/12 max-w-screen-xl">
        <h2 className="mb-4 text-xl font-bold">Statistics</h2>
        <div className="h-96 rounded-xl bg-white p-2 md:p-4 lg:p-6">
          <ResponsiveContainer>
            <ComposedChart
              data={data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="title" scale="band" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="price"
                fill="#9538E226"
                stroke="none"
              />
              <Bar dataKey="price" barSize={20} fill="#9538E2" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
