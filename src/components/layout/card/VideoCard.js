import ReactPlayer from 'react-player';

export default function VideoCard(props) {
    return (
        <div className="flex">
            <ReactPlayer 
                url={props.url} 
                controls 
                width='100%' 
                height='45vh'
            />
        </div>
    )
}
