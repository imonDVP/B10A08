import { Helmet } from "react-helmet-async";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <>
    <Helmet>
      <title>Error</title>
    </Helmet>
      <div className="flex h-screen w-screen flex-col items-center justify-center">
        <h3 className="text-2xl">Oops!</h3>
        <h1 className="text-5xl text-red-500">{error.status}</h1>
        <p className="text-xl">{error.statusText || error.message}</p>
      </div>
    </>
  );
}
