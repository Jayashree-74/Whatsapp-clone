import { Avatar, IconButton } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import "./css/sidebar.css"
import SidebarChat from './SidebarChat';
import db from './Firebase';

function Sidebar() {
    
    const [rooms, setRooms] = useState([]);
    useEffect(()=>{
        db.collection("rooms").onSnapshot(snapshot=>{
            setRooms(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data()
            })))
        })
    },[])
    console.log(rooms);

    return (
    <div className='sidebar'>
        <div className="sidebar__header">
            <Avatar/>

            <div className="sidebar__headerRight">
                <IconButton>
                <DonutLargeIcon/>
                </IconButton>
                
                <IconButton>
                <ChatIcon/>
                </IconButton>

                <IconButton>
                <MoreVertIcon/>
                </IconButton>
                
            </div>
        </div>

        <div className="sidebar__search">
            <div className="sidebar__searchContainer">
                
                <SearchIcon/>
                <input type="text" placeholder='search'/>
            </div>
        </div>

        <div className="sidebar__Chats">
            <SidebarChat addnewchat/>
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
            
        </div>
    </div>
  )
}

export default Sidebar
