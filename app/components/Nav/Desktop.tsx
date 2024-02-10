import Image from "next/image"
import { v4 as uuidv4 } from "uuid"
import SectionContainer from "../SectionContainer"
import { navOptions } from "./constants"

export default function DesktopNav() {
  return (
    <SectionContainer bgClasses="hidden lg:block bg-black  bg-gradient-to-t from-black/90 to-black/50 fixed h-16 w-screen left-0 top-0 z-50 !pt-0">
      <div className="relative flex w-full justify-between h-16 items-center">
        <div className="w-full">
          {" "}
          {/* <Image
            alt="jgharris314 logo"
            className="bg-black bg-gradient-to-t from-black/90 to-black/50 h-16 w-40"
            src={logo}
            width={0}
            height={0}
            sizes="100vw"
          /> */}
          [LOGO]
        </div>
        <ul className="flex w-full justify-end gap-4">
          {navOptions.map((option) => {
            return (
              <li
                key={uuidv4()}
                className="border-r-2 border-white last:border-none w-full text-center pr-4"
              >
                <a
                  className="capitalize text-[20px] font-semibold hover:border-b-4 hover:border-green-500 pb-2 text-white whitespace-nowrap"
                  href={`#${option}`}
                >
                  {option}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </SectionContainer>
  )
}
