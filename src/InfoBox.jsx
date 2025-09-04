import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';


export default function InfoBox({info}){
    const imgurl = "https://plus.unsplash.com/premium_photo-1667926195926-b210e1963e2f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const hoturl = "https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const coldurl = "https://images.unsplash.com/photo-1455156218388-5e61b526818b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const rainurl = "https://images.unsplash.com/photo-1620385019253-b051a26048ce?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return(
        <div className="infobox">
        {info && Object.keys(info).length > 0 && (<div className='cardcontainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia sx={{ height: 140 }} image={info.humidity>80? rainurl: info.temp>15? hoturl: coldurl} title="green iguana" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}&nbsp;{info.humidity>80? <ThunderstormIcon/>: info.temp>15? <SunnyIcon />: <AcUnitIcon/>}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <div>Temprature={info.temp}&deg;C</div>
                        <div>Minimum Temprature={info.min}&deg;C</div>
                        <div>Maximum Temprature={info.max}&deg;C</div>
                        <div>Humidity={info.humidity}</div>
                        <div>Temprature can be described as <b>{info.weather}</b> and feels like {info.feels_like}&deg;C</div>

                    </Typography>
                </CardContent>
                
            </Card>
            </div>)
        }

        </div>
    )
}