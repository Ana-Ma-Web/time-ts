import React from 'react'
import type { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'

import { lineThroughTask, taskDone } from './../../redux/slices/tasksSlice'
import { setIsOpenMenu, setMenuData } from '../../redux/slices/interfaceSlice'


// import { makeStyles, withStyles } from '@material-ui/core/styles'
import TreeView from '@mui/lab/TreeView'
// import MuiTreeItem from '@material-ui/lab/TreeItem'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';


import { TaskType } from '../..'
import Widget from '../Widget/Widget'
import ContextMenu from '../ContextMenu/ContextMenu'
// import { IconButton } from '@material-ui/core'
import TaskInput from './TaskInput/TaskInput'
// import { makeStyles, withStyles } from '@mui/material'


// const useStyles = makeStyles({
//    root: {
//       minHeight: 268,
//       minWidth: 230,
//    },
//    list: {
//       flexGrow: 1,
//       maxWidth: 400,
//       color: 'wheet',
//       textAlign: 'left',
//    },
//    done: {
//       textDecoration: 'line-through'
//    },
// });

// const CustomTreeItem = withStyles({
//    root: {
//       "&.MuiTreeItem-root > .MuiTreeItem-content .MuiTreeItem-label:hover": {
//          color: "white",
//          backgroundColor: "transparent",
//          transition: '0.3s'
//       },
//       "&.Mui-selected > .MuiTreeItem-content .MuiTreeItem-label": {
//          backgroundColor: "transparent",
//       },
//       "&.Mui-selected:focus > .MuiTreeItem-content .MuiTreeItem-label": {
//          backgroundColor: "transparent",
//       }
//    },
// })(TreeItem);


function Tasks() {

   // const [text, setText] = useState('')

   const dispatch = useDispatch()

   // const classes = useStyles;

   let menuControl = false

   const iconsInWidget = useSelector((state: RootState) =>
      state.activity.activity).filter(
         activity => activity.widget.widgetIcons !== null
      )

   const tasks = useSelector((state: RootState) => state.tasks.tasks).filter(
      task => task.isDone === false
   )

   const isMenuOpen = useSelector((state: RootState) =>
      state.interface.taskBlock.menu.isOpenMenu
   )

   // const inputClear = () => {
   //    setText('')
   // }

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

   const handleLabelClick = (e: React.MouseEvent<Element, MouseEvent>,
      id: number) => {
      e.preventDefault();
      dispatch(lineThroughTask({ date: id }))
      setTimeout(() => {
         dispatch(taskDone({ date: id }))
      }, 2000);
   }

   // const createNewTask = (name: string, color: string) => {
   //    if (name !== '') {
   //       dispatch(taskAdd({ name, color }))
   //       inputClear()
   //    }
   // }

   // const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
   //    switch (event.code) {
   //       case 'Enter':
   //          createNewTask(text, 'white')
   //          break;
   //       case 'Escape':
   //          inputClear()
   //          break;
   //       default:
   //          break;
   //    }
   // }
      
   const tasksIds = (tasks: TaskType[]) => {
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

   const renderTree = (task: TaskType) => {
      if (task.isDone === false) {
         return (
            <div key={task.date}>
               <TreeItem
                  // className={task.isLineThrough ? classes.done : ''}
                  key={task.date}
                  label={task.name}
                  nodeId={String(task.date)}
                  style={{ 'color': task.color }}
                  onContextMenu={(e) => { openContextMenu(e, task.name, task.date) }}
                  // onLabelClick={(e) => { handleLabelClick(e, task.date) }}
                  // style={{ textDecoration : task.isLineThrough ? 'line-through' : 'none' }} 
                  sx={task.isLineThrough ? {
                     textDecoration: "line-through"
                  } : {}}
                  >
                  {Array.isArray(task.childrens) ? task.childrens.map((node) => renderTree(node)) : null}
               </TreeItem>
            </div>
         )
      }
   };


   return (
      <div>
         {isMenuOpen ? (
            <ContextMenu></ContextMenu>
         ) : (
            <>
               <Widget iconsActs={iconsInWidget} />
               <TreeView
                  // className={classes.list}
                  defaultCollapseIcon={<ExpandMoreIcon />}
                  defaultExpanded={tasksIds(tasks)}
                  defaultExpandIcon={<ChevronRightIcon />}
               >
                  {tasks.map((task: TaskType) => (
                     renderTree(task)
                  ))
                  }
                  <TaskInput/>
               </TreeView>
            </>
         )}
      </div>
   )
}

export default Tasks