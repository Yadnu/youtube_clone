
export function VideoCard(props: any){
    return <div>
        <img src={props.image} className="rounded-xl" alt="virat" />
        <div className="grid grid-cols-12 pt=2 " >
            <div className="col-span-1 ">
                <img className="rounded-full w-12 h-12 pt-1" src={props.thumbImage} alt="photo" />
            </div>
            <div className="col-span-11 pl-1">
            <div>{props.title}</div>
                <div className="col-span-11 text-gray-600 text-base">
                {props.author}
            </div>
            <div className="col-span-11 text-gray-600 text-base">
                {props.views} | {props.timeStamp}
            </div>
            </div>
           
                
        </div>
    </div>
}