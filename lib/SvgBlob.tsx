import React, {useMemo, forwardRef} from 'react';
import blobshape from 'blobshape';

import * as Patterns from './patterns';
import {SvgBlobProps} from './types';

const SvgBlob = forwardRef<SVGSVGElement, SvgBlobProps>(function SvgBlob(
  props,
  ref
) {
  const {
    type,
    size = 400,
    isOutline = false,
    color = 'currentColor',
    shapeProps,
    ...svgProps
  } = props;

  const {path: svgPath} = useMemo(() => {
    return blobshape({
      size,
      growth: shapeProps?.growth ?? 6,
      edges: shapeProps?.edges ?? 6,
      seed: shapeProps?.seed,
    });
  }, [size, shapeProps]);

  const pathProps: React.SVGProps<SVGPathElement> = {
    fill: color,
  };

  if (type === 'gradient') {
    pathProps.fill = 'url(#gradient)';
  }

  if (type === 'gradient' && isOutline) {
    pathProps.stroke = 'url(#gradient)';
  }

  if (isOutline) {
    pathProps.strokeWidth = '7px';
    pathProps.fill = 'none';
    pathProps.stroke = color;
  }

  const {colors, pattern, image, ...restProps} = svgProps as any;

  return (
    <svg
      ref={ref}
      {...restProps}
      viewBox={`0 0 ${size} ${size}`}
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'>
      {props.type === 'solid' && <path d={svgPath} {...pathProps} />}

      {props.type === 'gradient' && (
        <>
          <defs>
            <linearGradient id='gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
              <stop offset='0%' style={{stopColor: props.colors[0]}} />
              <stop offset='100%' style={{stopColor: props.colors[1]}} />
            </linearGradient>
          </defs>
          <path d={svgPath} {...pathProps} />
        </>
      )}

      {props.type === 'pattern' && (
        <>
          <defs>
            <pattern
              id='pattern'
              x='0'
              y='0'
              width={Patterns[props.pattern].width}
              height={Patterns[props.pattern].height}
              patternUnits='userSpaceOnUse'
              fill={color}>
              <path d={Patterns[props.pattern].path} />
            </pattern>
          </defs>
          <path d={svgPath} {...pathProps} fill='url(#pattern)' />
        </>
      )}

      {props.type === 'image' && (
        <>
          <defs>
            <clipPath id='shape'>
              <path d={svgPath} {...pathProps} />
            </clipPath>
          </defs>
          <image
            x='0'
            y='0'
            width='100%'
            height='100%'
            clipPath='url(#shape)'
            xlinkHref={props.image}
            preserveAspectRatio='none'
          />
        </>
      )}
    </svg>
  );
});

export default SvgBlob;
