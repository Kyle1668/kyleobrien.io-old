import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import '../stylesheets/css/ArticleCard.css'

class ArticleCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.title,
            description: this.props.description,
            dateWritten: this.props.date_written,
            url: this.props.url,
            image: this.props.image
        }
    }

    render() {
        return <div className="article-card">
            <Card>
                {/* <CardMedia image={this.state.image} title="Contemplative Reptile"/> */}
                {/* <div className="row">
                    <div className="col-md-12">
                        <div className="image-div"><img src={this.state.image}/></div>
                    </div>
                </div> */}
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {this.state.title}
                    </Typography>
                    <Typography component="p">
                        {this.state.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" target="_blank" href={this.state.url}>
                        Read
                    </Button>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                </CardActions>
            </Card>
        </div>
    }
}

export default ArticleCard