import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormEvent, useState } from "react"


import { useAppDispatch } from "@/redux/hook"


function AddTodoModal() {
     const [task, setTask] = useState('');
     const [description, setDescripton] = useState('')
     const dispatch = useAppDispatch()
 
     const onSubmit = (e: FormEvent) =>{
        e.preventDefault();

 
     }



  return (
     <Dialog>
     <DialogTrigger asChild>
     <Button className="bg-primary-gradient text-xl font-semibold">Add todo</Button>
       {/* <Button variant="outline">Edit Profile</Button> */}
     </DialogTrigger>
     <DialogContent className="sm:max-w-[425px]">
       <DialogHeader>
         <DialogTitle>Edit profile</DialogTitle>
         <DialogDescription>
           Add your tasks that you want to finish.
         </DialogDescription>
       </DialogHeader>
       <form onSubmit={onSubmit} className="grid gap-4 py-4">
         <div className="grid grid-cols-4 items-center gap-4">
           <Label htmlFor="Task" className="text-right">
             Task
           </Label>
           <Input
            onBlur={(e) => setTask(e.target.value)}
             id="name"
             className="col-span-3"
           />
         </div>
         <div className="grid grid-cols-4 items-center gap-4">
           <Label htmlFor="Description" className="text-right">
             Description
           </Label>
           <Input
             onBlur={(e) => setDescripton(e.target.value)}
             id="username"
             className="col-span-3"
           />
         </div>
         <div className="flex justify-end">
          <DialogClose asChild>
           <Button className="bg-primary-gradient" type="submit">Save changes</Button>
          </DialogClose>
         </div>
       </form>
     </DialogContent>
   </Dialog>
  )
}

export default AddTodoModal