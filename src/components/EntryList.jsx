const EntryList = ({ entries, onSelect }) => {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {entries.map((entry, index) => (
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
            <h2 className="card-title">{entry.title}</h2>
            <p className="text-sm opacity-60">
              {entry.date}
            </p>
            <p>{entry.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EntryList;
