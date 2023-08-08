import { links } from "./data";
import { IconType } from 'react-icons'

export interface ISkill {
  name: string
  level: string
  Icon: IconType,
}

export type SectionName = (typeof links)[number]["name"];