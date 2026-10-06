import { useEffect, useState } from 'react'
import Header from './components/Header'
import AddEntryModal from './components/AddEntryModal'
import EntryList from './components/EntryList'

const App = () => {
  const [isAddOpen, setIsAddOpen] = useState(false)

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

      <EntryList entries={entries} />

      {isAddOpen && (
        <AddEntryModal
          onClose={() => setIsAddOpen(false)}
          onSubmit={handleAddEntry}
        />
      )}
    </div>
  )
}
export default App
