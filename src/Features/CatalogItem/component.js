import {
  DescriptionText,
  TitleText,
  ItemWrapper,
  CatalogImage,
  DetailsWrapper,
  BtnRow,
  PurchaseBtn,
  ViewDetailsBtn
} from '../../shared/styled';

const CatalogItem = ({
  videoUrl,
  title = 'Default Item',
  shortDescription = 'Short description of the default Item',
  price = 0,
  owner = 'Anonomyous Minter',
  autoplayEnabled = false
}) => (
  <ItemWrapper>
    <CatalogImage src="/media/promo.mp4" autoPlay={autoplayEnabled} />
    <DetailsWrapper>
      <TitleText>{title}</TitleText>
      <DescriptionText>{shortDescription}</DescriptionText>
      <BtnRow>
        <PurchaseBtn>Purchase Stream</PurchaseBtn>
        <ViewDetailsBtn>Read More</ViewDetailsBtn>
      </BtnRow>
    </DetailsWrapper>
  </ItemWrapper>
);

export default CatalogItem;
