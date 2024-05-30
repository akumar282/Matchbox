import {ButtonHTMLAttributes} from 'react'

export interface ProjectViewProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string
  title: string
  image: string
  github: string
}