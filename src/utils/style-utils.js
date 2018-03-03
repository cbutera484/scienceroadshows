// these sizes are arbitrary and you can set them to whatever you wish
import { css } from "styled-components";

const sizes = {
	giant: 1200,
	desktop: 1000,
	tablet: 750,
	phone: 550
};

const media = Object.keys( sizes ).reduce(( acc, label ) => {
	acc[label] = ( ...args ) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css( ...args )};
    }
  `;

	return acc;
}, {});

export default media;
