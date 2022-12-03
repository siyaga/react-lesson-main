import './Footer.css';

function Footer(prop) {


  return(
    <div>
<footer class="footer-distributed">
<div class="footer-left">

  <h3>Adiriyanto<span>Rapidtech</span></h3>

  <p class="footer-links">
    <a href="#" class="link-1">Home</a>
    
    <a href="#">Home</a>
  
    <a href="#">Feature</a>
  
    <a href="#">Profile</a>
  
  </p>

  <p class="footer-company-name">Adiriyanto 2022</p>
</div>

<div class="footer-center">

  <div>
    <i class="fa fa-map-marker"></i>
    <p><span>Indonesia</span> Jawa Barat, Bandung</p>
  </div>

  <div>
    <i class="fa fa-phone"></i>
    <p>+6281321512351</p>
  </div>

  <div>
    <i class="fa fa-envelope"></i>
    <p><a href="mailto:support@company.com">adi.riyanto@rapidtech.id</a></p>
  </div>

</div>

<div class="footer-right">

  <p class="footer-company-about">
    <span>About Website</span>
    Pembuat oleh adiriyanto
  </p>

  <div class="footer-icons">

  </div>

</div>

</footer>
    </div>
  );
}

export default Footer;