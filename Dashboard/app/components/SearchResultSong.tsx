
const SearchResultSong = (props) => {
  return (
    <>
    <div className="bg-white p-2 m-4 rounded flex">
    <h3 className="text-black mr-8 w-1/5">{props.songName}</h3>
    <h3 className="text-gray-400 mr-8 w-1/5">{props.artist}</h3>
    <button className="rounded m-0 bg-blue-500 text-white py-2 px-4 hover:bg-blue-600 transition-colors duration-300">Add</button>

    </div>
    </>
  );
}

export default SearchResultSong;
