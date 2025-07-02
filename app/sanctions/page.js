import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import Sanctions from "./_components/Sanctions";



export default function Page() {
  
  //const [showDropdown, setShowDropdown] = useState(false);

  /* const handleSelect = (dataset) => {
    alert(`Selected dataset: ${dataset.title}`);
    setQuery(""); // Clear the input after selection
    setShowDropdown(false); // Hide dropdown after selection
  }; */


  /* const filteredDatasets = useMemo(() => {
    if (!query) return datasets;
    return datasets.filter((dataset) =>
      dataset.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);
 */

  return (
    <>
      <style>{`
        /* Acrylic blur background for Windows 11 style tiles */
        .acrylic-blur {
          backdrop-filter: saturate(180%) blur(10px);
          background-color: rgba(255, 255, 255, 0.3);
        }
        /* line-clamp for descriptions */
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;  
          overflow: hidden;
        }
      `}</style>
      <div className="min-h-screen bg-gray-900 text-gray-300 pb-[5rem]">
          <ul className='w-[94%] mx-auto flex justify-start items-center gap-2 py-1 mb-[4rem] border-b border-gray-600'>
            <Link href="/">
                <li>Home</li>
            </Link>
            <li><FaAngleRight /></li>
            <Link href="/sanctions">
                <li className='font-semibold'>Sanctions</li>
            </Link>
          </ul>
       
       <Sanctions />

      </div>

      {/* to be later removed */}
      {/* 
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            zIndex: "2",
            backgroundColor: "rgba(0,0,0,0.4)",
            backdropFilter: "blur(5px)",
            display: "flex",
            width: "100%",
            justifySelf: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontSize: "54px",
              textAlign: "center",
              width: "100%",
              backgroundColor: "transparent",
              padding: "10px",
              color: "white",
            }}
          >
            No connection to server established :-(
          </h1>
        </div>
       */}

    </>
  );
}
