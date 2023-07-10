/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';



function App() {

  return (
    <header className="bg-white">
    <nav className="mx-auto flex  items-center justify-center p-6 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <h1 className="font-bold text-3xl">Algofolio</h1>
          {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> */}
        </a>
      </div>
      
      <div className="hidden lg:flex lg:gap-x-32">
        
        <a href="#" className="text-xl leading-6 text-gray-900">
          Home
        </a>

        <a href="#" className="text-xl leading-6 text-gray-900">
          Algorithms
        </a>
        <a href="#" className="text-xl leading-6 text-gray-900">
          About
        </a>
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      </div>
    </nav>

  </header>
  );
}

export default App;
