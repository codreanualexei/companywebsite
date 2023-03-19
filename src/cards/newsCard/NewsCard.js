import { Slide,} from "react-reveal";
import './newsCard.css'

const SectionCard = ({title,text}) => (
    <Slide bottom>
      <div className="newsCard">
      <hr />
<h3 className="newsCard__title">
{title}
</h3>
<p className="newsCard__text">
  {text}
</p>
  </div>
    </Slide>
  )

export default SectionCard