const EntryList = ({ entries, onSelect}) => {

const sortedEntries = [...entries].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto w-full">
        
        {sortedEntries.map((entry, index) => (
          <div
            key={index}
            onClick={() => onSelect(entry)}
            className="card cursor-pointer bg-base-100 shadow-sm transition hover:scale-[1.02]"
          >
            <figure className="h-48 overflow-hidden">
              <img
                src={entry.image}
                alt={entry.title}
                className="h-full w-full object-cover"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title text-black">{entry.title}</h2>
              <p className="text-sm opacity-60 text-black">{entry.date}</p>
              <p className="text-black">{entry.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EntryList
