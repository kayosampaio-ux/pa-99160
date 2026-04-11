import React, { useState } from "react";
import "./App.css";

function App() {
  const [nome, setNome] = useState("");
  const [serie, setSerie] = useState("");
  const [ator, setAtor] = useState("");
  const [personagens, setPersonagens] = useState([]);

  // URL de uma imagem padrão para o perfil (lembra o estilo clássico da Netflix)
  const fotoPadrao = "https://ih1.redbubble.net/image.618427277.3222/flat,128x128,075,t-pad,128x128,f8f8f8.u1.jpg";

  const salvarPersonagem = (e) => {
    e.preventDefault();

    if (!nome || !serie || !ator) {
      alert("Preencha todos os campos!");
      return;
    }

    const novoPersonagem = {
      id: Date.now(),
      nome,
      serie,
      ator,
      foto: fotoPadrao 
    };

    setPersonagens([...personagens, novoPersonagem]);

    // Limpar campos
    setNome("");
    setSerie("");
    setAtor("");
  };

  return (
    <div className="netflix-layout">
      {/* Header estilo Netflix - Centralizado */}
      <header className="netflix-header">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
          alt="Netflix Logo" 
          className="netflix-logo"
        />
      </header>

      <div className="container">
        {/* Área do Formulário (Área de Cadastro) */}
        <div className="form-section">
          <h1>Cadastrar Personagem</h1>
          <form onSubmit={salvarPersonagem} className="netflix-form">
            <div className="input-group">
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
              <label>Nome do Personagem</label>
            </div>

            <div className="input-group">
              <input
                type="text"
                value={serie}
                onChange={(e) => setSerie(e.target.value)}
                required
              />
              <label>Série (ex: O Mentalista)</label>
            </div>

            <div className="input-group">
              <input
                type="text"
                value={ator}
                onChange={(e) => setAtor(e.target.value)}
                required
              />
              <label>Ator / Atriz</label>
            </div>

            <button type="submit" className="netflix-button">Salvar Perfil</button>
          </form>
        </div>

        {/* Área da Lista (Quem está assistindo?) */}
        <div className="list-section">
          <h2>Quem está assistindo?</h2>
          
          {personagens.length === 0 ? (
            <p className="no-data">Nenhum personagem cadastrado ainda.</p>
          ) : (
            <div className="profile-grid">
              {personagens.map((p) => (
                <div key={p.id} className="profile-card">
                  <div className="profile-avatar-wrapper">
                    <img src={p.foto} alt={p.nome} className="profile-avatar" />
                    <div className="red-john-overlay">:)</div>
                  </div>
                  <span className="profile-name">{p.nome}</span>
                  <span className="profile-meta">{p.serie}</span>
                  <span className="profile-actor">{p.ator}</span>
                </div>
              ))}
              
              <div className="profile-card add-profile">
                <div className="profile-avatar-wrapper add-icon">
                  +
                </div>
                <span className="profile-name">Novo</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;