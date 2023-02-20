export * from './constants'
import { EnumType } from 'typescript'
import { FrameworkTag, LanguageTag } from '../API'

type langBundle = {
  value: string
  label: string
  enumMap: LanguageTag
}

type frameworkBundle = {
  value: string
  label: string
  enumMap: FrameworkTag
}

export const LanguageTags : langBundle[] = [
  { value: "Java", label: "Java", enumMap: LanguageTag.JAVA },
  { value: "C++", label: "C++", enumMap: LanguageTag.C_PLUS_PLUS },
  { value: "C", label: "C", enumMap: LanguageTag.C},
  { value: "Python", label: "Python", enumMap: LanguageTag.PYTHON },
  { value: "C#", label: "C#", enumMap: LanguageTag.C_SHARP }, 
  { value: "JavaScript", label: "JavaScript", enumMap: LanguageTag.JAVASCRIPT },
  { value: "PHP", label: "PHP", enumMap: LanguageTag.PHP },
  { value: "Ruby", label: "Ruby", enumMap: LanguageTag.RUBY },
  { value: "HTML", label: "HTML", enumMap: LanguageTag.HTML },
  { value: "CSS", label: "CSS", enumMap: LanguageTag.CSS },
  { value: "Swift", label: "Swift", enumMap: LanguageTag.SWIFT },
  { value: "Go", label: "Go", enumMap: LanguageTag.GO },
  { value: "Rust", label: "Rust", enumMap: LanguageTag.RUST },
  { value: "Kotlin", label: "Kotlin", enumMap: LanguageTag.KOTLIN },
  { value: "Dart", label: "Dart", enumMap: LanguageTag.DART }, 
  { value: "Scala", label: "Scala", enumMap: LanguageTag.SCALA }, 
  { value: "TypeScript", label: "TypeScript", enumMap: LanguageTag.TYPESCRIPT },
  { value: "SQL", label: "SQL", enumMap: LanguageTag.SQL }, 
];

export const FrameworkTags: frameworkBundle[] = [
  { value: "React", label: "React", enumMap: FrameworkTag.REACT},
  { value: "React Native", label: "React Native", enumMap: FrameworkTag.REACT_NATIVE },
  { value: "Angular", label: "Angular", enumMap: FrameworkTag.ANGULAR },
  { value: "Vue", label: "Vue", enumMap: FrameworkTag.VUE },
  { value: "Node", label: "Node", enumMap: FrameworkTag.NODE },
  { value: "Express", label: "Express", enumMap: FrameworkTag.EXPRESS },
  { value: "WebSocketIO", label: "WebSocketIO", enumMap: FrameworkTag.WEB_SOCKET_IO },
  { value: "Django", label: "Django", enumMap: FrameworkTag.DJANGO },
  { value: "Flask", label: "Flask", enumMap: FrameworkTag.FLASK },
  { value: "MongoDB", label: "MongoDB", enumMap: FrameworkTag.MONGO_DB },
  { value: "MySQL", label: "MySQL", enumMap: FrameworkTag.MY_SQL },
  { value: "PostgreSQL", label: "PostgreSQL", enumMap: FrameworkTag.POSTGRES_SQL },
  { value: "Firebase", label: "Firebase", enumMap: FrameworkTag.FIREBASE },
  { value: "AWS", label: "AWS", enumMap: FrameworkTag.AWS },
  { value: "Azure", label: "Azure", enumMap: FrameworkTag.AZURE },
  { value: "Heroku", label: "Heroku", enumMap: FrameworkTag.HEROKU },
]

export const SizeTags = ["Small", "Medium", "Large"];
