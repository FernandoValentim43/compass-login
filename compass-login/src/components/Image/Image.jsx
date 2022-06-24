export default function Image(props) {
    return (
        <div className="img">
            <img src={props.src} className={props.imgName}/>
        </div>
            
       
    )
}