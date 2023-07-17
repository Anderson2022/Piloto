import Image from "next/image";
import React from "react"

const Footer = () => {
  return (
    <div className="bg-wallterWhite p-5 justify-center flex flex-col items-center">
      <Image src="/logo.png" width={133} height={23} alt="Logo"></Image>
      <a className="text-sm font-semibold text-primary">Todos os direitos reservados</a>
    </div>
  )
}
export default Footer