import { Link } from "react-router-dom";
import { routes } from "../routes";

export function SimpleFooter() {
  return (
    <div className="border-t border-black/20 w-full -z-50">
      <div className="text-center">&copy; CreamBeans</div>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-between gap-5 p-6 w-[400px]">
          {routes.map((nav, index) => {
            return (
              <Link key={index} to={nav.to}>
                {nav.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SimpleFooter;
