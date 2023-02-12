import ReactPlayer from 'react-player';

export default function VideoCard(props) {
    return (
        <div className="flex justify-center">
            <ReactPlayer 
                url={props.url} 
                controls 
                width='97%' 
                height='45vh'
            />
        </div>
    )
}
