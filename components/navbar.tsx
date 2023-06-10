"use client"
import React,{useState,useEffect} from "react";
import Image from "next/image";
import { Search, ShoppingCart,Menu, User2 } from "lucide-react";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import Link from "next/link"
import { getAllcategories } from "@/fetch/categoryList";

// const catArr = async () => {
//   const catArray = await getAllcategories();

// console.log("cat array from catArr function is",catArray)
//   return catArray;
// }

const Navbar = () => {
  
  const [categoryArray, setCategoryArray] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await getAllcategories();
        setCategoryArray(categories);
      } catch (error) {
        
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  console.log("cat has",categoryArray)
  
    return (
      <nav className="flex justify-between items-center h-20 px-10">
      
      <div >
<NavigationMenu className="">
  <NavigationMenuList>
  <NavigationMenuItem>
     <NavigationMenuTrigger>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
       fill="none" stroke="currentColor" strokeWidth="2" 
       strokeLinecap="round" strokeLinejoin="round" 
       className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/>
       <line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
       </NavigationMenuTrigger>
               <NavigationMenuContent>
                {categoryArray.map((component,i) =>{ 
              
                return(
                  <ul className="grid w-[200px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                 <ListItem  key={i} href={component.Name}>
                  {component.Name}
                 </ListItem>
                 </ul>
              )})}
             
           </NavigationMenuContent>
         </NavigationMenuItem>
        </NavigationMenuList>
</NavigationMenu>

</div>

<div className=" flex-shrink-0 py-8 p-4 w-40 h-40  md:h-40 md:w-40">
         <Image
          width={140}
          height={140}
           className="rounded-xl p-4"
           src="/zainiee1.jpg"
           alt="Zainiee"
         />

       </div>
       <div className="flex justify-between">
                        <div className="mr-4">
                    <button className="bg-gray-300 p-2 rounded-full">
                    <User2/>
                    </button>
                  </div>
     
      <div className="p-2 rounded-full bg-gray-300">
      
        <ShoppingCart className="relative " />
        <span className="absolute top-2  h-6 w-6 text-center rounded-full bg-[#f02d34] text-white">
          0
        </span>
      </div>
      </div> 
</nav>    
    );
  }


export default Navbar


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"


