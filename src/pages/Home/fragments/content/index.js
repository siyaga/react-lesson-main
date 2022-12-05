import './styles.css';

function Content (prop) {
  
  return(
    <section>
      <div class="showcase">
      <h1 >Welcome</h1>
      <div class="containerr showcase-inner">
      <p>{prop.data}</p>
      <a href="#" class="btnbtn">Read More</a>
      </div>
      </div>
    </section>
  );
}

export default Content;