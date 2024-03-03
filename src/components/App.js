import { Footer, Header, Wrapper } from '.'
import { About, Blog } from '../views';
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
      <Wrapper>
        <Blog posts={posts} />
        {/* <About /> */}
      </Wrapper>
      <Footer />

    </>
  );
}

export default App;

