'use client'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from "next/link"
import Image from "next/image"
import  {sidebarLinks}  from "../constants"
import { usePathname } from "next/navigation"
import { cn } from '../lib/utils'


const MobileNavbar = ({user}:MobileNavProps) => {
  const pathname = usePathname();
  return (
    
    <section className="w-full max-w-[264]">
              {/* use sheet for mobile */}

              <Sheet>
  <SheetTrigger>
    <Image
    src="/icons/hamburger.svg"
    width={30}
    height={30}
    alt="menu icon"
    className="cursor-pointer"
    />
    </SheetTrigger>
  <SheetContent className="border-none bg-white">

  <Link href="/"
            className=' cursor-pointer items-center gap-2 flex'>
                <Image
                    src="/icons/logo.svg"
                    width={34}
                    height={34}
                    alt="/icons/logo.svg"
                   
                />
                <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>P.G Bank</h1>
            </Link>

                <div className="mobilenav-sheet">
                  <SheetClose asChild>
                    <nav className="flex h-full flex-col gap-6 pt-16 text-white">


                    {sidebarLinks.map((item)=>{
                const isActive = pathname === item.route || pathname.startsWith(`$item.router}/`)
                return (
                  
                    <Link href={item.route} key={item.label}
                    className={cn('mobilenav-sheet_close w-full', isActive ? "bg-bank-gradient": "text-black"
                
                    )}>
                            <Image
                            src={item.imgURL}
                            alt={item.label}
                            width={20}
                            height={20}
                            className={cn({
                                'brightness-[3] invert-0': isActive
                            })}
                            />
                        <p className={cn('text-16 font-semibold text-black-2',{
                            '!text-white' : isActive
                        })}>
                            {item.label}
                        </p>
                    </Link>
                )
            })}
            USER
                    </nav>
                  </SheetClose>
                </div>
            
  </SheetContent>
  FOOTER
</Sheet>
    </section>
  )
}

export default MobileNavbar
