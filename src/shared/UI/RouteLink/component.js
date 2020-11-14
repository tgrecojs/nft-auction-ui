import Link from 'next/link';

const RouteLink = ({
  href = 'default href',
  displayText = 'default display text',
  as = ''
}) => (
  <Link href={href} as={as === '' ? href : as}>
    <a>{displayText}</a>
  </Link>
);

export default RouteLink;
