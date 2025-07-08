
import React from 'react'


const datasets = [
  {
    id: 1,
    title: "Wikipedia PEP List",
    description:
      "An extensive compilation of politically exposed persons covering international profiles from Wikipedia.",
  },
  {
    id: 2,
    title: "Global PEP Database",
    description:
      "A consolidated database aggregating names of politically exposed persons from multiple public and private data sources worldwide.",
  },
  {
    id: 3,
    title: "Interpol PEP Records",
    description:
      "Public records provided by Interpol that include politically exposed persons flagged for financial and legal monitoring.",
  },
  {
    id: 4,
    title: "World Bank PEP Registry",
    description:
      "Lists politically exposed persons to ensure transparency and compliance in international finance and lending.",
  },
  {
    id: 5,
    title: "Transparency International PEP Index",
    description:
      "A dataset indexing politically exposed persons and their involvement in corruption investigations globally.",
  },
  {
    id: 6,
    title: "Financial Action Task Force (FATF) PEP Guidance",
    description:
      "Guidelines and examples for identifying politically exposed persons to aid compliance and risk assessment.",
  },
  {
    id: 7,
    title: "UN Sanctions PEP Watchlist",
    description:
      "A watchlist including politically exposed persons subject to international sanctions published by the United Nations.",
  },
  {
    id: 8,
    title: "OECD PEP Transparency Reports",
    description:
      "Reports highlighting politically exposed persons and transparency efforts within member countries of the OECD.",
  },
];

// Simple inline SVG icons
const IconInfo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-6 h-6 inline-block mr-2"
    aria-hidden="true"
    focusable="false"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 16h-1v-4h-1m1-4h.01M12 21c4.971 0 9-4.029 9-9s-4.029-9-9-9-9 4.029-9 9 4.029 9 9 9z"
    />
  </svg>
);

const IconBuild = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-6 h-6 inline-block mr-2"
    aria-hidden="true"
    focusable="false"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 8c-.355 0-.686-.05-1-.134V4a1 1 0 112 0v3.866A2.99 2.99 0 0012 8zM6.343 6.343a4 4 0 115.657 5.657 4 4 0 01-5.657-5.657zM15 12a3 3 0 11-3-3 3 3 0 013 3z"
    />
  </svg>
);





export default function AddressSearchSourceList() {

    
  return (
    <>
    <main className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {datasets.map((dataset) => (
            <article
              key={dataset.id}
              className="
                relative
                bg-primary 
                text-white
                rounded-lg
                shadow-lg
                hover:shadow-xl
                transition-shadow
                cursor-pointer
                select-none
                p-5
                flex flex-col
                justify-between
                border-4 border-primary
                acrylic-blur
              "
              title={dataset.title}
              tabIndex={0}
              role="button"
              aria-pressed="false"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  alert(`Selected dataset: ${dataset.title}`);
                }
              }}
              onClick={() => alert(`Selected dataset: ${dataset.title}`)}
            >
              <h2 className="text-xl text-white font-semibold mb-2 truncate">
                {dataset.title}
              </h2>
              <p className=" text-gray-300 text-sm line-clamp-4">
                {dataset.description}
              </p>
              <div className="mt-4 self-end">
                <button
                  className="bg-primary hover:bg-primary text-white font-semibold py-1 px-3 rounded-md shadow-md transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    alert(`Explore dataset: ${dataset.title}`);
                  }}
                >
                  Explore
                </button>
              </div>
            </article>
          ))}
    </main>

    {/* Add description sections at the bottom */}
    <section className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
      <article
        className="bg-primary text-gray-300 rounded-lg p-6 acrylic-blur"
        tabIndex={0}
        aria-label="Description about PEP"
      >
        <h3 className="text-2xl font-bold mb-3 select-none flex items-center">
          <IconInfo /> What is a Politically Exposed Person (PEP)?
        </h3>
        <p className="text-sm leading-relaxed select-text">
          Politically Exposed Persons (PEPs) are individuals who hold
          prominent public positions or have significant influence in
          government, politics, or international organizations. Due to their
          positions, they may be at higher risk for involvement in bribery
          and corruption, making it essential to monitor their activities
          for transparency and compliance.
        </p>
      </article>

      <article
        className="bg-primary text-gray-300 rounded-lg p-6 acrylic-blur"
        tabIndex={0}
        aria-label="Description about the platform"
      >
        <h3 className="text-2xl font-bold mb-3 select-none flex items-center">
          <IconBuild /> What We Have Been Building
        </h3>
        <p className=" text-sm leading-relaxed select-text">
          We are building a comprehensive platform that aggregates various
          datasets related to politically exposed persons to provide users
          with trustworthy, curated data for compliance, risk assessment,
          and enhancing transparency in financial and legal processes
          worldwide.
        </p>
      </article>
    </section>
    </>
  )
}
