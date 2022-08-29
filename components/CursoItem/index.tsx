import { ArticleItemProps } from "../../Interfaces";
import { useRouter } from "next/router";
import { CardContainer } from "./CursoItemElements";
//Icons

import { FaChalkboardTeacher,FaClock } from "react-icons/fa";
/* import { fontSize } from "components/NFTItem/VarStyles"; */

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
     
      {/* In case you need to add authors... */}
      {/*  <div className="info-author">
        <p className="name-author">{data.author}</p>
        <img className="img-author" src={data.authorPicture} alt="author" />
      </div> */}
    
      <div className="footer-wrapper">
      
         <div className="info-course">
          <div className="promo">
            <FaChalkboardTeacher  style={{ color: '#7afb18', width: '20px' }}/>
              <span style={{marginLeft:"2px"}}>Gratis la primera clase </span>      
          </div>
          <div className="tiempo">
            <FaClock style={{ color: '#7afb18', width: '20px' }}/>
            <span style={{marginLeft:"3px"}}>1-2Hrs</span>
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
