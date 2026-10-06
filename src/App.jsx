import { useState } from 'react'
import Header from './components/Header'
import AddEntryModal from './components/AddEntryModal'

const App = () => {
  const [isAddOpen, setIsAddOpen] = useState(false)
  const [entries, setEntries] = useState([])

  const handleAddEntry = (entry) => {
    setEntries((prev) => [...prev, entry])
    setIsAddOpen(false)
  }

  return (
    <div>
      <Header onAddClick={() => setIsAddOpen(true)} />

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
