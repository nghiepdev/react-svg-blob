import * as Patterns from './patterns';

export interface SvgBlobShapeProps {
  size?: number;
  growth?: number;
  edges?: number;
  seed?: string;
}

interface BaseProps
  extends Omit<
    React.SVGAttributes<SVGSVGElement>,
    'viewBox' | 'xmlns' | 'xmlnsXlink'
  > {
  variant: unknown;
  isOutline?: boolean;
  shapeProps?: SvgBlobShapeProps;
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
  pattern: keyof typeof Patterns;
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
