import { useNavigate } from "react-router-dom";
import botaoBack from "../assets/botaoBack.png";
import "../styles/backButton.css"; // ou outro caminho do seu CSS

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/")} className="back-button">
      <img src={botaoBack} alt="Voltar para Home" />
    </button>
  );
}
