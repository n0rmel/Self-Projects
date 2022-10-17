
let btn = document.getElementById('btnClick')
let image = document.getElementById('image')

btn.addEventListener('click', function(){
    fetch("https://randomfox.ca/floof/")
    .then(res => res.json())
    .then(result => {
      console.log(result)
      image.src = result.image
    })
    .catch(eer=>console.log(eer))
})



  
  





  
  




