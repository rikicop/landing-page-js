import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
//import BlockContent from "@sanity/block-content-to-react";
import Toolbar from "../../../components/Toolbar";
import { useForm, SubmitHandler } from "react-hook-form";
import { PostType } from "../../../typings";
//SingleCurso Components
//import SingleCurso from "../SingleCurso";
import { homeObjFour } from "../DataCurso";
import { CommentConfirmed, ErrorContainer, Form, Input, Label, Main, Rule, Span, Submit, Textarea } from "./SlugElements";
import { MyGlobalContext } from "../slugContext";
import SingleCourse from "../SingleCourse";


interface IFormInput {
  _id: string;
  name: string;
  email?: string;
  comment: string;
}

interface Props {
  post: PostType;
}


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
      <MyGlobalContext.Provider value={{checkout,setCheckout}}>
        {/* Aqui estoy pasando tanto el objeto estatico como el de sanity */}
        <SingleCourse {...homeObjFour} {...objSanity}/>
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
