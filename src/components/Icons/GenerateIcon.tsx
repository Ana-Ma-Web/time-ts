import React from 'react'
import * as Muicon from '@mui/icons-material'

type Props = {
   name: string
   color: string
}

export default function GenerateIcon ({ name, color, ...rest }: Props) {
   const IconName = Muicon[name as keyof typeof Muicon];
   console.log('icon', Muicon);
   
   return IconName ? <IconName {...rest} sx={{ color: color }} /> : null;
}
