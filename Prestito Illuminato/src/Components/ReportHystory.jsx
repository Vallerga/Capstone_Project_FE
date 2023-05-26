import { useState } from "react";
import { useSelector } from "react-redux";

const ReportHistory = () => {
  const URL = "http://localhost:8080/api/reports";
  const [reports, setReports] = useState(null);
  const adminToken = useSelector((state) => state.security.adminToken);
  const reportFetch = async () => {
    try {
      const response = await fetch(URL, {
        headers: {
          Authorization: adminToken,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const results = await response.json();
        console.debug(`result: ${JSON.stringify(results, null, 2)}`);
        setReports(results);
      } else {
        alert(
          `errore durante download reports, response status: ${response.status}`
        );
      }
    } catch (error) {
      alert(`errore durante download reports: ${error}`);
    }
  };

  return (
    <>
      <div onClick={reportFetch}>CLICCAMI PER I REPORT</div>
      <div>{JSON.stringify(reports, null, 2)}</div>
    </>
  );
};

export default ReportHistory;
