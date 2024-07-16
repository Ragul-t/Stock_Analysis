import React, { useState } from "react";
import "../form.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Formcomp() {
  const params = new URLSearchParams(window.location.search);
  const error = params.get("error");
  const [selectedRisk, setSelectedRisk] = useState("");

  const selectRisk = (risk) => {
    setSelectedRisk(risk);
  };

  return (
    <div>
      <section>
        <div className="form-container">
          <h1>Risk Form</h1>
          <form action="#" method="post">
            <div className="control">
              {error && (
                <p className="error" style={{ color: "red" }}>
                  {error}
                </p>
              )}
            </div>
            <div className="control">
              <label htmlFor="enterprise">Enterprise</label>
              <input
                placeholder="Enterprise"
                type="text"
                name="enterprise"
                id="enterprise"
              />
            </div>
            <input
              type="hidden"
              id="selectedRisk"
              name="selectedRisk"
              value={selectedRisk}
            />
            <div className="control">
              <label htmlFor="risk">Risk</label>
              <div className="dropdown wide-dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {selectedRisk || "Select the risk"}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => selectRisk("Risk 1")}
                    >
                      Risk 1
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => selectRisk("Risk 2")}
                    >
                      Risk 2
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => selectRisk("Risk 3")}
                    >
                      Risk 3
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <br />
            <br />
            <div className="control">
              <input type="submit" value="Analyse" />
            </div>
          </form>
          <br />
        </div>
      </section>
    </div>
  );
}
