function ParticipanteCard({ participante }) {
    const { nome, foto, naRoca} = participante;
    return (
    <div className="card">
        {participante.foto && <img src={participante.foto} alt={participante.nome} className="card-foto" />}
        <div className="card-info">
        <h2>{participante.nome}</h2>
        <p>RÓTULO: {participante.naRoca}</p>
      </div>
    </div>
  );
}
export default ParticipanteCard;