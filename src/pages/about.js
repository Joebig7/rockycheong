import { useMediaQuery } from "@chakra-ui/react";

export default function About() {
  const [test] = useMediaQuery("(screen)");

  console.log("xxxxxxx" + test);

  return <div>about</div>;
}
