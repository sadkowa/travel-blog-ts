import { Footer, Header, Wrapper } from '.'
import { About, Blog, Contact } from '../views';
import * as prismicH from '@prismicio/helpers';
import { HashRouter as Router, Route } from 'react-router-dom/'

import { useAllPrismicDocumentsByType } from "@prismicio/react";


function App() {
  const [posts] = useAllPrismicDocumentsByType('post');
  const [categories] = useAllPrismicDocumentsByType('category');

  if (!posts || !categories) return

  const categoriesArr = categories.map(item => prismicH.asText(item.data.name));

  return (
    <Router>
      <Header />
      <Wrapper>
        <Route exact path='/'>
          <Blog posts={posts} />
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/contact'>
          <Contact/>
        </Route>

      </Wrapper>
      <Footer />

    </Router>
  );
}

export default App;

