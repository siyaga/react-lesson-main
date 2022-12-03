import './styles.css';

function Content (prop) {
  
  return(
    <section>
      <div class="showcase">
      <h1 >Welcome</h1>
      <div class="container showcase-inner">
      <p>{prop.data}</p>
      <a href="#" class="btn">Read More</a>
      </div>
      </div>
    </section>
  );
}

export default Content;