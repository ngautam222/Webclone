import { GlobeAltIcon } from "@heroicons/react/solid"

function Foot() {
    return (
      <footer className="grid w-full bg-gray-100 text-gray-500 divide-y-[1px]">
      <div className="px-8 py-3">
          <p>United States</p>
          
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense px-6 py-3">
            <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2">
                <GlobeAltIcon className="h-5 mr-2 text-green-600"/>Carbon Neutral
                </div>
                <div className="flex justify-center space-x-6 whitespace-nowrap md:justify-self-start">
                    <p>Advertising</p>
                    <p>Business</p>
                    
                </div>
                <div className="flex justify-center space-x-8 md:ml-auto">
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Settings</p>
                </div>
                </div>
            </footer>
  )
}

export default Foot