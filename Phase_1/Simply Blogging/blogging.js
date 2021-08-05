function addBlog(){
    var title = document.getElementById("title").value;
    var article = document.getElementById("article").value;
    var image = document.getElementById("image").files[0];
    
    //addition add image in localStorage
    const reader = new FileReader();

    reader.addEventListener("load", function () {

        const blog= {
            title: title,
            article: article,
            image: reader.result
        }
        
      //get the item from the localstorage if null get empty array 
      var blogs = JSON.parse(localStorage.getItem("blogPost") || "[]");
    
      //push the data object 
      blogs.push(blog);
    
      // Saving the data into localStorage
      localStorage.setItem("blogPost", JSON.stringify(blogs));

    });

    if (image) {
        reader.readAsDataURL(image);
    }

    
  //refresh page to display image automatically added
  location.reload();
}

function displayBlog(){
    let blog = localStorage.getItem("blogPost");
    let blogJson = JSON.parse(blog);
    var div = '';

    if(blogJson === null){
        console.log("blog is empty");
    }else {
        blogJson.forEach(item => {
            div += "<div class=\"col-4 shadow-lg p-3 mb-5 px-1 bg-white rounded\">" +
           " <div class=\"card\">" +
           " <h5 class=\"text-center pt-3 pb-3\">" + item.title + "</h5>" +
           " <img src=" + item.image + " class=\"card-img-top\" id=\"img\" style=\"height: 250px\" alt=\"img\">" +
           " <div class=\"card-body\">" +
           " <p class=\"card-text\">" + item.article + "</p>"+
           "</div>"+
           "</div>"+
           "</div>";
       })
    }

    document.getElementById("display").innerHTML = div;
}