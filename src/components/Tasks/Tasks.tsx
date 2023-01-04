import React from 'react'

import type { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'

import { setTaskContextMenuData, toggleContextmenu } from '../../redux/slices/interfaceSlice'

import { TaskType } from '../..'
import Widget from '../Widget/Widget'
import ContextMenu from '../ContextMenu/ContextMenu'

import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TaskInput from './TaskInput/TaskInput'
import SubTaskInput from './SubTaskInput/SubTaskInput'
import TaskItem from './TaskItem/TaskItem'
import EditMenu from '../EditMenu/EditMenu'
import { Stack } from '@mui/material'
import GenerateIcon from '../Icons/GenerateIcon'

export default function MuiTasks() {

   const dispatch = useDispatch()
   const tasks = useSelector((state: RootState) => state.tasks.tasks).filter(
      task => task.isDone === false
   )

   const iconsInWidget = useSelector((state: RootState) =>
      state.activity.activity).filter(
         activity => activity.widget.widgetIcons !== null
      )
   const menuTypeOpen = useSelector((state: RootState) =>
      state.interface.taskBlock.menu.menuTypeOpen
   )
   const anchorPosition = useSelector((state: RootState) =>
      state.interface.taskBlock.menu.contextMenu.contextMenuPosition)

   const handleContextMenu = (e: React.MouseEvent<HTMLElement>,
      name: string, id: number, color: string) => {
      e.stopPropagation()
      e.preventDefault()

      const position = () => (
         anchorPosition === null
            ? {
               mouseX: e.clientX + 2,
               mouseY: e.clientY - 6,
            }
            : null
      )

      dispatch(setTaskContextMenuData({
         id: id,
         position: position(),
      }))

      dispatch(toggleContextmenu({}))
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
            <div key={task.date}>
               <TaskItem
                  label={task.name}
                  nodeId={String(task.date)}
                  style={{ 'color': task.color }}
                  onContextMenu={(e) => { handleContextMenu(e, task.name, task.date, task.color) }}
                  sx={task.isLineThrough ? {
                     textDecoration: "line-through"
                  } : {}}
               >
                  {Array.isArray(task.childrens) ? task.childrens.map((node) => renderTree(node)) : null}
                  < SubTaskInput id={task.date} color={task.color} />
               </TaskItem >
               <ContextMenu />
            </div>
         )
      }
   };

   const printTaskBlock = () => {
      switch (menuTypeOpen) {
         case 'editMenu':
            return <EditMenu type={'task'}></EditMenu>
         default:
            return (<>
               <Stack spacing={2}>

                  {/* <Widget iconsActs={iconsInWidget} /> */}
                  <TreeView
                     aria-label="icon expansion"
                     defaultCollapseIcon={<ExpandMoreIcon />}
                     defaultExpandIcon={<ChevronRightIcon />}
                     expanded={expandedTaskIds}
                     sx={{ height: 218, flexGrow: 1, width: 340, overflowY: 'auto' }}
                  >
                     {tasks.map((task: TaskType) => (
                        renderTree(task)
                     ))}
                     <TaskInput />
                  </TreeView>
               </Stack>
            </>
            )
      }
   }

   return (
      <>{printTaskBlock()}</>
   );
}
