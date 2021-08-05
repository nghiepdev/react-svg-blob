import * as Patterns from './patterns';

export interface SvgBlobShapeProps {
  growth: number;
  edges: number;
  seed?: string;
}

interface BaseProps
  extends Omit<
    React.SVGAttributes<SVGSVGElement>,
    'viewBox' | 'xmlns' | 'xmlnsXlink' | 'type'
  > {
  type: unknown;
  size?: number;
  isOutline?: boolean;
  shapeProps?: SvgBlobShapeProps;
}

interface SvgSolidProps extends BaseProps {
  type: 'solid';
}

interface SvgGradientProps extends BaseProps {
  type: 'gradient';
  colors: [string, string];
}

interface SvgPatternProps extends BaseProps {
  type: 'pattern';
  pattern: keyof typeof Patterns;
}

interface SvgImageProps extends BaseProps {
  type: 'image';
  image: string;
}

export type SvgBlobProps =
  | SvgSolidProps
  | SvgGradientProps
  | SvgPatternProps
  | SvgImageProps;
