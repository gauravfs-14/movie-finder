import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Separator } from "../components/ui/separator";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <Separator />
      <main>
        <div className="min-h-[50vh] w-screen flex items-center justify-center flex-col">
          <h1 className="text-5xl font-extrabold m-4">Error, 404</h1>
          <p>
            Oops! Page Not Found. {" "}
            <span className="text-blue-500 hover:underline">
              <Link to={"/"}>Return to Home.</Link>
            </span>
          </p>
        </div>
      </main>
    </>
  );
};

export default ErrorPage;
