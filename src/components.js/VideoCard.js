import { Avatar } from '@material-ui/core'
import React from 'react'
import { useStateValue } from './StateProvider'
import './VideoCard.css'


const VideoCard = ({image, title, id}) => {

    const [{open}, dispatch] = useStateValue()

    const isOpenWidth = open ? '240' : '300'
    const isOpenHeight = open ? '122' : '167'

    return (
        <div className="videoCard">
            <iframe width={isOpenWidth} height={isOpenHeight} src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <div className="videoCard__info">
                <Avatar style={{marginTop: '20px', marginRight: '12px'}} src={image}/>
                <h3>{title}</h3>
            </div>
        </div>
    )
}

export default VideoCard
