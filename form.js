function fun()
      {
          var a=document.getElementById("state").value;
          if(a==="MP")
          {
              var arr=["Indore","Bhopal","Dewas"];
          }
          else if(a==="UP")
          {
              var arr=["Banaras","Kanpur","Lucknow"];
          }
          else if(a==="Maharashtra")
          {
              var arr=["Pune","Nagpur","Mumbai"];
          }
       
          var string="";
       
          for(i=0;i<arr.length;i++)
          {
              string=string+"<option value="+arr[i]+">"+arr[i]+"</option>";
          }
          document.getElementById("city").innerHTML=string;
      }
       
    //   code for tabular form and validation

      document.getElementById("myTable").style.display="none";
     $('#save').on('click', function() {
     var a=document.getElementById("contact").value;
      if(a.length!=10)
			{
                  document.getElementById("f").innerHTML="invalid length";
                  return false;    
			}
      var c=document.getElementById("pin").value;
      if(c.length!=6)
			{
                  document.getElementById("s").innerHTML="invalid length";
                  return false;    
			}
      document.getElementById("aj").style.display="none";
      document.getElementById("myTable").style.display="block";
     var name=$('#name').val();
     var email=$('#email').val();
     var contact=$('#contact').val();
     var house=$('#house').val();
     var street=$('#street').val();
     var street2=$('#street2').val();
     var state=$('#state').val();
     var city=$('#city').val();
     var pin=$('#pin').val();
     
     var count = $('#myTable tr').length;
     if(name!="" && email!="" && contact!="" && house!="" && street!="" && street2!="" && state!="" && city!="" && pin!=""){
     $('#myTable tbody').append('<tr class="child"><td>'+name+'</td><td>'+email+'</td><td>'+contact+'</td><td>'+house+'</td><td>'+street+'</td><td>'+street2+'</td><td>'+state+'</td><td>'+city+'</td><td>'+pin+'</td></tr>');
     }
     });