import { useContext } from "react";
import { AlertContext } from "../../context/alert/AlertContext";
function Alert() {
  const { alert } = useContext(AlertContext);

  return (
    <div
      className={`grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8 mb-8`}
      style={{ visibility: alert ? "visible" : "hidden" }}
    >
      <div className="bg-red-900 text-center py-4 lg:px-4">
        <div
          className="p-2 bg-red-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
          role="alert"
        >
          <span className="font-semibold mr-2 text-left flex-auto">
            {alert?.msg}
          </span>
          <svg
            className="fill-current opacity-75 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Alert;
