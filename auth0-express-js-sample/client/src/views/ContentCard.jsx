import React from "react";
import './ContentCard.scss'
import { Avatar, Card, CardContent, CardMedia } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Daniel from '../data/img/team/Daniel.jpeg'
import Itay from '../data/img/team/itay.jpg'
const team_data = [{
    name: 'Daniel',
    pic: Daniel,
    url: '',
    role: 'Developer'

}, {
    name: 'Itay',
    pic: Itay,
    url: '',
    role: 'Developer'

}

]

const ContentCard = (props) => {
    console.log(props)
    return (
        Object.keys(team_data).map((item, i) => (

                <div className={'ContentCard'} id={i} >
                    <Card className={'card'} elevation={5}>
                        <CardMedia className={'AvatarContainer'}>
                            <Avatar alt={team_data[i].name} src={team_data[i].pic} className={'avatar'} />
                        </CardMedia>
                        <CardContent className={'content'}>
                            <Typography gutterBottom variant="h5" component="h2">
                                <a href={team_data[i].url}>
                                    {team_data[i].name}
                                </a>
                            </Typography>
                            <Typography color="textSecondary" variant="h6" component="h3" className={'role'}>
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            )
        ))
            
    
}

export default ContentCard