import React, { useContext } from 'react';
import '../styles/welcome.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import logo from '../assets/Logo_Fox.png';

const Welcome = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Si l'utilisateur est connecté ou non
  const startingLearning = () => {
    if (user) {
      navigate('/menu');
    } else {
      navigate('/login');
    }
  };

  // Si l'utilisateur est connecté ou non
  const startingInscr = () => {
    if (user) {
      navigate('/menu');
    } else {
      navigate('/register');
    }
  };

  return (
    <>
      {/* Bannière principale */}
      <section className="banner">
        <div className="banner-content">
          <img src={logo} alt="Fox Logo" className="logo-home" />
          <h1>Bienvenue à <span className="title-fox">Fox</span><span className="title-academy">Academy</span></h1>
          <p>Où l’apprentissage devient un jeu d’enfant ! Explorez, apprenez et jouez avec nous.</p>
          <button className="btn-cta" onClick={startingLearning}>
            Commencez à apprendre
          </button>
        </div>
      </section>

      {/* À propos */}
      <section className="about">
        <h2>À propos de FoxAcademy</h2>
        <p>FoxAcademy est un site dédié à rendre l'apprentissage amusant et interactif pour les enfants. Nous croyons que chaque enfant peut apprendre tout en jouant, et notre plateforme propose des jeux éducatifs, des activités interactives et des ressources pédagogiques adaptées à tous les âges.</p>
      </section>
{/* Fonctionnalités principales */}
      <section className="features">
        <h2>Fonctionnalités principales</h2>
        <div className="feature">
          <h3>Jeux éducatifs</h3>
          <p>Des jeux conçus pour stimuler la créativité et développer les compétences cognitives de vos enfants.</p>
        </div>
        <div className="feature">
          <h3>Activités interactives</h3>
          <p>Des activités amusantes qui encouragent l'apprentissage pratique et collaboratif.</p>
        </div>
        <div className="feature">
          <h3>Ressources pédagogiques</h3>
          <p>Des supports d’apprentissage pour aider vos enfants à réussir à l’école.</p>
        </div>
      </section>

      {/* Témoignages */}
      <section className="testimonials">
        <h2>Témoignages</h2>
        <blockquote>
          “Mon enfant adore les jeux sur FoxAcademy et a énormément progressé à l’école. Merci !” - Parent
        </blockquote>
        <blockquote>
          “J'apprends plein de choses tout en m'amusant avec mes amis !” - Enfant de 8 ans
        </blockquote>
      </section>

      {/* Bouton d'appel à l'action */}
      <section className="cta-section">
        <h2>Prêt à commencer ?</h2>
        <p>Inscrivez-vous dès maintenant et rejoignez des milliers d'enfants qui apprennent tout en s'amusant !</p>
        <button className="btn-cta" onClick={startingInscr}>
          C'est parti !
        </button>
      </section>

      {/* Footer */}
      <footer>
      <p>© 2024 FoxAcademy - Learn & Play. All rights reserved.</p>
      </footer>
    </>
  );
}
export default Welcome;
