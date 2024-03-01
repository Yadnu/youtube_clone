import { VideoCard } from "./VideoCard"
const VIDEOS=[{
    title:"Dramatic Win at Lords",  
    thumbImage:"/thumb.jpeg",
    image:"/lords.jpeg", 
    views:'50M', 
    timeStamp:"13 days ago", 
    author:"England Cricket Board"
},
{
    title: "Virat Kohli 72* vs Australia",  
    thumbImage:"/thumb2.jpg",
    image:"/image2.jpeg", 
    views:"1.7M", 
    timeStamp:"1 month ago", 
    author:"Virat TV"
},{
title: "Rohit Sharma vs Australia",  
thumbImage:"/thumb.jpeg",
image:"/image3.jpeg", 
views:"1M", 
timeStamp:"10 month ago", 
author:"Cricket TV"
},
{
    title: "Learn Coding",  
    thumbImage:"/thumb3.jpeg",
    image:"/image4.jpeg", 
    views:"10.7M", 
    timeStamp:"2 month ago", 
    author:"Ez Snippet"
},{
    title:"Dramatic Win at Lords",  
    thumbImage:"/thumb.jpeg",
    image:"/lords.jpeg", 
    views:'50M', 
    timeStamp:"13 days ago", 
    author:"England Cricket Board"
},
{
    title: "Virat Kohli 72* vs Australia",  
    thumbImage:"/thumb2.jpg",
    image:"/image2.jpeg", 
    views:"1.7M", 
    timeStamp:"1 month ago", 
    author:"Virat TV"
},{
title: "Rohit Sharma vs Australia",  
thumbImage:"/thumb.jpeg",
image:"/image3.jpeg", 
views:"1M", 
timeStamp:"10 month ago", 
author:"Cricket TV"
},
{
    title: "Learn Coding",  
    thumbImage:"/thumb3.jpeg",
    image:"/image4.jpeg", 
    views:"10.7M", 
    timeStamp:"2 month ago", 
    author:"Ez Snippet"
},
{
    title:"Dramatic Win at Lords",  
    thumbImage:"/thumb.jpeg",
    image:"/lords.jpeg", 
    views:'50M', 
    timeStamp:"13 days ago", 
    author:"England Cricket Board"
},
{
    title: "Virat Kohli 72* vs Australia",  
    thumbImage:"/thumb2.jpg",
    image:"/image2.jpeg", 
    views:"1.7M", 
    timeStamp:"1 month ago", 
    author:"Virat TV"
},{
title: "Rohit Sharma vs Australia",  
thumbImage:"/thumb.jpeg",
image:"/image3.jpeg", 
views:"1M", 
timeStamp:"10 month ago", 
author:"Cricket TV"
},
{
    title: "Learn Coding",  
    thumbImage:"/thumb3.jpeg",
    image:"/image4.jpeg", 
    views:"10.7M", 
    timeStamp:"2 month ago", 
    author:"Ez Snippet"
}
]
export const VideoGrid = ()=>{

    return <div className="grid grid-cols-4 md: grid-cols-4 lg: grid-cols-4">
        {VIDEOS.map(video => <div>
            <VideoCard title={video.title} thumbImage={video.thumbImage} image={video.image} views={video.views} timeStamp={video.timeStamp} author={video.author} ></VideoCard>

        </div>)}
    </div>
}