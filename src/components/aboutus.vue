<template>

    <!-- About Start -->
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5 align-items-center">
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div class="about-img position-relative overflow-hidden p-5 pe-0">
                        <img class="img-fluid w-100" src="../assets/img/about.jpg">
                    </div>
                </div>
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <h1 class="display-5 mb-4" style="font-size: 45.8px; font-weight: bold; color: black;">Welcome to Angel Haven Orphanage!</h1>
                    <p class="mb-4">Angel Haven Orphanage is a loving and nurturing home for orphaned children in need. Our mission is to provide a safe and supportive environment where children can heal, grow, and thrive. At Angel Haven, we believe that every child deserves love, care, and the opportunity to build a brighter future.</p>
                    <p class="me-3">Our dedicated staff members are committed to creating a family-like atmosphere where children feel valued, cherished, and encouraged to reach their full potential. We prioritize the physical, emotional, and educational needs of each child, ensuring that they receive comprehensive care and individual attention.</p>
                    <p class="me-3">In Angel Haven, children are provided with nutritious meals, comfortable accommodation, and access to quality healthcare. We also offer a well-rounded education, providing opportunities for academic development, creative expression, and recreational activities. Our goal is to equip each child with the skills and knowledge they need to succeed in life.</p>
                </div>
            </div>
        </div>
    </div>
    <!-- About End -->

    <!-- Feature Start -->
    <div class="container-fluid bg-light bg-icon py-6">
    <div class="container">
        <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">
            <h1 class="display-5 mb-3" style="font-size: 45.8px; font-weight: bold; color: black;">Why choose Angel Haven Orphanage?</h1>
        </div>
        <div class="row g-4">
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="bg-white text-center h-100 p-4 p-xl-5">
                    <h4 class="mb-3">Safe and Nurturing Environment</h4>
                    <p class="mb-4">Angel Haven Orphanage provides a secure and caring home for orphaned children, ensuring their well-being and emotional support.</p>
                    <a class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div class="bg-white text-center h-100 p-4 p-xl-5">
                    <h4 class="mb-3">Comprehensive Care and Education</h4>
                    <p class="mb-4">We prioritize the physical, emotional, and educational needs of each child, providing them with holistic care and quality education.</p>
                    <a class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div class="bg-white text-center h-100 p-4 p-xl-5">
                    <h4 class="mb-3">Empowering Bright Futures in Child</h4>
                    <p class="mb-4">Angel Haven Orphanage is dedicated to equipping children with the skills and support they need to build a brighter future and reach their full potential.</p>
                    <a class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
                </div>
            </div>
        </div>
    </div>
</div>

    <!-- Feature End -->
    
</template>
  
<script>
export default {
  name: 'aboutus',
}
</script>
  
<style src="../assets/style/style.css" scoped></style>

<style scoped>

@media (min-width: 1200px)
{
    .p-xl-5 {
        padding: 2rem !important;
    }
}

.py-6{
    padding-top: 1rem;
    padding-bottom: 3rem;
}

.btn.btn-primary[data-v-a976c0ea], .btn.btn-secondary[data-v-a976c0ea], .btn.btn-outline-primary[data-v-a976c0ea]:hover, .btn.btn-outline-secondary[data-v-a976c0ea]:hover {
    color: #FFFFFF;
    background: #f0d8b6;
    border-color: #f0d8b6;
}

.btn-outline-primary {
    --bs-btn-color: black;
    --bs-btn-border-color:#f0d8b6;
}

.p-5 {
    padding: 0rem !important;
}

#textcolour{
    color: #FFFFFF;
}

.g-5, .gx-5 {
    margin-top: 30px;
}

h1{
    padding-top: 40px;
}

.bg-light {
    padding-bottom: 50px;
}

.mb-4 {
    text-align: center;
    font-family: emoji;
}

.me-3 {
    text-align: center;
    font-family: emoji;
}

.btn:hover{
    background:#f0d8b6;
    color: black;
    border: black;
}

.p-xl-5 {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
}

</style>
  