import type { ImgHTMLAttributes } from "react";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  caption: string;
}

export const FigureWithCaption = ({
  src,
  alt,
  caption,
  className = "",
  ...props
}: Props) => {
  return (
    <figure className={className}>
      <img src={src} alt={alt} {...props} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
};
