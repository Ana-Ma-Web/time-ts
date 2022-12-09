import React from 'react'

import { useDispatch } from 'react-redux'
import { lineThroughTask, taskDone } from '../../../redux/slices/tasksSlice'

import TreeItem, {
   TreeItemProps,
   useTreeItem,
   TreeItemContentProps,
} from '@mui/lab/TreeItem';
import clsx from 'clsx';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { setIsOpenSubTaskInput } from '../../../redux/slices/interfaceSlice';



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
      handleExpansion(event);
   };

   const handleSelectionClick = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>,
   ) => {
      preventSelection(event);
      const id = Number(props.id)

      dispatch(lineThroughTask({ date: id }))
      setTimeout(() => {
         dispatch(taskDone({ date: id }))
      }, 2000);
   };

   const openTaskInput = (id: number) => {
      dispatch(setIsOpenSubTaskInput({ 
         isOpenSubTaskInput: true, 
         subTaskId: id 
      }))
   }

   return (
      <div
         className={clsx(className, classes.root, {
         })}
         ref={ref as React.Ref<HTMLDivElement>}
      >
         <div onClick={handleExpansionClick}
            className={classes.iconContainer}
         >
            {icon}
         </div>
         <Typography
            onClick={handleSelectionClick}
            component="div"
            className={classes.label}
         >
            {label}
         </Typography>
         <IconButton onClick={() => openTaskInput(Number(nodeId))}>
            <AddRoundedIcon />
         </IconButton>

      </div>
   );
});

export default function TaskItem(props: TreeItemProps) {
   return <TreeItem ContentComponent={CustomContent} {...props} />;
}
