import { User, UserCircle } from "lucide-react"; // Import any other icons you want to use

export const Dropdown = ({ results, onSelect }) => {
  return (
    <div
      style={{ width: "576px" }}
      className="absolute z-10 bg-white border border-gray-300 rounded-md shadow-lg transition-all duration-200 ease-in-out"
    >
      {results.map((result) => (
        <div
          key={result.id}
          className="flex items-center p-3 hover:bg-purple-100 transition-colors duration-200 ease-in-out cursor-pointer rounded-md"
          onClick={() => onSelect(result)}
        >
          <User
            Circle
            className="w-5 h-5 text-purple-600 mr-3"
            aria-hidden="true"
          />
          <span className="font-semibold text-gray-800">{result.title}</span>
        </div>
      ))}
    </div>
  );
};
