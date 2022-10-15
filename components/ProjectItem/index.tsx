import { ArticleItemProps } from "../../Interfaces";
import { CardContainer } from "./ProjectStyles";
//import { useRouter } from "next/router";
//ICONS
import { FaTools } from "react-icons/fa";

const ProjectItem = ({ data }: ArticleItemProps) => {
  //const router = useRouter();
  return (
    <CardContainer /* onClick={() => router.push(`/curso/Slug/${data.slug.current}`)} */>
      <div className="card-head">
        <div className="image-wrapper">
          <img src={data.mainImage} alt="curso" />
        </div>
        <h3 className="card-title">{data.title}</h3>
        <p className="card-excerpt">{data.title}</p>
        
      </div>
    
      <div className="footer-wrapper">
      
         <div className="more-info">
          <div className="promo">
            <FaTools  style={{ color: '#fbaa18', width: '20px' }}/>
              <span style={{marginLeft:"4px"}}>{data.technologies}</span>      
          </div>
        </div>
        <div className="btn-wrapper">
          <button className="btn-read">DEMO</button>
          <button className="btn-read"> CODE</button>
        </div>
      </div>
    </CardContainer>
  );
};

export default ProjectItem;
