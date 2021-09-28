import React from 'react';
import $ from 'jquery';

const Profile = () => {
    return (
        <div>
            <div class="loginwrap">
      <div class="pgaddressrow">
        <h1 class="heading">My Account</h1>
        <h4 class="smheading"><a href=" ">Home</a> / profile / <a href=" )">Detail</a></h4>
      </div>
     
     <div class="container">
      <div class="profilinputs">

          <div class="imvendwrap">

          <div class="row clearfix">
          
           <div class="col-sm-4">
            <div class="control-group file-upload" id="file-upload1">
                 <div class="image-box text-center">
                    <p>Upload Image</p>
                     <img src="" alt=""/>
                 </div>

            <div class="controls" style={{"display": "none"}}>
                <input type="file" name="contact_image_1"/>
                </div>
            </div>
          </div>

             <div class="col-sm-4">
              <div class="nameconbox"> 
             <h4>Name</h4>
             <p class="paratrxt">Alex Tuntuni</p>
              </div>     

            <div class="emailconbox">
            <h4>Email ID</h4>
            <p class="paratrxt">alextuntuni@gmail.com</p>
            </div>
           </div>
                
          <div class="col-sm-4">
                <div class="phoneconbox">
                  <h4>Phone No</h4>
                  <p class="paratrxt paranumar">91-7217643966</p>
                   </div>
          </div>

       
       </div>
      
    </div>
  </div>
</div>
        </div>
        {/* <script type="text/javascript">

  $(".image-box").click(function(event) {
  var previewImg = $(this).children("img");

  $(this)
    .siblings()
    .children("input")
    .trigger("click");

  $(this)
    .siblings()
    .children("input")
    .change(function() {
      var reader = new FileReader();

      reader.onload = function(e) {
        var urll = e.target.result;
        $(previewImg).attr("src", urll);
        previewImg.parent().css("background", "transparent");
        previewImg.show();
        previewImg.siblings("p").hide();
      };
      reader.readAsDataURL(this.files[0]);
    });
});

</script> */}
        </div>
        
    )
}

export default Profile
