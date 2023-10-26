import styled from "styled-components";

export const StyledSpan = styled.span<{
  $size: number;
  $thickness: number;
}>`
  height: ${({ $size }) => `${$size}px`};
  width: ${({ $size }) => `${$size}px`};
  display: inline-block;
  color: var(--accent-a7);
  animation: 2.4s ease-in-out 0s infinite normal none running rotate;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  & > svg {
    display: "block";

    & > circle {
      @keyframes stroke {
        0% {
          stroke-dasharray: 1px, 200px;
          stroke-dashoffset: 0;
        }
        100% {
          stroke-dasharray: 100px, 200px;
          stroke-dashoffset: -15px;
        }
      }

      stroke: var(--accent-a7);
      stroke-dasharray: 80px, 200px;
      stroke-dashoffset: 0;
      animation: 1.4s ease-in-out 0s infinite normal none running stroke;
    }
  }
`;
