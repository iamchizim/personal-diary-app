import React from 'react'
import { useState } from 'react'
import { Entry
 } from '../utils/diary'
const DiaryForm =() =>{
const [date, setDate] = useState("")
const [title, setTitle] = useState("")
const [body, setBody] = useState('')

const newEntry = new Entry(date, title, body)

const handleAddEntry = (event:) =>{
    event.preventDefault()
    Entry.addEntry(newEntry)
    setDate('')
    setTitle('')
    setBody('')
}

return(
    <s
)
}
export default DiaryForm;