import { useState } from "react";
import Header from './components/Header'
import AddEntryModal from "./components/AddEntryModal";

const App = () => {
  const [isAddOpen, setIsAddOpen] = useState(false)
  return (
    <div>
      <Header onAddClick={() => setIsAddOpen(true)}/>

        {isAddOpen && (
          <AddEntryModal onClose={() => setIsAddOpen(false)} />
        )}
    </div>
  )
}
export default App
