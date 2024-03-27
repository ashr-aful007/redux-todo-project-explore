
import TodoCard from './TodoCard'
import AddTodoModal from './AddTodoModal'
import TodoFilter from './TodoFilter'
import { useAppSelector } from '@/redux/hook'
// import { useGetTodosQuery } from '@/redux/api/api'

function TodoContainer() {
   //from local state
    const {todos} = useAppSelector((state) => state.todos)

    //from server
   //  const {data: todos,isLoading, isError} = useGetTodosQuery(undefined)

    
  return (
     <div>
     <div className="flex justify-between mb-5">
        <AddTodoModal></AddTodoModal>
        <TodoFilter></TodoFilter>
     </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl  p-[5px]">
         {/* <div className="bg-white p-5 flex text-2xl font-semibold justify-center items-center rounded-md">
            <p>There is no task pending</p>
         </div> */}
           <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
           {
            todos.map((item) => <TodoCard 
              key={item.id}
               id={item.id}
               title={item.title}
              description={item.description}
              isCompleted={item.isCompleted}
            />)
           }
           </div>
      </div>
   </div>
  )
}

export default TodoContainer