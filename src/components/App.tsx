import React from 'react';
import { Footer, Header, Wrapper } from '.'
import { About, Blog, Contact, ArticlePage, NotFound } from '../views';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom/'

import { useAllPrismicDocumentsByType } from "@prismicio/react";


import ScrollToTop from './ScrollToTop';
import { getCategoriesData } from '../helpers/functions';

function App() {
  const [posts] = useAllPrismicDocumentsByType('post');
  const [categories] = useAllPrismicDocumentsByType('category');
  
  if (!posts || !categories) return

  const categoriesArr: string[] = getCategoriesData(categories)

  return (
    <Router>
      <Header />
      <Wrapper>
        <ScrollToTop />
        <Switch>
          <Route exact path='/'>
            <Blog categories={categoriesArr} posts={posts} />
          </Route>
          <Route exact path='/page/:id'>
            <Blog categories={categoriesArr} posts={posts} />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route  exact path='/articles/:category'>
            <Blog categories={categoriesArr} posts={posts} />
          </Route>
          <Route exact path='/articles/:category/page/:id'>
            <Blog categories={categoriesArr} posts={posts} />
          </Route>
          <Route exact path='/articles/:category/:slug'>
            <ArticlePage posts={posts} />
          </Route>
          <Route path='/404.html'>
            <NotFound />
          </Route>
          <Route>
            <Redirect to='/404.html' />
          </Route>
        </Switch>
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;

