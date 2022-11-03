import React, { ReactElement, useState } from 'react';
import './Icon.css'

type Props = {
   color: string,
   svgId: number,
   width: string,
   height: string,
}

function Icon(props: Props) {
   const [icons, setIcons] = useState([
      {
         id: 1,
         name: 'handsup',
         core: <svg width={props.width} height={props.height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 15.5a6.88 6.88 0 0 1-4.7-1.83 6.06 6.06 0 0 1-1.95-4.42c0-1.66.7-3.25 1.95-4.42A6.88 6.88 0 0 1 15 3c1.76 0 3.46.66 4.7 1.83a6.06 6.06 0 0 1 1.95 4.42c0 1.66-.7 3.25-1.95 4.42A6.88 6.88 0 0 1 15 15.5Zm7.98 6.25V28h-2.66v-6.25c0-5.56 3.52-10.36 8.58-12.52l1.1 2.28a11.8 11.8 0 0 0-5.11 4.15 10.76 10.76 0 0 0-1.9 6.09Zm-13.3 0V28H7.02v-6.25c0-2.16-.66-4.27-1.9-6.1A11.8 11.8 0 0 0 0 11.52l1.1-2.28a14.41 14.41 0 0 1 6.25 5.08 13.16 13.16 0 0 1 2.33 7.44Z" fill={props.color} /></svg>
      },
      {
         id: 2,
         name: 'crossedswords',
         core: <svg width={props.width} height={props.height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.5 1c-.16 0-.32 0-.48.03L20.66 2.1c-.9.17-1.72.65-2.32 1.34L15 7.3l-3.34-3.86A4.13 4.13 0 0 0 9.32 2.1L3.97 1.04c-1.3-.26-2.49.95-2.2 2.22L2.81 7.9c.19.82.63 1.57 1.26 2.14l4.8 4.3-2.94 3.41-1.6-1.57a1.13 1.13 0 0 0-1.23-.26 1.13 1.13 0 0 0-.7 1.04 1.1 1.1 0 0 0 .35.8l2 1.98-2.88 2.86a1.13 1.13 0 0 0-1.56.07 1.1 1.1 0 0 0 .01 1.55l.62.6c.07.1.16.2.26.26l2.74 2.72c.07.1.16.18.26.25l.62.62a1.13 1.13 0 0 0 1.91-.74 1.1 1.1 0 0 0-.27-.79l2.89-2.85L11 25.93a1.12 1.12 0 0 0 1.24.26 1.12 1.12 0 0 0 .7-1.04 1.1 1.1 0 0 0-.35-.8l-1.25-1.23 3.65-3.28 4.03 3.61-1.45 1.43a1.11 1.11 0 0 0 1.23 1.82c.14-.05.26-.14.37-.25l1.83-1.8 2.53 2.5a1.1 1.1 0 0 0 .08 1.54 1.13 1.13 0 0 0 1.56 0l4.5-4.46a1.1 1.1 0 0 0-.75-1.9c-.3-.02-.58.08-.8.28L25.6 20.1l1.83-1.81a1.11 1.11 0 0 0 .26-1.23 1.11 1.11 0 0 0-1.05-.7 1.13 1.13 0 0 0-.8.35l-1.44 1.42-3.28-3.77 4.8-4.31a4.07 4.07 0 0 0 1.27-2.14l1.04-4.65c.25-1.11-.63-2.18-1.72-2.26ZM4.09 3.33l4.8.95c.4.08.78.3 1.05.61l3.57 4.12-3.17 3.66L5.58 8.4c-.29-.26-.49-.6-.57-.98l-.92-4.09Zm21.8 0-.91 4.1c-.09.37-.28.7-.57.97L9.75 21.54l-2.23-2.2L20.05 4.9c.27-.31.64-.53 1.05-.61l4.8-.95Zm-6.45 12.52 3.22 3.72c-.03.1-.04.2-.04.31l-1.85 1.83c-.1 0-.2.01-.3.04l-3.8-3.41 2.77-2.49Zm-13.1 5.48 1.41 1.39-2.88 2.86-1.41-1.4 2.88-2.85Zm17.66.34 2.53 2.51-1.4 1.4-2.54-2.51 1.4-1.4Z" fill={props.color} /></svg>
      },
      {
         id: 3,
         name: 'waterdrop',
         core: <svg width={props.width} height={props.height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.8 8.79 15 0l9.2 8.79a12.27 12.27 0 0 1 3.55 6.36c.5 2.41.24 4.9-.74 7.18a12.57 12.57 0 0 1-4.79 5.58 13.43 13.43 0 0 1-14.44 0 12.57 12.57 0 0 1-4.79-5.58 11.92 11.92 0 0 1-.74-7.18c.5-2.41 1.74-4.63 3.56-6.36Z" fill={props.color} /></svg>
      },
      {
         id: 4,
         name: 'flask',
         core: <svg width={props.width} height={props.height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.38 0v3h-1.6v4.86c0 1.74.4 3.46 1.17 5.03l6.83 13.92a2.2 2.2 0 0 1-1.17 2.98c-.31.14-.66.21-1 .21H4.39C3.07 30 2 29 2 27.75c0-.33.07-.65.22-.94l6.83-13.92a11.4 11.4 0 0 0 1.17-5.03V3h-1.6V0h12.76Zm-4.79 3h-3.18v6h3.18V3Z" fill={props.color} /></svg>
      },
      {
         id: 5,
         name: 'addpict',
         core: <svg width={props.width} height={props.height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.9 17.6v3.9H30v2.6h-4.1V28h-2.72v-3.9H19.1v-2.6h4.1v-3.9h2.72ZM25.93 2c.75 0 1.35.58 1.35 1.3V15h-2.72V4.6H2.73v18.2l13.63-13 4.1 3.9v3.68l-4.1-3.9-9.78 9.32h9.78v2.6h-15c-.37 0-.71-.14-.96-.38-.26-.24-.4-.57-.4-.91V3.29c0-.34.15-.67.4-.9.25-.25.6-.39.95-.39h24.57ZM8.18 7.2c.73 0 1.42.27 1.93.76s.8 1.15.8 1.84c0 .69-.29 1.35-.8 1.84a2.8 2.8 0 0 1-1.93.76 2.8 2.8 0 0 1-1.93-.76 2.54 2.54 0 0 1-.8-1.84c0-.69.3-1.35.8-1.84a2.8 2.8 0 0 1 1.93-.76Z" fill={props.color} /></svg>
      },
      {
         id: 6,
         name: 'laptop',
         core: <svg width={props.width} height={props.height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.1 4.89v15.89h21.8V4.88H4.1ZM1.35 3.45c0-.8.62-1.45 1.36-1.45h24.56c.75 0 1.36.65 1.36 1.45v20.22H1.36V3.45ZM0 25.11h30V28H0v-2.89Z" fill={props.color} /></svg>
      },
      {
         id: 7,
         name: 'roadsign',
         core: <svg width={props.width} height={props.height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#a)" fill={props.color}><path d="M27.02 14.14a1 1 0 0 1 0 1.72l-2.57 1.5a1 1 0 0 1-.5.14H16.5v-5h7.44a1 1 0 0 1 .5.14l2.58 1.5ZM28.84 4.18a1 1 0 0 1 0 1.64l-2.13 1.5a1 1 0 0 1-.58.18H16.5v-5h9.63c.2 0 .4.06.58.18l2.13 1.5ZM13.5 7.5v5H3.87a1 1 0 0 1-.58-.18l-2.13-1.5a1 1 0 0 1 0-1.64l2.13-1.5a1 1 0 0 1 .58-.18h9.63Z" /><rect x="4.5" y="27.5" width="21" height="2.5" rx="1" /><rect x="16.5" width="30" height="3" rx="1" transform="rotate(90 16.5 0)" /></g><defs><clipPath id="a"><path fill={props.color} d="M0 0h30v30H0z" /></clipPath></defs></svg>
      },
      {
         id: 8,
         name: 'repeat',
         core: <svg width={props.width} height={props.height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 3c-2.97 0-5.7 1.08-7.8 2.88a1 1 0 1 0 1.3 1.51A9.99 9.99 0 0 1 24.96 14H22l4 6.01 4-6h-3.05C26.44 7.85 21.28 3 15 3ZM4 10l-4 6h3.05a12.01 12.01 0 0 0 19.74 8.13 1 1 0 1 0-1.3-1.52A9.99 9.99 0 0 1 5.04 16H8L4 9.99Z" fill={props.color} /></svg>
      },
      {
         id: 9,
         name: 'firefox',
         core: <svg width={props.width} height={props.height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 0A15 15 0 1 1 1.32 8.84c.7-1.4 1.85-2.81 2.77-3.29a14.43 14.43 0 0 0-1.55 5.07 10.43 10.43 0 0 1 3.78-5.46c3.1-2.28 7.27-2.38 8.93-.93-3.09 1.06-6.45 5.32-5.7 10.31.11.83.36 1.63.73 2.38-.58-1.52-.63-3.65.3-5.04 1.04-1.55 2.52-1.87 3.31-1.7-.31-.07-1 1.25-1.1 1.48-.26.6-.4 1.23-.38 1.88a5.1 5.1 0 0 0 1.54 3.57c2.89 2.8 7.54 1.7 9.62-1.5 1.43-2.21 1.6-5.96-.23-8.94-.46-.72-1-1.38-1.63-1.97a12.66 12.66 0 0 0-10.47-3.31c-1.66.26-3.07.74-4.24 1.43C8.63 1.2 11.88 0 15 0Z" fill={props.color} /></svg>
      },
      {
         id: 10,
         name: 'palette',
         core: <svg width={props.width} height={props.height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 0c8.28 0 15 5.97 15 13.33a8.34 8.34 0 0 1-8.33 8.34h-2.95a2.5 2.5 0 0 0-1.87 4.15c.4.45.65 1.03.65 1.68 0 1.38-1.15 2.5-2.5 2.5a15 15 0 0 1 0-30Zm-1.78 24.17a5.5 5.5 0 0 1 5.5-5.5h2.95A5.34 5.34 0 0 0 27 13.33C27 7.72 21.7 3 15 3a12 12 0 0 0-1.01 23.96c-.5-.85-.77-1.81-.77-2.8ZM8.25 15a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Zm13.5 0a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM15 10.5A2.25 2.25 0 1 1 15 6a2.25 2.25 0 0 1 0 4.5Z" fill={props.color} /></svg>
      },
      {
         id: 11,
         name: 'js',
         core: <svg width={props.width} height={props.height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.9 0C.87 0 0 .86 0 1.9v26.2C0 29.13.86 30 1.9 30h26.2c1.04 0 1.9-.86 1.9-1.9V1.9C30 .87 29.14 0 28.1 0H1.9Zm0 1.43h26.2c.26 0 .47.21.47.48v26.18c0 .27-.21.48-.48.48H1.91a.48.48 0 0 1-.48-.48V1.91c0-.27.21-.48.48-.48Zm11.67 12.14v8.98c0 1.38-.52 1.74-1.43 1.74-.95 0-1.6-.6-2.04-1.36l-2.24 1.36a5.01 5.01 0 0 0 4.45 2.85c2.44 0 4.12-1.3 4.12-4.15v-9.42h-2.86Zm8.9 0c-2.44 0-4 1.56-4 3.6 0 2.22 1.31 3.27 3.28 4.1l.68.3c1.24.54 1.86.88 1.86 1.81 0 .78-.6 1.34-1.73 1.34-1.34 0-1.98-.9-2.56-1.86l-2.14 1.43a4.98 4.98 0 0 0 4.77 2.85c2.58 0 4.51-1.34 4.51-3.8 0-2.27-1.3-3.28-3.62-4.28l-.68-.29c-1.17-.5-1.68-.83-1.68-1.65 0-.66.5-1.17 1.3-1.17s1.3.33 1.76 1.17l2.12-1.36c-.9-1.59-2.14-2.19-3.87-2.19Z" fill={props.color} /></svg>
      },
      {
         id: 12,
         name: 'ghost',
         core: <svg width={props.width} height={props.height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 0c3.71 0 7.27 1.42 9.9 3.95A13.26 13.26 0 0 1 29 13.5v11.25c0 1.12-.37 2.21-1.06 3.12a5.44 5.44 0 0 1-2.78 1.9c-1.1.33-2.3.3-3.4-.06a5.42 5.42 0 0 1-2.7-2c-.4.7-1 1.27-1.71 1.67a4.8 4.8 0 0 1-6.41-1.67c-.65.9-1.57 1.6-2.64 1.97a5.64 5.64 0 0 1-6.1-1.65 5.14 5.14 0 0 1-1.2-3V13.5c0-3.58 1.48-7.01 4.1-9.55A14.27 14.27 0 0 1 15 0Zm0 3a11.1 11.1 0 0 0-7.57 2.95 10.33 10.33 0 0 0-3.31 7.19V24.87c.02.45.19.89.47 1.24a2.42 2.42 0 0 0 3.64.08l.14-.17c.3-.42.7-.76 1.17-1a3.2 3.2 0 0 1 3.02.13c.45.27.82.64 1.08 1.08.14.23.33.43.57.56a1.6 1.6 0 0 0 2.14-.55 3.19 3.19 0 0 1 5.13-.42l.15.2a2.42 2.42 0 0 0 3.7.2c.31-.36.5-.8.55-1.26V13.5c0-2.79-1.14-5.46-3.18-7.43A11.1 11.1 0 0 0 15 3Zm0 12c1.72 0 3.11 1.68 3.11 3.75 0 2.07-1.4 3.75-3.11 3.75-1.72 0-3.11-1.68-3.11-3.75 0-2.07 1.4-3.75 3.11-3.75Zm-3.89-6c.62 0 1.21.24 1.65.66a2.21 2.21 0 0 1 0 3.18 2.38 2.38 0 0 1-3.3 0 2.21 2.21 0 0 1 0-3.18A2.38 2.38 0 0 1 11.11 9Zm7.78 0c.62 0 1.21.24 1.65.66a2.21 2.21 0 0 1 0 3.18 2.38 2.38 0 0 1-3.3 0 2.21 2.21 0 0 1 0-3.18A2.38 2.38 0 0 1 18.89 9Z" fill={props.color} /></svg>
      },
      {
         id: 13,
         name: 'christmastree',
         core: <svg width={props.width} height={props.height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 0a.22.22 0 0 0-.19.1l-.73 1.26-1.62.2c-.17.02-.24.2-.12.31l1.18.98-.28 1.38c-.03.15.15.26.3.2L15 3.76l1.45.65c.16.07.34-.04.31-.19l-.28-1.38 1.18-.98c.12-.1.05-.29-.12-.3l-1.62-.2L15.19.1A.22.22 0 0 0 15 0Zm0 5.56c-.2 0-.39.03-.57.1-.17.08-.33.19-.45.32l-6.27 5.36c-.16.1-.29.24-.38.4A.98.98 0 0 0 7.58 13c.24.2.58.32.92.32h3.96l-7.03 4.75c-.26.16-.47.36-.61.6a1.48 1.48 0 0 0 .35 1.94c.37.32.86.5 1.38.5h4.42l-8.15 5.85c-.25.16-.46.36-.6.6a1.47 1.47 0 0 0 .35 1.94c.37.31.86.49 1.38.49h22.1c.52 0 1.01-.18 1.38-.49a1.48 1.48 0 0 0 .35-1.94 1.78 1.78 0 0 0-.6-.6l-8.15-5.86h4.42c.52 0 1.01-.17 1.38-.49a1.48 1.48 0 0 0 .35-1.94 1.78 1.78 0 0 0-.6-.6l-7.04-4.75h3.96c.34 0 .68-.11.92-.32.24-.21.38-.5.38-.79a.98.98 0 0 0-.13-.49 1.17 1.17 0 0 0-.37-.38l-6.28-5.37a1.29 1.29 0 0 0-.45-.31 1.49 1.49 0 0 0-.57-.11Zm-1.3 3.33c.72 0 1.3.5 1.3 1.11 0 .61-.58 1.11-1.3 1.11-.72 0-1.3-.5-1.3-1.11 0-.61.58-1.11 1.3-1.11Zm3.9 7.78c.72 0 1.3.5 1.3 1.1 0 .62-.58 1.12-1.3 1.12-.72 0-1.3-.5-1.3-1.11 0-.62.58-1.11 1.3-1.11Zm-5.2 6.66c.72 0 1.3.5 1.3 1.11 0 .62-.58 1.12-1.3 1.12-.72 0-1.3-.5-1.3-1.12 0-.6.58-1.1 1.3-1.1Zm6.5 2.23c.72 0 1.3.5 1.3 1.1 0 .62-.58 1.12-1.3 1.12-.72 0-1.3-.5-1.3-1.11 0-.62.58-1.11 1.3-1.11Z" fill={props.color} /></svg>
      },
      {
         id: 14,
         name: 'cake',
         core: <svg width={props.width} height={props.height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 7.14v5.72h4.5V7.14h3v5.72H21V7.14h3v5.72h1.5c1.15 0 2.25.41 3.09 1.16a4.2 4.2 0 0 1 1.4 2.87l.01.25v1.43c0 1.45-.57 2.77-1.5 3.78v6.22c0 .38-.16.74-.44 1.01S27.4 30 27 30H3c-.4 0-.78-.15-1.06-.42a1.4 1.4 0 0 1-.44-1v-6.24a5.62 5.62 0 0 1-1.46-3.11l-.03-.37-.01-.29v-1.43C0 16.05.44 15 1.23 14.2a4.6 4.6 0 0 1 3-1.34H6V7.14h3Zm1.5 15.2-.08.1a6.1 6.1 0 0 1-3.77 1.81l-.34.03H6c-.52 0-1.02-.06-1.5-.17v3.03h21v-3.03a6.3 6.3 0 0 1-5.62-1.38l-.22-.21-.16-.17-.16.17a6.1 6.1 0 0 1-3.68 1.73l-.36.03H15a6.12 6.12 0 0 1-4.2-1.63l-.22-.22-.08-.09Zm15-6.63h-21c-.37 0-.72.13-1 .37a1.4 1.4 0 0 0-.49.9l-.01.16V18.74c.05.73.38 1.41.94 1.91a3.09 3.09 0 0 0 4.02.09c.54-.45.9-1.06 1.01-1.74l.02-.22.01-.25c.05-1.78 2.74-1.85 2.98-.2l.02.2v.21c.05.73.38 1.4.93 1.91a3.08 3.08 0 0 0 4.1.03c.57-.5.9-1.17.96-1.9l.02-.4c.19-1.65 2.8-1.65 2.98 0l.02.4c.05.73.39 1.4.94 1.9a3.08 3.08 0 0 0 4.1 0c.55-.5.89-1.17.94-1.9l.01-.2v-1.44c0-.35-.13-.68-.38-.95a1.52 1.52 0 0 0-.94-.47h-.18ZM7.5 0C9.48 1.24 10 2.98 9.67 4.13a2.16 2.16 0 0 1-1.04 1.3c-.52.28-1.14.36-1.71.21a2.24 2.24 0 0 1-1.37-1c-.3-.49-.38-1.07-.22-1.62C5.78 1.43 7.5 2.14 7.5 0ZM15 0c1.98 1.24 2.5 2.98 2.17 4.13a2.16 2.16 0 0 1-1.04 1.3c-.52.28-1.14.36-1.71.21a2.24 2.24 0 0 1-1.37-1c-.3-.49-.38-1.07-.22-1.62C13.28 1.43 15 2.14 15 0Zm7.5 0c1.98 1.24 2.5 2.98 2.17 4.13a2.16 2.16 0 0 1-1.04 1.3c-.52.28-1.14.36-1.71.21a2.24 2.24 0 0 1-1.37-1c-.3-.49-.38-1.07-.22-1.62.45-1.59 2.17-.88 2.17-3.02Z" fill={props.color} /></svg>
      },
      {
         id: 15,
         name: 'heart',
         core: <svg width={props.width} height={props.height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.75 1C26.31 1 30 4.78 30 10.08 30 20.68 18.75 26.73 15 29c-3.75-2.27-15-8.32-15-18.92C0 4.78 3.75 1 8.25 1 11.04 1 13.5 2.51 15 4.03 16.5 2.5 18.96 1 21.75 1Z" fill={props.color} /></svg>
      },
      {
         id: 16,
         name: 'flower1',
         core: <svg width={props.width} height={props.height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.14 1A7.7 7.7 0 0 0 7.8 6.08 7.6 7.6 0 0 0 .38 11.1a7.11 7.11 0 0 0 3.14 8.37 6.9 6.9 0 0 0 2.53 8.06 8.05 8.05 0 0 0 4.6 1.46 8.6 8.6 0 0 0 4.45-1.33c3.1 1.92 7.09 1.55 9.28-.09a7.01 7.01 0 0 0 2.43-8 7.24 7.24 0 0 0 2.77-8.47 7.67 7.67 0 0 0-7.12-5.03A7.67 7.67 0 0 0 15.14 1Zm0 2.93a4.6 4.6 0 0 1 4.64 3.89l.24 1.46 1.5-.23a4.7 4.7 0 0 1 5.2 2.98c.8 2.31-.22 4.7-2.39 5.53l-1.6.6.85 1.46c.96 1.7 1 4.11-1.03 5.63-1.27.95-4.27 1.34-6.42-.46l-.94-.78-.98.74c-2.08 1.6-4.46 1.73-6.47.36-1.96-1.34-1.98-3.85-.99-5.63l.85-1.46-1.64-.6a4.3 4.3 0 0 1-2.72-5.4 4.63 4.63 0 0 1 4.45-3.01c.32 0 .66.03.99.09l1.59.32.19-1.56a4.63 4.63 0 0 1 4.68-3.93ZM15 11.34a4.45 4.45 0 0 0-4.5 4.4c0 2.42 2.03 4.38 4.5 4.38 2.48 0 4.5-1.96 4.5-4.39 0-2.42-2.02-4.39-4.5-4.39Z" fill={props.color} /></svg>
      },
      {
         id: 17,
         name: 'sunsea',
         core: <svg width={props.width} height={props.height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.93 17.8a8.62 8.62 0 0 1 1.82-6.82A8.21 8.21 0 0 1 15 8.01a8 8 0 0 1 6.25 2.97 8.48 8.48 0 0 1 1.82 6.82H6.93Zm-5.57 2.8H15v2.8H1.36v-2.8Zm16.37 0h10.9v2.8h-10.9v-2.8Zm2.72 5.6h5.46V29h-5.46v-2.8Zm-16.36 0h13.64V29H4.09v-2.8ZM13.64 1h2.72v4.2h-2.72V1ZM3.43 6.5l1.93-1.98L8.25 7.5 6.32 9.47 3.43 6.5Zm21.21-1.98 1.93 1.98-2.9 2.97-1.92-1.98 2.9-2.97ZM30 15v2.8h-4.1V15H30ZM4.1 15v2.8H0V15h4.1Z" fill={props.color} /></svg>
      },
      {
         id: 18,
         name: 'palm',
         core: <svg width={props.width} height={props.height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.87 0c-1.5.02-2.9.3-4.1.7-2.32.78-4 1.97-4.8 2.59-1.02.07-3.13.34-5.4 1.37A12.98 12.98 0 0 0 .2 13.69a.95.95 0 0 0 .8 1.15l1.39.23c.54.09 1.05-.28 1.18-.82A9.14 9.14 0 0 1 9 7.7l.28-.1a21.09 21.09 0 0 0-2.47 9.7c-.02.56.43 1 .98 1h1.41c.56 0 1-.44 1.02-1 .16-4.16 1.26-6.88 2.3-8.58a11 11 0 0 1 .92-1.29c.55.81 1.26 2.02 2.02 3.8 1.56 3.61 3.15 9.34 3.27 17.78 0 .55.45 1 1 1h1.42a1 1 0 0 0 1-1c-.13-8.86-1.81-15.05-3.54-19.08a25.74 25.74 0 0 0-1.75-3.36c.4.05.82.1 1.28.2 2.24.5 4.9 1.72 7.13 4.89.3.44.91.6 1.38.32l1.2-.7a.96.96 0 0 0 .32-1.37 15.33 15.33 0 0 0-8.63-6.23 9.11 9.11 0 0 1 7.6 1.13c.47.29 1.08.2 1.4-.24l.84-1.09a.95.95 0 0 0-.23-1.38A13.27 13.27 0 0 0 21.87 0Z" fill={props.color} /></svg>
      },
      {
         id: 19,
         name: 'walk',
         core: <svg width={props.width} height={props.height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m8.62 10.1 4.9-3.26a3.24 3.24 0 0 1 1.89-.54c.83.02 1.63.27 2.3.73.66.46 1.15 1.1 1.4 1.82.29.81.55 1.37.78 1.65a7.5 7.5 0 0 0 2.7 2.06 8.2 8.2 0 0 0 3.41.74v2.8c-1.58 0-3.14-.32-4.56-.94a10.6 10.6 0 0 1-3.69-2.63l-1.06 5.54 3.14 2.42 3.4 8.55-2.87.96-3.12-7.85-5.18-3.98a2.82 2.82 0 0 1-.94-1.2c-.19-.46-.24-.97-.14-1.46l.77-4.04-1.03.69-3.25 4.1L5 14.6l3.59-4.53.03.02Zm8.98-4.5a3.2 3.2 0 0 1-2.16-.82 2.69 2.69 0 0 1-.9-1.98c0-.74.33-1.45.9-1.98A3.2 3.2 0 0 1 17.6 0c.81 0 1.59.3 2.16.82.57.53.9 1.24.9 1.98s-.33 1.45-.9 1.98a3.2 3.2 0 0 1-2.16.82Zm-4.54 18.45-4.9 5.36-2.35-1.8 4.55-4.96 1.14-3.05 2.73 2.1-1.17 2.35Z" fill={props.color} /></svg>
      },
   ])

   const printSvg = () => {
      let curIcon = icons.filter(el => { return el.id === props.svgId })
      return curIcon[0].core
   }
   return (
      <div className='Icon'>
         {printSvg()}
      </div>
   )
}

export default Icon