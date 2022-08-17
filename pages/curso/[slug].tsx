import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect,createContext, useContext } from "react";
//import BlockContent from "@sanity/block-content-to-react";
import Toolbar from "../../components/Toolbar";
import { useForm, SubmitHandler } from "react-hook-form";
import { PostType } from "../../typings";

//SingleCurso Component
import styled from "styled-components";
import SingleCurso from "./SingleCurso";
import { homeObjFour } from "./DataHero";

//



const Main = styled.div`
  margin: auto;
  //this top margin is just for landscape
  margin-top: 1rem;
  width: 750px;
  max-width: calc(100vw - 50px);
  //media for large screens
  @media screen and (min-width: 1280px) {
    width: 80%;
  }
`;

const Rule = styled.hr`
  margin: 5px auto;
  border: 1px solid var(--primary-color);
  @media screen and (max-width: 768px) {
    max-width: 90%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px 2px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Span = styled.span`
  color: #585858;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: block;
  border: 2px solid lightgray;
  border-radius: 4px;
  &:focus {
    outline: none;
    border: 2px solid var(--primary-color);
    box-shadow: 0 0 10px #719ece;
  }
`;

const Textarea = styled.textarea`
  padding: 12px 20px;
  margin: 8px 0;
  border: 2px solid lightgray;
  border-radius: 4px;
  display: inline-block;
  width: 100%;
  font-size: 15px;
  &:focus {
    outline: none;
    border: 2px solid var(--primary-color);
    box-shadow: 0 0 10px #719ece;
  }
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  color: red;
  font-weight: bold;
`;

const Submit = styled.button`
  background-color: var(--primary-color);
  font-size: medium;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  margin: 10px 0;
  cursor: pointer;
  &:hover {
    background-color: #719ece;
  }
`;

const CommentConfirmed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 10px auto;
  border: 1px solid blue;
  background-color: blue;
  color: white;
  h3 {
    font-size: medium;
    font-weight: bold;
  }
`;

interface IFormInput {
  _id: string;
  name: string;
  email?: string;
  comment: string;
}

interface Props {
  post: PostType;
}

export type GlobalContent = {
  checkout: any;
  setCheckout: (c:any) => void;
}

export const MyGlobalContext = createContext<GlobalContent>({
checkout: 'Hello World', // set a default value
setCheckout: () => {},
})

export const useGlobalContext = () => useContext(MyGlobalContext)

function Curso({ post }: Props) {
  const [imageUrl, setImageUrl] = useState("");
  const [checkout, setCheckout] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState(false);
  console.log("POST: ", post);
  console.log("CHECKOUT in Slug: ", checkout);



  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormInput>();  

  //Form Submit Handler
   const onSubmit: SubmitHandler<IFormInput> = (data) => {
    return new Promise((resolve: any) => {
      setTimeout(() => {
        fetch("/api/createStudent", {
          method: "POST",
          body: JSON.stringify(data),
        })
          .then(() => {
            console.log(data);
            setSubmitted(true);
          })
          .catch((err) => {
            console.log(err);
            setSubmitted(false);
          });
        resolve();
      }, 1700);
    });
  }; 
  
  //En este useEffect se obtiene la url de la imagen
  //para pasarla al useState imageUrl
  useEffect(() => {
    const imgBuilder: any = imageUrlBuilder({
      projectId: "rfzuszbb",
      dataset: "production",
    });
    setImageUrl(imgBuilder.image(post.mainImage));
  }, [post.mainImage]);

  //Sanity Object
  const objSanity = {
      topLine: post.title,
      img: imageUrl,
  };
  return (
    <div>
      <Toolbar />
      {/* Aqui estoy pasando tanto el objeto estatico como el de sanity */}
      <MyGlobalContext.Provider value={{checkout,setCheckout}}>
        <SingleCurso {...homeObjFour} {...objSanity} /* startCheckout={setCheckout} */ />
      </MyGlobalContext.Provider>
      <Main>
        <Rule />
       {isSubmitting && <h1>Cargando...</h1>} 
         {submitted && 
          <CommentConfirmed>
            <h2>Gracias por suminstrar tu información!</h2>
            <p>Ya se envió al administrador</p>
          </CommentConfirmed>
          } 

          { checkout &&
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h3 style={{ color: "blue" }}>Bienvenido</h3>
            <h4 style={{ color: "gray", marginTop: "2px" }}>
              Para poder contactarnos, por favor ingrese sus datos
            </h4>
            <hr style={{ padding: "3px auto", margin: "8px 8px" }} />
            <input
              {...register("_id")}
              type="hidden"
              name="_id"
              value={post._id}
            />
            <Label>
              <Span>Nombre</Span>
              <Input
                {...register("name", { required: true })}
                type="text"
                placeholder="Nombre y Apellido"
              />
            </Label>
            <Label>
              <Span>Email</Span>
              <Input
                {...register("email", { required: true })}
                type="email"
                placeholder="ejemplo@mail.com"
              />
            </Label>
            <Label>
              <Span>Comentarios</Span>
              <Textarea
                {...register("comment", { required: true })}
                placeholder="Información que desea enviar"
                rows={8}
              />
            </Label>
            
            <ErrorContainer>
              {errors.name && (
                <span className="text-red-500">
                  El Campo Nombre es requerido
                </span>
              )}
              {errors.email && (
                <span className="text-red-500">
                  El Campo Email es requerido
                </span>
              )}
              {errors.comment && (
                <span className="text-red-500">
                  El Campo Comentario es requerido
                </span>
              )}
            </ErrorContainer>
            <Submit type="submit"> Ingresar </Submit>
          </Form>}
      </Main>
    </div>
  );
}

export default Curso;

export const getServerSideProps = async (ctx: any) => {
  const { slug } = ctx.query;
  if (!slug) {
    return { notFound: true };
  }
  const query = encodeURIComponent(
    `*[_type == "curso" && slug.current == "${slug}"]{
        _id,
        _createdAt,
        title,
        video,
        author -> {
            name,
            image
        },
        'students': *[_type == "student" && 
         curso._ref == ^._id &&
         approved == true],
        description,
        mainImage,
        slug,
        body
}`
  );
  const url = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());
  const post = result.result[0];

  if (!post) {
    return { notFound: true };
  } else {
    return {
      props: {
        post,
      },
    };
  }
};
