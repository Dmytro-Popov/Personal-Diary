import { useEffect, useState } from 'react'
import Header from './components/Header'
import AddEntryModal from './components/AddEntryModal'
import EntryList from './components/EntryList'
import ViewEntryModal from './components/ViewEntryModal'

const App = () => {
  const [isAddOpen, setIsAddOpen] = useState(false)
  const [selectedEntry, setSelectedEntry] = useState(null)

  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem('diaryEntries')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('diaryEntries', JSON.stringify(entries))
  }, [entries])

  const handleAddEntry = (entry) => {
    setEntries((prev) => [...prev, entry])
    setIsAddOpen(false)
  }

  return (
    <div>
      <Header onAddClick={() => setIsAddOpen(true)} />
      <div className="min-h-screen w-full bg-zinc-900 text-white">
        <EntryList
          entries={entries}
          onSelect={(entry) => setSelectedEntry(entry)}
        />

        {isAddOpen && (
          <AddEntryModal
            onClose={() => setIsAddOpen(false)}
            onSubmit={handleAddEntry}
          />
        )}
        {selectedEntry && (
          <ViewEntryModal
            entry={selectedEntry}
            onClose={() => setSelectedEntry(null)}
          />
        )}
      </div>
    </div>
  )
}
export default App
