import React from 'react'
import {FirstProps} from '../model/reminder'

function First({items}:FirstProps) {
  return (
    <div>
      {items.map(a=><li key={a.id}>{a.title}</li>)}
    </div>
  )
}

export default First
