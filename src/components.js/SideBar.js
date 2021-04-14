import React from 'react'
import './SideBar.css';
import HomeIcon from '@material-ui/icons/Home';
import SideBarButton from './SideBarButton';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import SlideshowIcon from '@material-ui/icons/Slideshow';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TheatersIcon from '@material-ui/icons/Theaters';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import { useStateValue } from './StateProvider';

const SideBar = () => {

    const [{open}, dispatch] = useStateValue()
    console.log(open)

    const isOpen = open ? null : 'none'
    const isClosed = open ? 'none' : null

    return (
        <div className="sidebar">
            <div style={{display: isOpen}} className="sidebar__open">
                <SideBarButton title="Home">
                    <HomeIcon />
                </SideBarButton>
                <SideBarButton title="Explore">
                    <ExploreIcon />
                </SideBarButton>
                <SideBarButton title="Subscriptions">
                    <SubscriptionsIcon />
                </SideBarButton>
                <hr className="sidebar__barrier"/>
                <SideBarButton title="Library">
                    <VideoLibraryIcon />
                </SideBarButton>
                <SideBarButton title="History">
                    <HistoryIcon />
                </SideBarButton>
                <SideBarButton title="Your videos">
                    <SlideshowIcon />
                </SideBarButton>
                <SideBarButton title="Watch later">
                    <WatchLaterIcon />
                </SideBarButton>
                <SideBarButton title="Liked videos">
                    <ThumbUpAltIcon />
                </SideBarButton>
                <hr className="sidebar__barrier" />
                <SideBarButton title="YouTube Premium">
                    <YouTubeIcon />
                </SideBarButton>
                <SideBarButton title="Movies & Shows">
                    <TheatersIcon />
                </SideBarButton>
                <SideBarButton title="Gaming">
                    <SportsEsportsIcon />
                </SideBarButton>
                <SideBarButton title="Live">
                    <SettingsInputAntennaIcon />
                </SideBarButton>
                <SideBarButton title="Learning">
                    <EmojiObjectsIcon />
                </SideBarButton>
                <SideBarButton title="Sports">
                    <SportsBasketballIcon />
                </SideBarButton>
            </div>
            <div style={{display: isClosed}} className="sidebar__closed">
                <SideBarButton title="Home">
                    <HomeIcon />
                </SideBarButton>
                <SideBarButton title="Explore">
                    <ExploreIcon />
                </SideBarButton>
                <SideBarButton title="Subscriptions">
                    <SubscriptionsIcon />
                </SideBarButton>
                <SideBarButton title="Library">
                    <VideoLibraryIcon />
                </SideBarButton>
            </div>
        </div>
    )
}

export default SideBar;
