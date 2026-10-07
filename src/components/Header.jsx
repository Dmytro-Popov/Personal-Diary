const AddEntryButton = ({ onClick }) => (
  <button onClick={onClick} className="">
    Eintrag hinzufügen
  </button>
)

const Header = ({ onAddClick }) => (
  <header className="sticky top-0 z-40">
    <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
      <h1 className="text-xl font-semibold tracking-tight">
        Mein <span className=""></span>Tagebuch
      </h1>
      <div className="btn">
        <AddEntryButton onClick={onAddClick} />
      </div>
    </div>
  </header>
)

export default Header
