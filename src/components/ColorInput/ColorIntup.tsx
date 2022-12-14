import { MuiColorInput } from 'mui-color-input'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setEditTaskMenuData } from '../../redux/slices/interfaceSlice';
import { RootState } from '../../redux/store';

type Props = {
   type: 'task' | 'activity'
   startColor: string
}

export default function ColorIntup(props: Props) {

   const dispatch = useDispatch()
   const oldTaskColor = props.startColor
   const newTaskColor = useSelector((state: RootState) =>
   state.interface.taskBlock.menu.editMenuData.newColor
   )

   const handleChange = (color: string) => {
      dispatch(setEditTaskMenuData({color}))
   }

   return (
      <MuiColorInput 
      value={newTaskColor === '' ? oldTaskColor : newTaskColor} 
      format="hex" 
      isAlphaHidden 
      variant='standard'
      fullWidth
      onChange={handleChange} 
      />
   )
}
