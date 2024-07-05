"use client"
import { useState } from 'react'
import * as React from "react"
import { Calendar } from "@/components/ui/calendar"



export default function Page() {
  const [date, setDate] = useState<Date | undefined>();
  const [multipleDate, setMultipleDate] = useState<Date[] | undefined>();


  const smallDate = date?.toLocaleDateString('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })



  return (
    <div className='flex flex-wrap gap-4'>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        disabled={ (date) => date.getDate() === 0 || date.getDate() === 6 }
      />
      <Calendar
        max={ 2 }
        mode="multiple"
        selected={multipleDate}
        onSelect={setMultipleDate}
        className="rounded-md border"
      />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />

      <div>
        <h1 className='text-3xl'>Informacion</h1>
        <div className="border-b">
          <p>{smallDate}</p>
        </div>
      </div>

    </div>
  );
}