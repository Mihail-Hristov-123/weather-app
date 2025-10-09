import type { ImgHTMLAttributes } from "react";

interface FigureWithCaptionProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  caption: string;
}

export const FigureWithCaption = ({
  caption,
  className = "",
  ...props
}: FigureWithCaptionProps) => {
  return (
    <figure className={className}>
      <img {...props} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
};
