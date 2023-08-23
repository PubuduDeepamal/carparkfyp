<template>
    <footer>

       <div class="row">
            <div class="col-3">                
                <ul class="footer-cat-links">
                    <p>Welcome to Angel Haven Orphanage, where we provide a loving and nurturing home for orphaned children in need. Our mission is to create a safe and supportive environment where children can heal, grow, and thrive.</p>
                </ul>
            </div>
            <div class="col-3">
                <div class="link-cat" onclick="footerToggle(this)">
                    <span class="footer-toggle"></span>
                    <span class="footer-cat">Quick Links</span>
                </div>
                <ul class="footer-cat-links">
                    <li><a href=""><span>Programs & Services</span></a></li>
                    <li><a href=""><span>Volunteer Opportunities</span></a></li>
                    <li><a href=""><span>Donation</span></a></li>
                    <li><a href=""><span>Contact Us</span></a></li>
                </ul>
            </div>
            <div class="col-3">
                <div class="link-cat" onclick="footerToggle(this)">
                    <span class="footer-toggle"></span>
                    <span class="footer-cat">Quick Links</span>
                </div>
                <ul class="footer-cat-links">
                    <li><a href=""><span>About Us</span></a></li>
                    <li><a href=""><span>Events & News</span></a></li>
                    <li><a href=""><span>Success Stories</span></a></li>
                    <li><a href=""><span>FAQs</span></a></li>
                </ul>
            </div>
            <div class="col-3" id="newsletter">
                <span>Stay Connected</span>
                <form id="subscribe">
                    <input type="email" id="subscriber-email" placeholder="Enter Email Address" disabled>
                    <input type="submit" value="Subscribe" id="btn-scribe"/>
                </form>      
            </div>
       </div>
       <div id="copyright">
           &copy; All Rights Reserved 2023   Designed by <a href="">AngelHaven</a>
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
</style>
  
  
  