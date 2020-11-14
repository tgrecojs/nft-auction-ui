import { css } from '@emotion/core';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Button = styled.button`
  ${tw`bg-blue-500 text-white font-mono px-4 py-2 rounded`} :hover {
    ${tw`bg-blue-700`}
  }
`;

/**
 * Also, we can use `css`.
 */

const CardStyle = css`
  ${tw`flex flex-col shadow-xl bg-purple-300 rounded-lg m-2 p-6`}
`;

const Card = styled.div`
  ${tw`font-mono text-left h-1/2 `}
  ${CardStyle}
`;

const formStyles = css`
  ${tw`rounded-lg text-black text-lg flex flex-col justify-around font-mono
  border-purple-300 bg-blue-500 p-6 m-2 `}
`;
const Form = styled.form`
  ${formStyles}
  border: 1.5px solid;
  div {
    margin: 2px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 8px;
  }
  label {
    max-width: 40%
  }

  input {
    min-width: 70%
    margin-top: 5px;
    font-size: 16px;
    border-radius: 3px;
    padding: 5px;
  }
`;
/**
 * We can use macros in `styled`.
 */
const Header = styled.div`
  ${tw`font-mono text-lg text-gray-800 hover:text-red-500`}
`;

export { Button, Card, CardStyle, Header, Form };

{
  /* <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div> */
}

/**
 * rounded - border radius
 * overflow-hidden -> ensures video fits within card & will not effect border radius
 * shadow-lg -> leverages z-index style rule to create illusion of floating card
 */

const basePadding = css`
  ${tw`px-6 py-4`}
`;

const ItemWrapper = styled.div`
  ${tw`max-w-sm rounded overflow-hidden shadow-xl m-2 bg-purple-200`}
`;

const CatalogLayout = styled.div`
  ${tw`flex items-center justify-around flex-wrap`}
`;

const CatalogImage = styled.video`
  ${tw`w-full`}
`;

const DetailsWrapper = styled.div`
  ${tw`border-r-8 border-l-8 border-purple-800 px-6 py-4`}
`;

const TitleText = styled.h3`
  ${tw`text-gray-700 text-base`}
`;

const DescriptionText = styled.p`
  ${tw`font-bold text-sm mb-2`}
`;
const baseButtonStyles = css`
  transition: all 0.3s ease-in-out;
  ${tw`py-2 px-4 border`}
  &:hover {
    transform: scale(1.1);
  }
`;

const PurchaseBtn = styled.button`
  ${baseButtonStyles}
  ${tw`bg-teal-300 hover:bg-teal-500 text-black font-semibold border-teal-800 rounded`}
`;
const ViewDetailsBtn = styled.button`
  ${baseButtonStyles}
  ${tw`bg-purple-300 hover:bg-purple-500 text-black font-semibold border-purple-800 rounded`}
`;

const BtnRow = styled.div`
  ${tw`w-full flex items-center justify-around`}
`;

const NavBar = styled.nav`
  ${tw`flex justify-around items-center w-full bg-purple-400 h-16`}
`;

const Footer = styled.footer`
  ${tw`h-24 bg-teal-500 flex flex-col items-center justify-center text-white text-base`}
`;
export {
  Footer,
  BtnRow,
  PurchaseBtn,
  ViewDetailsBtn,
  DescriptionText,
  NavBar,
  TitleText,
  ItemWrapper,
  CatalogImage,
  CatalogLayout,
  DetailsWrapper
};
