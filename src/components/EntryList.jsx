// const EntryList = ({ entries }) => {
//   return (
//     <div>
//       {entries.map((entry, index) => (
//         <div key={index}>
//           <h2>{entry.title}</h2>
//           <p>{entry.date}</p>
//           <img src={entry.image} alt="" />
//           <p>{entry.text}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default EntryList;


const EntryList = ({ entries }) => {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {entries.map((entry) => (
        <div
          key={entry.id}
          className="card bg-base-100 shadow-sm"
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
