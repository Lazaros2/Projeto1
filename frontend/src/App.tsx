import DataTable from "components/datatable";
import NavBar from "components/NavBar";
import Footer from "components/footer";


function App() { //
  return (
    <>
    <NavBar/>
    <div className= "container">
      <h1 className="text-primary">Ola mundo</h1>
      
      <DataTable />
     
    </div>
     <Footer />
     </>
  );
}

export default App; // o que vai ficar visível(tipo um public)
