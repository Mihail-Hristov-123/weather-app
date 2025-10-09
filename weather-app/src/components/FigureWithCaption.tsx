import type { ImgHTMLAttributes } from "react";

interface FigureWithCaptionProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  caption: string;
  imgClassName?: string;
}

export const FigureWithCaption = ({
  caption,
  className = "",
  imgClassName,
  ...props
}: FigureWithCaptionProps) => {
  return (
    <figure className={className}>
      <img {...props} className={imgClassName} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
};
