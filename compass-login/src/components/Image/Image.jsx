export default function Image(props) {
    return (
        <div className={props.wrapper}>
            <img src={props.src} className={props.imgName}/>
        </div>
            
       
    )
}