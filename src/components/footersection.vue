<template>
    <footer>

       <div class="row">
            <div class="col-3">                
                <ul class="footer-cat-links">
                    <p>Welcome to KCC CAR Parking, where we offer convenient and secure parking solutions for your vehicles. Our mission is to provide hassle-free parking services that cater to your needs.</p>
                </ul>
            </div>
            <div class="col-3">
                <div class="link-cat" onclick="footerToggle(this)">
                    <span class="footer-toggle"></span>
                    <span class="footer-cat">Quick Links</span>
                </div>
                <ul class="footer-cat-links">
                    <li><a href=""><span>Parking Locations</span></a></li>
                    <li><a href=""><span>Rates & Reservations</span></a></li>
                    <li><a href=""><span>Contact Us</span></a></li>
                </ul>
            </div>
            <div class="col-3">
                <div class="link-cat" onclick="footerToggle(this)">
                    <span class="footer-toggle"></span>
                    <span class="footer-cat">About Us</span>
                </div>
                <ul class="footer-cat-links">
                    <li><a href=""><span>Our Team</span></a></li>
                    <li><a href=""><span>News & Updates</span></a></li>
                    <li><a href=""><span>Frequently Asked Questions</span></a></li>
                </ul>
            </div>
            <div class="col-3" id="newsletter">
                <span>Stay Informed</span>
                <form id="subscribe">
                    <input type="email" id="subscriber-email" placeholder="Enter Email Address" disabled>
                    <input type="submit" value="Subscribe" id="btn-scribe"/>
                </form>      
            </div>
       </div>
       <div id="copyright">
           &copy; All Rights Reserved 2023   Designed by <a href="">K.B.M.Pubudu Deepamal</a>
       </div>
    </footer>     
</template>


    
<script>
    export default {
      name: 'footersection'
  
    }
</script>
    
<style src="../assets/style/style.css" scoped></style>

<style scoped>
.col-3{
    text-align: center;
}

@media (max-width: 800px){
    footer .logo{
    margin-left: 38%;
}
}

@media (min-width: 1200px){
    footer .logo{
    margin-left: 8%;
}
}

footer {
    box-shadow: 0px -10px 5px -5px #c2c2c2;
}
</style>
  
  
  