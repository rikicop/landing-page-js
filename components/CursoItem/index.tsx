import { ArticleItemProps } from "../../Interfaces";
import { useRouter } from "next/router";
import { CardContainer } from "./CursoItemElements";
//ICONS
import { FaChalkboardTeacher,FaClock } from "react-icons/fa";

const CursoItem = ({ data }: ArticleItemProps) => {
  const router = useRouter();
  return (
    <CardContainer onClick={() => router.push(`/curso/Slug/${data.slug.current}`)}>
      <div className="card-head">
        <div className="image-wrapper">
          <img src={data.mainImage} alt="curso" />
        </div>
        <h3 className="card-title">{data.title}</h3>
        <p className="card-excerpt">{data.excerpt}</p>
        
      </div>
    
      <div className="footer-wrapper">
      
         <div className="more-info">
          <div className="promo">
            <FaChalkboardTeacher  style={{ color: '#fbaa18', width: '20px' }}/>
              <span style={{marginLeft:"4px"}}>Primera clase gratis </span>      
          </div>
          <div className="tiempo">
            <FaClock style={{ color: '#fbaa18', width: '20px' }}/>
            <span style={{marginLeft:"4px"}}>1-2Hrs</span>
          </div>
        </div>
          <hr /> 
        <div className="btn-wrapper">
          <button className="btn-read">Inscríbete</button>
        </div>
      </div>
    </CardContainer>
  );
};

export default CursoItem;
