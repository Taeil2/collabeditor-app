import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useAuth0 } from "@auth0/auth0-react";
import { H2 } from "@/styles/styles";
import Button from "@/components/Button";
import ButtonGroup from "@/components/ButtonGroup";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPlus, FaPencil } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";

import LoginButton from "@/components/LoginButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <Head>
        <title>Collabeditor</title>
        <meta name="description" content="Collaborate on documents with others" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        <H2>Documents<Button icon={<FaPlus />} text="new document" onClick={() => { console.log('clicked') }} /></H2>
        <ButtonGroup buttons={[
          {
            icon: <FaPencil />,
            text: "change name",
            onClick: () => { console.log('clicked') },
          },
          {
            icon: <MdLogout />,
            text: "log out",
            onClick: () => { console.log('clicked') },
          },
        ]} />
        <LoginButton />
      </main>
    </>
  );
}
