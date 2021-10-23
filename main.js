var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg",
"https://lh3.googleusercontent.com/proxy/s3I_oOE3aUKR7vK63gGHA-qL1iwu8RIY2EbVdbESxxyNEEPLLPmaIj9L_9__h73wsIgvYL2phsu0ZiZmV7mbGGmVUug-W8VdtlIXQNajpjSGP-iFS9iQ079izx5gEOHLXIUJ6NGJgc7ULZMD5kaN--KjJsyCwwPcwpHdmwdBQ29G90ZP",
 "https://image.shutterstock.com/image-vector/young-cheerful-woman-long-hair-260nw-1354276241.jpg" ,
  "https://image.shutterstock.com/image-vector/portrait-handsome-man-shirt-jeans-260nw-582282625.jpg",
   "https://e7.pngegg.com/pngimages/554/726/png-clipart-cartoon-child-boy-drawing-boy-comics-child.png",
    "https://png.pngtree.com/png-clipart/20190706/original/pngtree-hand-drawn-cartoon-old-grandma-holding-a-bunch-of-flowers-png-image_4376245.jpg",];
var names = ["Fmaily Book","Aira Sharma", "Anupama Sharma", "Ritesh Sharma", "Aveer Sharma", "Menakshi Sharma"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i++ ;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage =images [i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName =names [i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
