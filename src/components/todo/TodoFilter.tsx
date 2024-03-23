import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"

function TodoFilter() {
     const [position, setPosition] = useState("bottom")
  return (
     <DropdownMenu>
     <DropdownMenuTrigger asChild>
      <Button className="bg-primary-gradient text-xl font-semibold">Filter</Button>
     </DropdownMenuTrigger>
     <DropdownMenuContent className="w-56">
       <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
       <DropdownMenuSeparator />
       <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
         <DropdownMenuRadioItem value="High">High</DropdownMenuRadioItem>
         <DropdownMenuRadioItem value="Medium">Medium</DropdownMenuRadioItem>
         <DropdownMenuRadioItem value="Low">Low</DropdownMenuRadioItem>
       </DropdownMenuRadioGroup>
     </DropdownMenuContent>
   </DropdownMenu>
  )
}

export default TodoFilter