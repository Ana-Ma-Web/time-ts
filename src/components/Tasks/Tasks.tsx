import React from 'react'

import type { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'

import { setIsOpenMenu, setIsOpenSubTaskInput, setMenuData } from '../../redux/slices/interfaceSlice'

import { TaskType } from '../..'
import Widget from '../Widget/Widget'
import ContextMenu from '../ContextMenu/ContextMenu'
import Divider from '@mui/material/Divider'

import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TaskInput from './TaskInput/TaskInput'
import SubTaskInput from './SubTaskInput/SubTaskInput'
import TaskItem from './TaskItem/TaskItem'
// import { ClickAwayListener, IconButton, TextField } from '@mui/material'
// import AddRoundedIcon from '@mui/icons-material/AddRounded';


export default function MuiTasks() {

   const dispatch = useDispatch()
   const tasks = useSelector((state: RootState) => state.tasks.tasks).filter(
      task => task.isDone === false
   )
   
   const iconsInWidget = useSelector((state: RootState) =>
      state.activity.activity).filter(
         activity => activity.widget.widgetIcons !== null
      )
   const isMenuOpen = useSelector((state: RootState) =>
      state.interface.taskBlock.menu.isOpenMenu
   )

   let menuControl = false

   const openMenu = (taskId?: number) => {
      dispatch(setIsOpenMenu({ isOpenMenu: true }))
   }

   const openContextMenu = (e: React.MouseEvent<HTMLLIElement>,
      name: string, id: number) => {
      e.preventDefault();
      openMenu()
      if (menuControl === false) {
         dispatch(setMenuData({ name: name, id: id }))
         menuControl = true
      }
   }

   const tasksIdsCount = (tasks: TaskType[]) => {
      let arr: string[] = []
      const pushId = (tasks: TaskType[]) => {
         tasks.forEach((task) => {
            arr.push(task.date + '')
            task.childrens && pushId(task.childrens)
         })
      }
      pushId(tasks)
      return arr
   }

   const tasksIds = tasksIdsCount(tasks)

   const renderTree = (task: TaskType) => {
      if (task.isDone === false) {
         return (
            <div key={task.date}>
               <TaskItem
                  key={task.date}
                  label={task.name}
                  nodeId={String(task.date)}
                  style={{ 'color': task.color }}
                  onContextMenu={(e) => { openContextMenu(e, task.name, task.date) }}
                  ContentProps={{
                     id: task.date.toString(),
                  }}
                  sx={task.isLineThrough ? {
                     textDecoration: "line-through"
                  } : {}}
               >
                  {Array.isArray(task.childrens) ? task.childrens.map((node) => renderTree(node)) : null}
                  <SubTaskInput id={task.date} />
               </TaskItem>
            </div>
         )
      }
   };

   return (
      <>
         {isMenuOpen ? (
            <ContextMenu></ContextMenu>
         ) : (
            <>
               <Widget iconsActs={iconsInWidget} />
               <Divider />
               <TreeView
                  aria-label="icon expansion"
                  defaultCollapseIcon={<ExpandMoreIcon />}
                  defaultExpandIcon={<ChevronRightIcon />}
                  defaultExpanded={tasksIds}
                  expanded={tasksIds}
                  sx={{ height: 225, flexGrow: 1, width: 240, overflowY: 'auto' }}
               >
                  {tasks.map((task: TaskType) => (
                     renderTree(task)
                  ))
                  }
                  <TaskInput />
               </TreeView>
            </>
         )}
      </>
   );
}
