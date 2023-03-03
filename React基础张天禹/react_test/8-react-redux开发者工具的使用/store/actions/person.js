import { ADD_PERSON } from "../constant"

export const createPersonAction = personObj => ({type: ADD_PERSON, data: personObj})