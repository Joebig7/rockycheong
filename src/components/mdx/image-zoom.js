import { Center, Image } from "@chakra-ui/react";
import Zoom from "react-medium-image-zoom";

const ImageZoomWrapper = ({ src, alt }) => {
  return (
    // 使用 Chakra UI 的 Center 组件来居中显示图片
    <Center>
      <Zoom>
        <Image src={src} alt={alt} />
      </Zoom>
    </Center>
  );
};

export default ImageZoomWrapper;
