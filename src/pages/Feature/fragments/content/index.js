import './styles.css';

function Content (prop) {
  
  return(
    <section>
      <div class="container">

	<h1 class="heading">{prop.data}</h1>

  <div class="gallery">
 <div class="picture">
   <img class="img-foto" alt="sunset animation" src="http://orig00.deviantart.net/42f5/f/2016/105/2/c/city_sunset_by_kiffkewitzz-d9z108u.gif" />
  </div>
  
 <div class="picture">
   <img class="img-foto" alt="colourful girl" src="http://orig13.deviantart.net/0aff/f/2016/045/e/6/colourful_by_xenofirex-d9rom5t.jpg"/>
  </div>
  
 <div class="picture">
   <img class="img-foto" alt="sky and water" src="http://pre06.deviantart.net/61db/th/pre/i/2016/036/f/5/reach_by_xenofirex-d9qluod.jpg"/>
  </div>
  
 <div class="picture">
   <img class="img-foto" alt="bird" src="http://pre06.deviantart.net/7062/th/pre/i/2016/081/2/0/emerald_bird_by_kiffkewitzz-d9w1kt4.jpg"/>
  </div>
</div>
</div>
    </section>
  );
}

export default Content;