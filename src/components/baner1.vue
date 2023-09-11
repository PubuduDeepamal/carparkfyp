<template>
    <div>
        <img class="img-fluid" src="https://img.freepik.com/free-photo/shiny-sports-car-racing-through-futuristic-cityscape-generated-by-ai_188544-29674.jpg?t=st=1693457117~exp=1693460717~hmac=7cf535cd811949cabf9972a2ea2542a9429d88422944182bf1a5c7a714b8d9db&w=1380" alt="Shiny Sports Car" />
    </div>  
</template>
          
<script>
    export default {
        name: 'banner1'   
    }
</script>

<style scoped>
.img-fluid {
    width: 100%;
    margin-top: 63px;
    height: 650px;
}

@media (max-width: 768px)
{
    .img-fluid {
    max-width: 100%; /* Make the image responsive by limiting its width to the container's width */
    height: auto;    /* Maintain the image's aspect ratio */
    margin-top: 63px;
}
}


</style>
