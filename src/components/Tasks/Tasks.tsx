import React from 'react'

import type { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'

import { setOpenMenu, setTaskMenuData } from '../../redux/slices/interfaceSlice'

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
import EditMenu from '../EditMenu/EditMenu'

export default function MuiTasks() {

   const dispatch = useDispatch()
   const tasks = useSelector((state: RootState) => state.tasks.tasks).filter(
      task => task.isDone === false
   )

   const iconsInWidget = useSelector((state: RootState) =>
      state.activity.activity).filter(
         activity => activity.widget.widgetIcons !== null
      )
   const menuOpen = useSelector((state: RootState) =>
      state.interface.taskBlock.menu.openMenu
   )

   let menuControl = false

   const openContextMenu = (e: React.MouseEvent<HTMLLIElement>,
      name: string, id: number, color: string) => {
         e.preventDefault();
         if (menuControl === false) {
         console.log('name', name);
         dispatch(setOpenMenu({ openMenu: 'contextMenu' }))
         dispatch(setTaskMenuData({ name: name, id: id, color: color }))
         menuControl = true
      }
   }

   const taskIdsCount = (tasks: TaskType[]) => {
      let arr: string[] = []
      const pushId = (tasks: TaskType[]) => {
         tasks.forEach((task) => {
            if (task.isExpanded) {
               arr.push(task.date + '')
               task.childrens && pushId(task.childrens)
            }
         })
      }
      pushId(tasks)
      return arr
   }

   const expandedTaskIds = taskIdsCount(useSelector((state: RootState) =>
      state.tasks.tasks).filter(
         task => task.isExpanded === true
      )
   )

   const renderTree = (task: TaskType) => {
      if (task.isDone === false) {
         return (
            <TaskItem
               key={task.date}
               label={task.name}
               nodeId={String(task.date)}
               style={{ 'color': task.color }}
               onContextMenu={(e) => { openContextMenu(e, task.name, task.date, task.color) }}
               sx={task.isLineThrough ? {
                  textDecoration: "line-through"
               } : {}}
            >
               {Array.isArray(task.childrens) ? task.childrens.map((node) => renderTree(node)) : null}
               < SubTaskInput id={task.date} color={task.color} />
            </TaskItem >
         )
      }
   };

   const printTaskBlock = () => {
      switch (menuOpen) {
         case 'contextMenu':
            return <ContextMenu></ContextMenu>
         case 'editMenu':
            return <EditMenu type={'task'}></EditMenu>
         case false:
            return (<>
               <Widget iconsActs={iconsInWidget} />
               <Divider />
               <TreeView
                  aria-label="icon expansion"
                  defaultCollapseIcon={<ExpandMoreIcon />}
                  defaultExpandIcon={<ChevronRightIcon />}
                  expanded={expandedTaskIds}
                  sx={{ height: 225, flexGrow: 1, width: 340, overflowY: 'auto' }}
               >
                  {tasks.map((task: TaskType) => (
                     renderTree(task)
                  ))}
                  <TaskInput />
               </TreeView>
            </>)
         default:
            break;
      }
   }

   return (
      <>{printTaskBlock()}</>
   );
}
