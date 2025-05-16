import { useNavigate } from "react-router-dom";

const PlaylistButton = () => {
  const navigate = useNavigate();

  const goToPlaylist = () => {
    navigate("/playlist");
  };

  return (
    <button
      onClick={goToPlaylist}
      className="float-right mt-0 mr-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300"
    >
      Gå till spellista
    </button>
  );
};

export default PlaylistButton;