import * as React from 'react'
import styled from 'styled-components'

const SVG = styled.svg`
  width: ${props => props.width || '24px'};
  height: ${props => props.height || '24px'};

  path{
    width: 100%;
    height: 100%;
  }
`

const SvgComponent = ({fill }) => (
  <SVG
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
      fill={fill}
    />
  </SVG>
)

export default SvgComponent
