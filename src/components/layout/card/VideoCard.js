import ReactPlayer from 'react-player';

export default function VideoCard(props) {
    return (
        <div className="">
            <ReactPlayer 
                url={props.url} 
                controls 
                width='102vh' 
                height='45vh'
            />
        </div>
    )
}
