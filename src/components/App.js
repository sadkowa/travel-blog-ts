import { Header } from '.'
import { Blog } from '../views';
import * as prismicH from '@prismicio/helpers';

import { useAllPrismicDocumentsByType } from "@prismicio/react";


function App() {
  const [posts] = useAllPrismicDocumentsByType('post');
  const [categories] = useAllPrismicDocumentsByType('category');

  if (!posts || !categories) return

  const categoriesArr = categories.map(item => prismicH.asText(item.data.name));

  return (
    <>
      <Header />
      <Blog posts={posts} />
      {/* <Footer/> */}
    </>
  );
}

export default App;

