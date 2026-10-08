const AddEntryButton = ({ onClick }) => (
  <button onClick={onClick} className="">
    Eintrag hinzufügen
  </button>
)

const Header = ({ onAddClick }) => (
  <header className="sticky top-0 z-45  backdrop-blur-md border-b border-zinc-800">
    <div className="mx-auto flex h-16 max-w-7xl w-full items-center justify-between px-6">
      <h1 className="text-xl font-semibold tracking-tight text-black">
        Mein <span className=""></span>Tagebuch
      </h1>
      <div className="btn">
        <AddEntryButton onClick={onAddClick} />
      </div>
    </div>
  </header>
)

export default Header
