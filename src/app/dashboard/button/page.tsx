'use client'
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react";


export default function Page() {

  return (
    <div className='grid grid-cols-4 gap-2'>
      <Button>Default</Button>
      <Button variant='destructive'>Destructive</Button>
      <Button variant='ghost'>Ghost</Button>
      <Button variant='link'>Link</Button>
      <Button variant='outline'>Outlione</Button>
      <Button variant='secondary'>secondary</Button>
      <Button disabled>Disabled</Button>
      <Button onClick={ () => console.log('hello world') }>Click Me</Button>

      <Button>
        <Mail className="mr-2 h-4 w-4" /> Login with Email
      </Button>
    </div>
  );
}