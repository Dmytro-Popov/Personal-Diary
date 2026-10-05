import Cover from "./Cover";

const EntryDetails = ({ entry, onClose }) => (
  <>
    <Cover src={entry.image} className="aspect-video" />

    <div className="p-6">
      <p className="text-xs text-zinc-400">
        {formatDate(entry.date)}
      </p>

      <h2 className="mt-1 text-2xl font-semibold">
        {entry.title}
      </h2>

      <p className="mt-4 whitespace-pre-wrap text-zinc-300">
        {entry.text}
      </p>

      <div className="mt-6 flex justify-end">
        <button
          onClick={onClose}
          className="rounded-lg border border-zinc-800 px-4 py-2 text-sm text-zinc-400 hover:text-zinc-100"
        >
          Schließen
        </button>
      </div>
    </div>
  </>
);

export default EntryDetails;