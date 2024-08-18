import Header from "./index/Header"
import DocumentCard from "./index/DocumentCard"

import LoginButton from "@/components/LoginButton"

export default function Home() {
  const document = {
    name: "Document 1",
    content: "Snippet Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident...",
    owner: {
      name: "taeil",
    },
    collabeditors: [
      {
        name: "xavier",
      },
      {
        name: "cooper",
      },
    ],
    updated: "8/14  3:12pm",
  }

  return (
    <>
      <LoginButton />
      <Header />
      <DocumentCard document={document} />
    </>
  );
}
