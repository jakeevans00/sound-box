import SongList from "./SongList";

export default function Recommended() {
  return (
    <>
      <div className="flex-1">
        <h3 className="font-bold">Choose a Song</h3>
        <SongList />
      </div>
    </>
  );
}
