import { BsLinkedin, BsGithub } from "react-icons/bs"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { schemaContact } from "../../validations/schemaContact"
import { iFormContact } from "./types"

import { ContainerStyled } from "../../styles/container"
import {
  HeadingStyledThree,
  HeadingStyledTwo,
  TextStyledOne,
} from "../../styles/typography"
import { FooterStyled } from "./styles"
import Image from "next/image"
// import { toast } from "react-hot-toast";

export const Footer = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
    reset,
  } = useForm<iFormContact>({
    resolver: yupResolver(schemaContact),
  })

  const onSubmit = (data: iFormContact) => {
    console.log(data)
    reset()
  }

  return (
    <FooterStyled>
      <ContainerStyled>
        <div className="box-info">
          <Image
            src="/assets/img/profile.jpg"
            alt="profile_img"
            width={240}
            height={240}
          />
          <div>
            <HeadingStyledTwo>Eu sou Carlos Junio</HeadingStyledTwo>
            <HeadingStyledThree>Always news things!</HeadingStyledThree>
            <div>
              <a
                href="https://www.linkedin.com/in/carlos-junio-b02165240/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin />
              </a>
              <a
                href="https://github.com/CarlosX26"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
              </a>
            </div>
          </div>
        </div>

        <form className="box-email" onSubmit={handleSubmit(onSubmit)}>
          <TextStyledOne id="contato">Contato</TextStyledOne>
          <input type="text" placeholder="Nome" {...register("name")} />
          <input type="text" placeholder="Email" {...register("email")} />
          <textarea placeholder="Mensagem..." {...register("message")} />
          <button type="submit">Enviar email</button>
        </form>
      </ContainerStyled>
    </FooterStyled>
  )
}
