import { Badge } from "@/components/ui/badge"


export default function Page() {

  return (
    <div className='grid grid-cols-4 gap-4'>
      <Badge>default</Badge>
      <Badge variant='destructive' capitalize>destructive</Badge>
      <Badge variant='secondary'>secondary</Badge>
      <Badge variant='outline' capitalize>outline</Badge>
    </div>
  );
}