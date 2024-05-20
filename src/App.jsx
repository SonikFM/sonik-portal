import { useSelector } from 'react-redux';
import './App.css'
import { Button } from '@/components/ui/button';
import { useGetTodosQuery } from '@/apis/todos';

function App() {

  const state = useSelector(state => state.app)
  const { data, error, isLoading } = useGetTodosQuery()
  console.log({state, data, error, isLoading})

 return (
   <>
     <Button>Secondary</Button> <br /><br />
     <Button variant="destructive">Here</Button> <br /><br />
     <Button variant="secondary">Secondary</Button> <br /><br />
     <Button variant="ghost">Secondary</Button> <br /><br />
   </>
 )
}

export default App
