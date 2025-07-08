"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const documentTypes = [
  { id: "passport", label: "Passport", color: "bg-primary" },
  { id: "driver-license", label: "Driver's License", color: "bg-primary" },
  { id: "id-card", label: "ID Card", color: "bg-primary" },
  { id: "resident-permit", label: "Resident Permit", color: "bg-primary" },
  { id: "other", label: "Other", color: "bg-primary" },
];

const mlModels = [
  { id: "svm", name: "SVM Classifier", accuracy: 88, color: "bg-primary" },
  {
    id: "cnn",
    name: "CNN Neural Network",
    accuracy: 94,
    color: "bg-primary",
  },
  {
    id: "random-forest",
    name: "Random Forest",
    accuracy: 90,
    color: "bg-primary",
  },
  { id: "xgboost", name: "XGBoost", accuracy: 92, color: "bg-primary" },
];

export default function DocumentVerification() {
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState("");
  const [selectedDocType, setSelectedDocType] = useState(null); // id from documentTypes
  const [idNumber, setIdNumber] = useState("");
  const [selectedModel, setSelectedModel] = useState(null); // id from mlModels
  const [verifying, setVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState(null); // 'success' | 'failure' | null
  const fileInputRef = useRef(null);

  // Handle file change
  const onFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setVerificationResult(null);
      if (fileURL) {
        URL.revokeObjectURL(fileURL);
      }
      setFileURL(URL.createObjectURL(selectedFile));
    } else {
      setFile(null);
      setFileURL("");
    }
  };

  const verifyDocument = () => {
    if (!file) {
      alert("Please upload a document to verify.");
      return;
    }
    if (!selectedDocType) {
      alert("Please select a document type.");
      return;
    }
    if (!idNumber.trim()) {
      alert("Please enter the ID number.");
      return;
    }
    if (!selectedModel) {
      alert("Please select a machine learning model.");
      return;
    }

    setVerifying(true);
    setVerificationResult(null);

    // Simulate asynchronous verification
    setTimeout(() => {
      // Simplified logic: success if ID length > 4 and file size < 5MB and model accuracy > 89
      if (
        idNumber.length > 4 &&
        file.size < 5 * 1024 * 1024 &&
        selectedModel &&
        mlModels.find((m) => m.id === selectedModel).accuracy >= 89
      ) {
        setVerificationResult("success");
      } else {
        setVerificationResult("failure");
      }
      setVerifying(false);
    }, 2200);
  };

  const clearForm = () => {
    setFile(null);
    setVerificationResult(null);
    setFileURL("");
    setSelectedDocType(null);
    setIdNumber("");
    setSelectedModel(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  return (
    <>
      <style>{`
        /* Acrylic blur background for tiles */
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
        /* Windows 8.1 Tile hover shadow */
        .tile:hover {
          box-shadow: 0 8px 20px rgba(124, 58, 237, 0.6);
          z-index: 10;
        }
        /* Keyboard focus for tiles */
        .tile:focus {
          outline: 3px solid #7c3aed; /* primary */
          outline-offset: 2px;
          z-index: 10;
        }
      `}</style>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl w-full space-y-8 bg-white dark:bg-gray-800 p-10 rounded-xl shadow-xl">
          <h2 className="text-center text-4xl font-extrabold text-primary select-none">
            Document Verification
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-6 select-none max-w-3xl mx-auto">
            Upload your document, select type and machine learning model for
            verification with accuracy details.
          </p>

          {/* Document Upload Section */}
          <div className="space-y-6">
            <div>
              <label
                htmlFor="document-upload"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 select-none"
              >
                Upload Document
              </label>
              <input
                id="document-upload"
                name="document-upload"
                type="file"
                accept="image/*,application/pdf"
                className="block w-full text-sm text-gray-900 dark:text-gray-200 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-700"
                onChange={onFileChange}
                ref={fileInputRef}
              />
            </div>

            {file && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 select-none">
                  Document Preview
                </label>
                <div className="border border-primary rounded-md p-2 bg-white dark:bg-gray-700 overflow-auto max-h-72">
                  {file.type.startsWith("image/") ? (
                    <Image
                      src={fileURL}
                      alt="Document Preview"
                      className="max-h-64 mx-auto rounded-md"
                      height="100"
                      width="100"
                    />
                  ) : file.type === "application/pdf" ? (
                    <embed
                      src={fileURL}
                      type="application/pdf"
                      className="w-full h-64 rounded-md"
                      aria-label="PDF Document Preview"
                    />
                  ) : (
                    <p className="text-gray-700 dark:text-gray-300 text-center select-none">
                      Preview not available for this file type.
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Document Types Section as Tiles */}
          <section aria-label="Select Document Type" className="space-y-3">
            <h3 className="text-xl font-semibold text-primary select-none">
              Select Document Type
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {documentTypes.map(({ id, label, color }) => {
                const isSelected = selectedDocType === id;
                const tileClasses = `${color} ${
                  isSelected
                    ? "ring-4 ring-offset-2 ring-primary"
                    : "hover:ring-4 hover:ring-primary"
                } text-white rounded-lg p-4 cursor-pointer select-none tile flex flex-col justify-center items-center 
                transition-shadow shadow-md ${isSelected ? "shadow-primary" : "shadow-primary"}`;

                return (
                  <div
                    key={id}
                    role="radio"
                    aria-checked={isSelected}
                    tabIndex={0}
                    onClick={() => setSelectedDocType(id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setSelectedDocType(id);
                      }
                    }}
                    className={tileClasses}
                    aria-label={label}
                  >
                    <span className="text-lg font-semibold">{label}</span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ID Number Input */}
          <div>
            <label
              htmlFor="id-number"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 select-none"
            >
              Document ID Number
            </label>
            <input
              id="id-number"
              name="id-number"
              type="text"
              placeholder="Enter your document number"
              className="block w-full rounded-md border border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 py-2 px-3 shadow-sm focus:border-primary focus:ring-4 focus:ring-primary focus:outline-none"
              value={idNumber}
              onChange={(e) => setIdNumber(e.target.value)}
              maxLength={50}
            />
          </div>

          {/* ML Models Section as Tiles */}
          <section
            aria-label="Select Machine Learning Model"
            className="space-y-3"
          >
            <h3 className="text-xl font-semibold text-primary select-none">
              Select Machine Learning Model
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {mlModels.map(({ id, name, accuracy, color }) => {
                const isSelected = selectedModel === id;
                const tileClasses = `${color} ${
                  isSelected
                    ? "ring-4 ring-offset-2 ring-primary"
                    : "hover:ring-4 hover:ring-primary"
                } text-white rounded-lg p-4 cursor-pointer select-none tile flex flex-col justify-center items-center 
                transition-shadow shadow-md ${isSelected ? "shadow-primary" : "shadow-primary"}`;

                return (
                  <div
                    key={id}
                    role="radio"
                    aria-checked={isSelected}
                    tabIndex={0}
                    onClick={() => setSelectedModel(id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setSelectedModel(id);
                      }
                    }}
                    className={tileClasses}
                    aria-label={`${name}, accuracy ${accuracy}%`}
                  >
                    <span className="text-lg font-semibold mb-2 text-center">
                      {name}
                    </span>
                    <span className="bg-primary bg-opacity-60 px-3 py-1 rounded-full text-sm font-semibold">
                      Accuracy: {accuracy}%
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Verification Button & Clear Button */}
          <div className="flex justify-between items-center mt-4">
            <button
              type="button"
              onClick={verifyDocument}
              disabled={verifying}
              className={`inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-lg font-semibold rounded-md text-white 
                bg-primary hover:bg-primary focus:outline-none focus:ring-4 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed transition`}
            >
              {verifying ? "Verifying..." : "Verify Document"}
            </button>
            <button
              type="button"
              onClick={clearForm}
              disabled={verifying}
              className="inline-flex justify-center py-3 px-8 border border-primary text-primary hover:bg-purple-50 dark:hover:bg-gray-600 rounded-md text-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Clear
            </button>
          </div>

          {/* Verification Result */}
          {verificationResult === "success" && (
            <div className="rounded-md bg-green-100 dark:bg-green-900 p-4 mt-6 select-none">
              <p className="text-green-800 dark:text-green-200 font-semibold text-center text-xl">
                Document verified successfully! ✅
              </p>
              <p className="text-center mt-1 text-green-700 dark:text-green-300">
                Verified with{" "}
                <span className="font-bold text-primary">
                  {mlModels.find((m) => m.id === selectedModel)?.name}
                </span>{" "}
                at accuracy{" "}
                <span className="font-bold text-primary">
                  {mlModels.find((m) => m.id === selectedModel)?.accuracy}%
                </span>
              </p>
            </div>
          )}
          {verificationResult === "failure" && (
            <div className="rounded-md bg-red-100 dark:bg-red-900 p-4 mt-6 select-none">
              <p className="text-red-800 dark:text-red-200 font-semibold text-center text-xl">
                Verification failed. Please check your document and details. ❌
              </p>
            </div>
          )}
        </div>
      </div>

      {/* to be later removed */}
      {/* <div
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
      </div> */}
    </>
  );
}
