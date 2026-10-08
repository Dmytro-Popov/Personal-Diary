import { useState } from 'react'

const today = () => new Date().toISOString().slice(0, 10)
const inputClass = 'w-full rounded-lg border px-3 py-2'

const EntryForm = ({ onSubmit, onCancel }) => {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState(today())
  const [image, setImage] = useState('')
  const [text, setText] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title.trim() || !date || !image.trim() || !text.trim()) {
      setError('Füllen Sie alle Felder aus.')
      return
    }

    const result = onSubmit({
      title: title.trim(),
      date,
      image: image.trim(),
      text: text.trim(),
    })

    if (result) setError(result)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6">
      <h2 className="text-lg font-semibold text-black">Neuer Eintrag</h2>

      <label className="block text-sm text-zinc-900">
        Überschrift
        <input
          className={`${inputClass} mt-1.5`}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      <label className="block text-sm text-zinc-900">
        Datum
        <input
          type="date"
          className={`${inputClass} mt-1.5 [color-scheme:dark]`}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>

      <label className="block text-sm text-zinc-900">
        Bild-URL{' '}
        <input
          className={`${inputClass} mt-1.5`}
          placeholder="https://..."
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </label>

      <label className="block text-sm text-zinc-900">
        Text
        <textarea
          rows={5}
          className={`${inputClass} mt-1.5 resize-y`}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg border border-zinc-800 px-4 py-2 text-sm text-zinc-900 btn btn-outline btn-error"
        >
          Stornieren
        </button>

        <button
          type="submit"
          className="rounded-lg  px-4 py-2 text-sm font-semibold text-zinc-950 btn btn-warning"
        >
          Speichern
        </button>
      </div>
    </form>
  )
}

export default EntryForm
