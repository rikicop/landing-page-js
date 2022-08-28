import { ArticleItemProps } from "../../Interfaces";
//import { useRouter } from "next/router";
import { EthereumIcom, ClockIcon } from "../../assets/svg";
import { BoxShadow, Flex, Card as StyledCard } from "./NFTElements";
import { useRouter } from "next/router";

const NFTItem = ({ data }: ArticleItemProps) => {
  const router = useRouter();
  return (
      <BoxShadow onClick={() => router.push(`/curso/Slug/${data.slug.current}`)}>
        <StyledCard >
          <div className="card__img">
              <img src={data.mainImage} alt="avatar" />
          </div>
          <div className="card__text-cont">
            <h3>{data.title}</h3>
            <p> Our Equilibrium collection promotes balance and calm</p>
          </div>
          <Flex className="card__info-row">
            <Flex>
              <EthereumIcom />
              <span className="card__info-box-left">0.041 eth</span>
            </Flex>
            <Flex>
              <ClockIcon />
              <span className="card__info-box-right">3 days left</span>
            </Flex>
          </Flex>
          <div className="card__footer">
            <div className="btn-wrapper">
              <button className="btn-read">Más</button>
            </div>
            {/* En caso de Autor */}
        {/*     <Flex style={{justifyContent: "flex-start"}} >
              <div className="avatar">
                <img src={data.mainImage} alt="avatar" />
              </div>
              <p>
                Creating of <span>Jules Wyvern</span>
              </p>
            </Flex> */}
          </div>
        </StyledCard>
    </BoxShadow>  
  );
};

export default NFTItem;

 {/* <CardContainer onClick={() => router.push(`/curso/Slug/${data.slug.current}`)}>
      <div className="card-head">
        <div className="image-wrapper">
          <img src={data.mainImage} alt="curso" />
        </div>
        <h3 className="card-title">{data.title}</h3>
        <p className="card-excerpt">{data.excerpt}</p>
      </div>
      <div className="btn-wrapper">
        <button className="btn-read">Más</button>
      </div>
    </CardContainer> */}