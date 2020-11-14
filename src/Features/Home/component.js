import Layout from '../../shared/UI/component';
import CatalogItem from '../CatalogItem/component';
import { CatalogLayout, NavBar as Nav } from '../../shared/styled';
import Link from 'next/link';

const Home = () => (
  <Layout>
    <CatalogLayout>
      <CatalogItem />
      <CatalogItem />
      <CatalogItem />
      <CatalogItem />
    </CatalogLayout>
  </Layout>
);
export default Home;
