const EntryDetails = ({ entry, onClose }) => {
  return (
    <div className="p-6 ">
      <h2 className="text-2xl text-black font-semibold">{entry.title}</h2>

      <p className="mt-2 text-sm opacity-60 text-black">{entry.date}</p>

      <img
        src={entry.image}
        alt={entry.title}
        className="mt-4 w-full rounded-xl"
      />

      <p className="mt-4 text-black">{entry.text}</p>

      <button onClick={onClose} className="mt-6 btn btn-dash rounded-lg border px-4 py-2 text-black">
        Schließen
      
      </button>
    </div>
  )
}

export default EntryDetails
