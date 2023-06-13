import React, { useState ,useEffect} from 'react'
import { FirstList } from '../model/reminder'
import reminderService from '../Services/reminder'

function StateHook() {
    const [reminders,setReminders]=useState<FirstList[]>([]) 
    useEffect(()=>{
        loadReminder()
    }, [])
    const loadReminder=async()=>{
       const reminders= await reminderService.getReminders()  
       setReminders(reminders)
    }
    console.log(reminders);
    
  return (
    <div>
      {reminders.map(a=><li key={a.id}>{a.title}</li>)}
    </div>
  ) 
}

export default StateHook
