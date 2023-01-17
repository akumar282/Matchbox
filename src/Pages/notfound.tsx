import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
export default function NotFound () {
  return (
    <div>
        <h1>404 Not Found</h1>
        <Button to = "/" component = {Link}>
            Go Home
            
        </Button>
    </div>
  )
}
