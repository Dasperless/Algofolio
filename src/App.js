import { useState } from 'react'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'
import { PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import './App.css';

const products = [


  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [


  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
