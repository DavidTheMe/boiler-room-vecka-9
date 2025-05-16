const SearchResultSong = (props) => {
  return (
    <>
      <div className="card p-2 m-4 rounded flex">
        <h3 className=" mr-8 w-1/5">{props.songName}</h3>
        <h3 className=" mr-8 w-1/5">{props.artist}</h3>
        <button
          aria-label="Lägg till låt i spellista"
          className="rounded m-0 bg-green-500 text-white py-2 px-4 hover:bg-green-600 transition-colors duration-300"
        >
          Lägg till i spellista
        </button>
      </div>
    </>
  );
};

export default SearchResultSong;
