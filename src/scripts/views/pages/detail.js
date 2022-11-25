import UrlParser from '../../routes/url-parser';
import TheMovieDbSource from '../../data/themoviedb-source';
import { createRestDetailTemplate } from '../templates/template-creator';


const Detail = {
  async render() {
    return `
    <div id="movie" class="movie">
    
    </div>    `;
  },
 
    async afterRender() {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const resta = await TheMovieDbSource.detailRestaurant(url.id);
      const { restaurant } = resta;
      const restContainer = document.querySelector('#movie');
      restContainer.innerHTML = createRestDetailTemplate(restaurant);
      console.log(resta);
    },
};
 
export default Detail;