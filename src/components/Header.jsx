const AddEntryButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="btn btn-warning text-black cursor-pointer w-fit"
  >
    Eintrag hinzufügen
  </button>
)

const Header = ({ onAddClick }) => (
  <header className="fixed bottom-0 left-0 right-0 z-40 md:sticky md:top-0 bg-zinc-900/95 backdrop-blur-lg border-t md:border-t-0 md:border-b border-white/20 py-3 md:py-4 ">
    <div className="mx-auto flex h-16 max-w-7xl w-full items-center justify-between px-6">
         <a href="#">
      <div className="flex items-center">
        <img 
          src="/src/assets/logo.png" 
          alt="Logo" 
          className="w-25 object-contain" 
        />
      </div>
      </a>
   
      <h1 className="text-xl md:text-2xl font-semibold tracking-tight text-white hidden md:block">
        Mein Tagebuch
      </h1>
      <AddEntryButton onClick={onAddClick} />
    </div>
  </header>
)

export default Header
