import { useAllPrismicDocumentsByType } from "@prismicio/react";
import * as prismicH from '@prismicio/helpers';



function App() {
  const [posts] = useAllPrismicDocumentsByType('post');
  const [categories] = useAllPrismicDocumentsByType('category');



  if (!posts || !categories) return

  console.log(posts)

  const { categoru, content, img, intro, title } = posts[0].data
  // console.log(title)
  const categoriesArr = categories.map(item => (item.data.name[0].text));
  // const categoriesArr = categories.map(item => prismicH.asText(item.data.name));
  console.log(categoriesArr)

  const imgUrl = img.url

  return (
    <>
    <header style={{ backgroundColor: 'grey', height:'300px' }}>
      <nav>
        <ul>
          <li>About</li>
          <li>Category</li>
          <li>Contact</li>
        </ul>
      </nav>
      <h1>Blog</h1>

    </header>
      <div>
        <img src={imgUrl} alt="" />
      </div>
    </>
  );
}

export default App;
