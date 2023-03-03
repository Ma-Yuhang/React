import {SAVE_TITLE} from '../constant'

const initState = ''
export default function countReducer(preState = initState,action) {
  const {type,data} = action
  switch (type) {
    case SAVE_TITLE:
      return data
    default:
      return preState
  }
}