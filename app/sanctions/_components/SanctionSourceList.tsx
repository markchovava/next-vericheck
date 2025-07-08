import React from 'react'


const datasets = [
  {
    id: 1,
    title: "Wikipedia Sanction List",
    description:
      "An extensive compilation of politically exposed persons covering international profiles from Wikipedia.",
  },
  {
    id: 2,
    title: "Global Sanction Database",
    description:
      "A consolidated database aggregating names of politically exposed persons from multiple public and private data sources worldwide.",
  },
  {
    id: 3,
    title: "Interpol Sanction Records",
    description:
      "Public records provided by Interpol that include politically exposed persons flagged for financial and legal monitoring.",
  },
  {
    id: 4,
    title: "World Bank Sanction Registry",
    description:
      "Lists politically exposed persons to ensure transparency and compliance in international finance and lending.",
  },
  {
    id: 5,
    title: "Transparency International Sanction Index",
    description:
      "A dataset indexing politically exposed persons and their involvement in corruption investigations globally.",
  },
  {
    id: 6,
    title: "Financial Action Task Force (FATF) Sanction Guidance",
    description:
      "Guidelines and examples for identifying politically exposed persons to aid compliance and risk assessment.",
  },
  {
    id: 7,
    title: "UN Sanctions Sanction Watchlist",
    description:
      "A watchlist including politically exposed persons subject to international sanctions published by the United Nations.",
  },
  {
    id: 8,
    title: "OECD Sanction Transparency Reports",
    description:
      "Reports highlighting politically exposed persons and transparency efforts within member countries of the OECD.",
  },
];


export default function SanctionSourceList() {

    
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
                border-4 border-gray-300
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
              <p className="text-gray-300 text-sm line-clamp-4">
                {dataset.description}
              </p>
              <div className="mt-4 self-end">
                <button
                  className="bg-primary hover:bg-secondary text-white font-semibold py-1 px-3 rounded-md shadow-md transition"
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
    </>
  )
}
