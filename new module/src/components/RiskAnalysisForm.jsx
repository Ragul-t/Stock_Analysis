import React from "react";
import { useState } from "react";
const RiskAnalysisForm = () => {
  const [selectedBank, setSelectedBank] = useState("");
  const [selectedRiskType, setSelectedRiskType] = useState("");
  const [riskTypes, setRiskTypes] = useState([]);

  const banks = [
    { id: 1, name: "Bank A", riskTypes: ["Type A", "Type B"] },
    { id: 2, name: "Bank B", riskTypes: ["Type C", "Type D"] },
    { id: 3, name: "Bank C", riskTypes: ["Type E", "Type F"] },
  ];

  const handleBankChange = (e) => {
    const selectedBankId = parseInt(e.target.value);
    const bank = banks.find((b) => b.id === selectedBankId);
    setSelectedBank(bank.name);
    setRiskTypes(bank.riskTypes);
    setSelectedRiskType("");
  };

  const handleRiskTypeChange = (e) => {
    setSelectedRiskType(e.target.value);
  };

  const handleAnalyseClick = () => {
    if (selectedBank && selectedRiskType) {
      console.log(`Analyzing risk for ${selectedBank} - ${selectedRiskType}`);
    } else {
      alert("Please select both bank and risk type.");
    }
  };

  return (
    <div style={styles.container}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow" style={styles.card}>
            <div className="card-header text-center" style={styles.cardHeader}>
              <h4>Risk Analysis Form</h4>
            </div>
            <div className="card-body" style={styles.cardBody}>
              <div className="form-group" style={styles.formGroup}>
                <label htmlFor="bankSelect" style={styles.label}>
                  Select Bank:
                </label>
                <select
                  id="bankSelect"
                  className="form-control"
                  value={selectedBank}
                  onChange={handleBankChange}
                  style={styles.select}
                >
                  <option value="">Select Bank</option>
                  {banks.map((bank) => (
                    <option key={bank.id} value={bank.id}>
                      {bank.name}
                    </option>
                  ))}
                </select>
              </div>
              {selectedBank && (
                <div className="form-group" style={styles.formGroup}>
                  <label htmlFor="riskTypeSelect" style={styles.label}>
                    Select Risk Type:
                  </label>
                  <select
                    id="riskTypeSelect"
                    className="form-control"
                    value={selectedRiskType}
                    onChange={handleRiskTypeChange}
                    style={styles.select}
                  >
                    <option value="">Select Risk Type</option>
                    {riskTypes.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <div className="text-center mt-4">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={handleAnalyseClick}
                  disabled={!selectedBank || !selectedRiskType}
                  style={styles.button}
                >
                  Analyse
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskAnalysisForm;

const styles = {
  container: {
    marginTop: "20px",
    backgroundColor: "#f0f8fb", // Light shade of blue background
    minHeight: "100vh", // Adjust height as needed
    padding: "20px", // Add padding for content spacing
  },
  card: {
    borderRadius: "10px", // Rounded corners for card
  },
  cardHeader: {
    backgroundColor: "#2a6e85", // Blue header background
    color: "white", // White text color
    padding: "10px",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
  cardBody: {
    padding: "20px",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    marginBottom: "5px",
    fontWeight: "bold",
  },
  select: {
    borderRadius: "5px",
  },
  button: {
    marginTop: "20px",
    width: "100%",
    backgroundColor: "#c24607", // Blue button background
    border: "2px solid #800000", // Blue button border
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", // Custom font
    transition: "background-color 0.3s ease-in-out", // Smooth transition for background color
    "&:hover": {
      backgroundColor: "#FAA0A0", // Darker blue on hover
      borderColor: "#FAA0A0", // Darker border on hover
    },
  },
};
