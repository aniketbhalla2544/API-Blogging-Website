import getAPIBlogsPromise, { apiArticles } from "./index.js";

const myStorage = window.localStorage;

function getCurrentBlogPage(currentBlogId, blogs) {
  const requiredBlog = blogs.find((element, index) => (index === currentBlogId));
  const { image, title } = requiredBlog;
  return `
  <figure id="blogPage__imgContainer">
    <img src=${image} alt="blog-page-img" class="img-fluid">
  </figure>
  <h2 id="blog__title">${title}</h2>
  <div id="blog__content">
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis iste doloremque asperiores voluptas blanditiis
    placeat
    quod amet dolorem nihil eveniet, magnam eos magni ea ratione sapiente facilis voluptates adipisci. Nam iusto
    voluptate
    cupiditate quaerat hic placeat architecto provident quidem officiis sequi odio minima, voluptates odit voluptatibus
    autem deleniti dolorum commodi.</p>

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, incidunt inventore aliquid vel sint ipsum
  consequuntur ipsa quisquam nostrum dolore.</p>

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quasi. Harum repudiandae repellendus qui. Culpa
  possimus animi consequatur rerum! Quis dolor placeat distinctio iure, nulla reprehenderit officiis, libero sapiente
  modi perspiciatis error rerum esse quidem beatae nesciunt consequatur ut maiores! Earum, debitis ullam nostrum non
  corrupti ad laborum cupiditate! Id laudantium excepturi autem sunt dolorum porro, commodi natus tempora facere hic,
  quo iure repudiandae debitis omnis? Nam sunt beatae voluptate velit nostrum dolore tenetur voluptates facere
  cupiditate! Voluptatum, assumenda optio.</p>

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aliquam esse, non, soluta voluptatibus, saepe
  nesciunt totam adipisci accusamus amet in laudantium ipsam consectetur cumque provident impedit sunt. Ad nulla
  sapiente, consectetur saepe voluptatibus nisi quidem dolore id doloribus totam distinctio laborum porro maiores velit
  tenetur est obcaecati odio non. Enim quas mollitia sunt tenetur aspernatur, non illum veritatis debitis provident?
  Sint unde, error exercitationem, officiis dignissimos vel totam, modi quas illum mollitia adipisci numquam reiciendis
  reprehenderit deleniti ex odio alias optio ea. Quibusdam expedita temporibus unde fugit provident minus atque harum
  voluptas ducimus nemo qui commodi voluptatem possimus velit quo quia, est numquam nihil nobis dignissimos vero amet
  quas! Maiores magni impedit velit quas expedita doloremque corrupti quaerat nulla dolorum repudiandae autem
  consectetur voluptatem doloribus similique molestiae accusantium minus, dolorem incidunt! Iure totam numquam deserunt
  dolor, cumque sit error sint aliquam esse unde, mollitia nihil provident beatae doloremque quas.</p>

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ea velit aperiam recusandae provident dolores. Sequi
  nisi aperiam debitis in obcaecati, veniam a architecto, ducimus totam odio aliquid repellat, nulla deleniti
  consequatur fugiat vitae molestias deserunt. Ipsum ex quo tenetur.</p>
  </div>`
}

export default async function init() {
  const currentBlogId = Number(myStorage.getItem('current-blogId'));
  // const response = await getAPIBlogsPromise();
  // const apiData = await response.json();
  // const blogs = apiData.articles;
  // return getCurrentBlogPage(currentBlogId, blogs);
  return getCurrentBlogPage(currentBlogId, apiArticles);
};


