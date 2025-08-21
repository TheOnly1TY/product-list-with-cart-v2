import { useMediaQuery } from "react-responsive";

type ImageType = {
  desktop: string;
  tablet: string;
  mobile: string;
};

function useMedia(image: ImageType) {
  const isMobile = useMediaQuery({ maxWidth: 778 });
  const isTablet = useMediaQuery({ minWidth: 779, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  let selectedImage = image.desktop;
  if (isMobile) selectedImage = image.mobile;
  else if (isTablet) selectedImage = image.tablet;
  else if (isDesktop) selectedImage = image.desktop;

  return selectedImage;
}
export default useMedia;
