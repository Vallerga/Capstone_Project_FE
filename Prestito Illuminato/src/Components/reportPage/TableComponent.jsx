import Table from "react-bootstrap/Table";

function TableComponent({ tableValue }) {
  let buffer;
  let decimal;
  return (
    <>
    <Table striped hover className="d-lg-none text-center table1">
      <thead>
        <tr className="logoColorBright logoBgDark">
          <th>#</th>
          <th>Importo mutuo</th>
          <th>Importo complessivo</th>
          <th>Tipologia</th>
          <th>Sostenibilità</th>
          <th>Tasso</th>
          <th>TAEG</th>
          <th>Importo mensile</th>
        </tr>
      </thead>
      <tbody>
        {tableValue && tableValue.map((report) => {          
            buffer = report.monthlyRate - Math.floor(report.monthlyRate);
            decimal = buffer.toString().slice(2, 4);
            if(buffer === 0) {
              decimal = "00";
            }
          return (
            <tr key={report.id} className="logoBgBright">
              <td className="logoColorDark2">{report.id}</td>
              <td className="logoColorDark2">{report.actualLoanRequest}€</td>
              <td className="logoColorDark2">{report.actualTotalImport}€</td>
              <td className="logoColorDark2">{report.rateFixOrVar}</td>
              <td className="logoColorDark2">{report.sustainability}</td>
              <td className="logoColorDark2">{report.rate}</td>
              <td className="logoColorDark2">{report.taeg}%</td>
              <td className="logoColorDark2"><strong><span>{Math.floor(report.monthlyRate)},</span>{decimal}€</strong></td>
            </tr>
          );
        })}
      </tbody>
    </Table>
    <Table striped hover className="table2 text-center">
      <thead>
        <tr className="logoColorBright logoBgDark">
          <th>#</th>
          <th>Importo mutuo</th>
          <th>Importo complessivo</th>
          <th>Tipologia</th>
          <th>Sostenibilità</th>
          <th>Tasso</th>
          <th>TAEG</th>
          <th>Importo mensile</th>
        </tr>
      </thead>
      <tbody>
        {tableValue && tableValue.map((report) => {
          return (
            <tr key={report.id} className="logoBgBright">
              <td className="logoColorDark2">{report.id}</td>
              <td className="logoColorDark2">{report.actualLoanRequest}€</td>
              <td className="logoColorDark2">{report.actualTotalImport}€</td>
              <td className="logoColorDark2">{report.rateFixOrVar}</td>
              <td className="logoColorDark2">{report.sustainability}</td>
              <td className="logoColorDark2">{report.rate}</td>
              <td className="logoColorDark2">{report.taeg}%</td>
              <td className="logoColorDark2"><strong><span>{Math.floor(report.monthlyRate)},</span>{decimal}€</strong></td>
            </tr>
          );
        })}        
      </tbody>
    </Table>
    </>
  );
}

export default TableComponent;
