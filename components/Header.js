import { MicrophoneIcon, XIcon,SearchIcon } from "@heroicons/react/solid"
import Image from "next/image"
import { useRouter } from "next/router"
import {useRef} from "react"
function Header() {
    const router = useRouter()
    const inputRef = useRef(null)
    const search = (x) => {
        x.preventDefault();
        const term = inputRef.current.value;
    
        if (!term) return;
        router.push(`/search?term=${term}`)
    
      };
  return (
      <header className ="sticky top-0 bg-white">
          <Image src="https://logodownload.org/wp-content/uploads/2014/09/google-logo-1.png"
              height={40} width={120} onClick={() => router.push("/")} className="cursor-pointer" />
          <div className ="flex w-full p-6 items-center">
          <form className="flex flex-grow border items-center px-6 py-3 ml-10 mr-5 border-gray-200 rounded-full ">
          <input ref ={inputRef} type="text" className="focus:outline-none  flex-grow"/>
              <XIcon className="h-7 text-gray-400 cursor-pointer transition duration-100 transform hover:scale-130"
                  onClick={() => { inputRef.current.value = "" }} />
              <MicrophoneIcon className="mr-3 h-6 cursor-pointer hidden sm:inline-flex text-blue-500 border-l-2 pl-3 border-gray-300" />
              <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex hover cursor-pointer" onClick={search}/>
                 <button hidden type="submit" onClick={search}></button>
              </form>
              </div>
    </header>
  )
}

export default Header