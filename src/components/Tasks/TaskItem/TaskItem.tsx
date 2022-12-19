import React from 'react'

import { useDispatch } from 'react-redux'
import {
   toggleLineThroughTask,
   taskDone,
   toggleExpandTask
} from '../../../redux/slices/tasksSlice'

import TreeItem, {
   TreeItemProps,
   useTreeItem,
   TreeItemContentProps,
} from '@mui/lab/TreeItem';
import clsx from 'clsx';
import Typography from '@mui/material/Typography';
import { IconButton, Stack } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import { setEditTaskMenuId, setIsOpenSubTaskInput, setOpenMenu } from '../../../redux/slices/interfaceSlice';

const CustomContent = React.forwardRef(function CustomContent(
   props: TreeItemContentProps,
   ref,
) {
   const dispatch = useDispatch()

   const {
      classes,
      className,
      label,
      nodeId,
      icon: iconProp,
      expansionIcon,
      displayIcon,
   } = props;

   const {
      handleExpansion,
      preventSelection,
   } = useTreeItem(nodeId);

   const icon = iconProp || expansionIcon || displayIcon;

   const handleExpansionClick = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>,
   ) => {
      handleExpansion(event)
      const id = [nodeId]
      dispatch(toggleExpandTask({ taskIds: id }))
   };

   const handleSelectionClick = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>,
   ) => {
      preventSelection(event)
      const id = Number(nodeId)

      dispatch(toggleLineThroughTask({ date: id }))
      setTimeout(() => {
         dispatch(taskDone({ date: id }))
      }, 2000)
   };

   const openTaskInput = (id: number) => {
      dispatch(setIsOpenSubTaskInput({
         isOpenSubTaskInput: true,
         subTaskId: id
      }))
   }

   const openTaskEditMenu = (id: number) => {
      dispatch(setEditTaskMenuId({ id }))
      dispatch(setOpenMenu({ menuTypeOpen: 'editMenu' }))
   }

   return (
      <div
         className={clsx(className, classes.root, {
         })}
         ref={ref as React.Ref<HTMLDivElement>}
      >
         <Stack direction='row'
            alignItems='center'
            sx={{
               '& button': {
                  opacity: 0,
               },
               '&:hover button': {
                  opacity: 1,
               },
            }}
         >
            <div
               onClick={handleExpansionClick}
               className={classes.iconContainer}
            >
               {icon}
            </div>
            <Typography
               onClick={handleSelectionClick}
               component="div"
               className={classes.label}
               sx={{
                  '&:hover': {
                     color: 'white',
                  }
               }}
            >
               {label}
            </Typography>
            <IconButton
               disableRipple
               onClick={() => openTaskEditMenu(Number(nodeId))}
               sx={{
                  transform: {
                     scale: 5,
                  },
                  padding: 1,
               }}
               
            >
               <BorderColorRoundedIcon 
               fontSize="small"/>
            </IconButton>
            <IconButton
               disableRipple
               onClick={() => openTaskInput(Number(nodeId))}
               sx={{
                  padding: 1,
               }}
            >
               <AddRoundedIcon />
            </IconButton>
         </Stack>
      </div>
   );
});

export default function TaskItem(props: TreeItemProps) {
   return <TreeItem ContentComponent={CustomContent} {...props} />;
}
