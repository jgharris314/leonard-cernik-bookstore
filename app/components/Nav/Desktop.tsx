import Image from "next/image"
import { v4 as uuidv4 } from "uuid"
import SectionContainer from "../SectionContainer"
import { navOptions } from "./constants"

export default function DesktopNav() {
  return (
    <SectionContainer bgClasses="hidden xl:block bg-cernik-nav bg-gradient-to-t from-black/50 to-black/10 fixed h-[5.5rem] w-screen left-0 top-0 z-50 !pt-0">
      <div className="relative flex w-full justify-between h-[5.5rem] items-center -ml-2.5">
        <div className="w-full">
          {" "}
          <Image
            alt="leonard cernik logo"
            className="bg-black bg-gradient-to-t from-black/90 to-black/50 h-[5rem] w-auto"
            src={"/fromMatt9-16.jpg"}
            width={140}
            height={0}
          />
        </div>
        <ul className="flex w-full justify-end gap-4">
          {navOptions.map((option) => {
            return (
              <li
                key={uuidv4()}
                className="border-r-2 border-white last:border-none w-full text-center pr-4"
              >
                <a
                  className="capitalize text-[20px] font-semibold hover:border-b-4 hover:border-cernik-light-blue pb-2 text-cernik-white whitespace-nowrap"
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
