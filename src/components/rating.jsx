import StarEmpty from '../assets/star-empty.svg';
import StarHalf from '../assets/star-half.svg';
import StarFull from '../assets/star-full.svg';

const Rating = ({ rating }) => {
  const r = rating / 2;

  const getStar = (starNr) => {
    let src = null;

    if (Math.round(r) === starNr) {
      if (Number.isInteger(r)) {
        src = StarFull;
      }
      else {
        src = StarHalf;
      }
    }
    else if (r > starNr) {
      src = StarFull;
    }
    else {
      src = StarEmpty;
    }

    return <img src={src} key={crypto.randomUUID()} />
  }

  // const getStars = () => {
  //   if (rating === 0) {
  //     return (<>
  //       <img src={StarEmpty} />
  //       <img src={StarEmpty} />
  //       <img src={StarEmpty} />
  //       <img src={StarEmpty} />
  //       <img src={StarEmpty} />
  //     </>);
  //   } else if (rating === 1) {
  //     return (<>
  //       <img src={StarHalf} />
  //       <img src={StarEmpty} />
  //       <img src={StarEmpty} />
  //       <img src={StarEmpty} />
  //       <img src={StarEmpty} />
  //     </>);
  //   }
  // }

  return (
    <div style={{display:"flex"}}>
      {[1,2,3,4,5].map(i => getStar(i))}
    </div>
  );
}

export default Rating;