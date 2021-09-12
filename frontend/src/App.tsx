import DataTable from "components/datatable";
import NavBar from "components/NavBar";
import Footer from "components/footer";
import BarChart from "components/barchart";
import DonutChart from "components/DonnutChart";


function App() { //
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3 text">Dashboard de vendas</h1>


        <div className="row px-3">
          <div className="col-sm-6">
            <h4 className="text-center text-secondary">
              Taxa de sucesso(%)
            </h4>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h4 className="text-center text-secondary">
              Taxa de sucesso(%)
            </h4>
            <DonutChart />
          </div>
        </div>
        <div className="py-3">
          <h2 className="text-primary"></h2>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App; // o que vai ficar visível(tipo um public)
