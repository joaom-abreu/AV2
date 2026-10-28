import participantes from "./data/participantes";
import ParticipanteCard from "./components/ParticipanteCard";
import "./App.css";


function App() {
  return (
    <>
      <header className="topo"><h1>A Fazenda</h1></header>
      <main className="container">
        <p>{participantes.length} participantes.</p>
        <div className="grade">
          {participantes.nome.map((item) => <ParticipanteCard key={participantes.nome} item={item} />)}
        </div>
      </main>
    </>
  );
}
export default App;