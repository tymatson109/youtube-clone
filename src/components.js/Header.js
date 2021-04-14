import React, {useState} from 'react'
import './Header.css';
import ReorderIcon from '@material-ui/icons/Reorder';
import { IconButton, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar'
import {actionTypes} from './Reducer';
import {useStateValue} from './StateProvider';
import { auth, provider } from '../firebase';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

const Header = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const [{open, user}, dispatch] = useStateValue()
    // const [clicked, setClicked] = useState(true)

    const termSubmit = (e) => {
        e.preventDefault()

        dispatch({
            type: actionTypes.SET_TERM,
            term: searchTerm
        })

        setSearchTerm('')
    }

    const sidebarOpen = () => {
        dispatch({
            type: actionTypes.SET_SIDEBAR,
            open: !open
        })
    }

    const userClicked = () => {
        if (!user.displayName){
            auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch(error => alert(error.message))
        }
    }

    return (
        <div>
            <div className="header">
                <div className="header__left">
                    <IconButton onClick={() => sidebarOpen()} className="header__leftButton">
                        <ReorderIcon />
                    </IconButton>
                    <img style={{width: '90px'}} src="https://www.xda-developers.com/files/2017/08/After-12-Years-Google-Gives-YouTube-a-New-Logo-1900x700_c.png" />
                </div>
                <div className="header__center">
                    <form onSubmit={termSubmit}>
                        {/* <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.currentTarget.value)} placeholder="Search" /> */}
                        <TextField className="header__input" size="small" id="outlined-basic" placeholder="Search" variant="outlined" value={searchTerm} onChange={(e) => setSearchTerm(e.currentTarget.value)}/>
                        <SearchIcon style={{width: '65px'}} className="header__centerSearch header__centerIcon" />
                        <MicIcon className="header__centerIcon"/>
                    </form>
                </div>
                <div className="header__right">
                    <VideoCallIcon className="header__rightIcon" style={{width: '32px', height: '32px'}}/>
                    <AppsIcon className="header__rightIcon" style={{width: '32px', height: '32px'}}/>
                    <NotificationsIcon className="header__rightIcon" style={{width: '32px', height: '32px'}}/>
                    <Avatar src={
                        user ? user.photoURL : null
                    } onClick={userClicked} className="header__rightIcon" style={{width: '32px', height: '32px'}}/>
                </div>
            </div>
        </div>
    )
}

export default Header
