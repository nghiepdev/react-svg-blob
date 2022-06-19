export interface ShapeProps {
  size?: number;
  growth?: number;
  edges?: number;
  seed?: number;
}

export type PatternProps = Pick<
  React.SVGAttributes<SVGPatternElement>,
  'width' | 'height' | 'path'
>;

interface BaseProps
  extends Omit<
    React.SVGAttributes<SVGSVGElement>,
    'viewBox' | 'xmlns' | 'xmlnsXlink'
  > {
  variant: unknown;
  isOutline?: boolean;
  shapeProps?: ShapeProps;
}

interface SvgSolidProps extends BaseProps {
  variant: 'solid';
}

interface SvgGradientProps extends BaseProps {
  variant: 'gradient';
  colors: [string, string];
}

interface SvgPatternProps extends BaseProps {
  variant: 'pattern';
  pattern: PatternProps;
}

interface SvgImageProps extends BaseProps {
  variant: 'image';
  image: string;
}

export type SvgBlobProps =
  | SvgSolidProps
  | SvgGradientProps
  | SvgPatternProps
  | SvgImageProps;
