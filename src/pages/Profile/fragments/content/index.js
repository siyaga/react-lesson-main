import './styles.css';

function Content (prop) {
  
  return(
    <section>
      <h1 >Profile Saya</h1>
      <div class="card">
  <img class="gambar" src="https://adir.skuy.dev/dist/img/pas_foto__2x3.png" alt="Adi Riyanto"  />
  <h1>Adi Riyanto</h1>
  <p class="title">Backend Developer</p>
  <p>Universitas Komputer Indonesia</p>
  <a href="#"><i class="fa fa-dribbble"></i></a>
  <a href="#"><i class="fa fa-twitter"></i></a>
  <a href="#"><i class="fa fa-linkedin"></i></a>
  <a href="#"><i class="fa fa-facebook"></i></a>
  <p><button>Contact</button></p>
</div>
      
    </section>
  );
}

export default Content;