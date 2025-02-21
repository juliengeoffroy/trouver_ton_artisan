import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Formulaire.css";

const Formulaire = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    objet: '',
    message: '',
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message envoyé');
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', objet: '', message: '' });
    
  };

  const handleRetour = () => {
    navigate('/'); // Retourner à la page précédente
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Contactez cet Artisan</h3>
        <div>
          <label>Nom:</label>
          <input
            type="text"
            name="name"
            placeholder="Nom"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Objet:</label>
          <input
            type="objet"
            name="objet"
            placeholder="Objet" 
            value={formData.objet}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Envoyer</button>
        <button onClick={handleRetour}>Retour à l'accueil</button>
        <br />
      </form>
    </div>
  );
};

export default Formulaire;