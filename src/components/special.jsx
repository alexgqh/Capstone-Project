import IconGo from '../assets/icon-go.svg';

const Special = ({id, image, alt, title, desc, price}) => {
   const styleSpecialTitle = {
      display: "flex",
      justifyContent: "space-between",
   }
   const gapBottom = {
      marginBottom: "1rem",
   }

   return (
    <div className="special" style={{overflow:"hidden"}}>
      <img src={image} alt={alt} style={{minHeight: "192px", maxHeight: "192px", objectFit: "cover"}} />
      <div className="special-info" style={{...styleSpecialTitle, flexDirection:"column", height:"100%"}}>
        <div className="special-title" style={ {...styleSpecialTitle, ...gapBottom} }>
          <h4 className="color-charcoal">{title}</h4>
          <h4 className="color-peach">{price}</h4>
        </div>
        <p className="color-charcoal" style={gapBottom}>{desc}</p>
        <a style={{...styleSpecialTitle}}>Order for delivery<img src={IconGo} /></a>
      </div>
    </div>
   )
}

export default Special;