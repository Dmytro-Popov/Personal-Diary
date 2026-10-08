const EntryDetails = ({ entry, onClose, onDelete }) => {
  return (
    <div className="p-6 ">
      <h2 className="text-2xl text-black font-semibold">{entry.title}</h2>

      <p className="mt-2 text-sm opacity-60 text-black">{entry.date}</p>

      <img
        src={entry.image}
        alt={entry.title}
        className="mt-4 w-full rounded-xl"
      />

      <p className="mt-4 text-black pb-8">{entry.text}</p>

      <div className="flex justify-between gap-2">

        <button
          onClick={(e) => {
            e.stopPropagation()
            onDelete(entry)
          }}
          className="rounded-lg border-zinc-800 px-4 py-2 text-zinc-900 btn btn-outline btn-error"
        >
          Löschen
        </button>
                <button
          onClick={onClose}
          className="rounded-lg px-4 py-2 text-sm font-semibold text-zinc-950 btn btn-warning"
        >
          Schließen
        </button>
      </div>
    </div>
  )
}

export default EntryDetails
