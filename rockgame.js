var player1=0,player2=0;
	function myFunction(n)
	{
		if(n==0)
		{
			document.getElementById('srt1').style.display="none";
			document.getElementById('mm').style.background="red";
			document.getElementById('pp').style.background="blue";
		}

		if(n==1)
		{
			document.getElementById('srt2').style.display="none";
			document.getElementById('mm').style.background="blue";
			document.getElementById('pp').style.background="red";
		}
	    
	    

		 if(n==0)
	    {   
	    	var a=["l1","l2","l3"];
	        x=Math.floor((Math.random() * 3) + 0);
	        if(x==0)
	       {
	        document.getElementById(a[x]).style.display="block";
	        document.getElementById('l2').style.display="none";
	        document.getElementById('l3').style.display="none";
	       } 
	       if(x==1)
	       {
	       	document.getElementById(a[x]).style.display="block";
	        document.getElementById('l1').style.display="none";
	        document.getElementById('l3').style.display="none";
	       } 
	        if(x==2)
	       {
	       	document.getElementById(a[x]).style.display="block";
	        document.getElementById('l1').style.display="none";
	        document.getElementById('l2').style.display="none";  
	       } 
	        
	    }
         else if(n==1)
         {  
         	var a=["r1","r2","r3"];
	        y=Math.floor((Math.random() * 3) + 0);
	        if(y==0)
	       {
	        document.getElementById(a[y]).style.display="block";
	        document.getElementById('r2').style.display="none";
	        document.getElementById('r3').style.display="none";
	       } 
	       if(y==1)
	       {
	       	document.getElementById(a[y]).style.display="block";
	        document.getElementById('r1').style.display="none";
	        document.getElementById('r3').style.display="none";
	       } 
	        if(y==2)
	       {
	       	document.getElementById(a[y]).style.display="block";
	        document.getElementById('r1').style.display="none";
	        document.getElementById('r2').style.display="none";  
	       } 
	       
	     }
	     who(x,y);

	}
	
	function who(x,y)
	{
		
         if(x==0&&y==2||x==1&&y==0||x==2&&y==1)
         {
         	player1++;
         	document.getElementById('play1').innerHTML=player1;
         }
         else if(y==0&&x==2||y==1&&x==0||y==2&&x==1)
         {
         	player2++;
         	document.getElementById('play2').innerHTML=player2;	
         }
         if(player1==10||player2==10)
         {
         	one=document.getElementById('firstplayer').value;
            two=document.getElementById('secondplayer').value;
                document.getElementById('l1').style.display="none";
              	document.getElementById('l2').style.display="none";
	            document.getElementById('l3').style.display="none";
	            document.getElementById('r1').style.display="none";
              	document.getElementById('r2').style.display="none";
	            document.getElementById('r3').style.display="none";
	            document.getElementById('srt1').style.display="block";
	            document.getElementById('srt2').style.display="block";
         	if(player1>=10)
              {
              	player1=0;
              	player2=0;
              	document.getElementById('play1').innerHTML="0";	
              	document.getElementById('play2').innerHTML="0";
                document.getElementById('winner').style.display="block";
                document.getElementById('gamecont').style.display="none";
                document.getElementById('winnam').innerHTML=one;
                
              }
            else if(player2>=10)
             {
                player2=0;
                player1=0;
                document.getElementById('play1').innerHTML="0";	
                document.getElementById('play2').innerHTML="0";  
                document.getElementById('winner').style.display="block";
                document.getElementById('gamecont').style.display="none";
                document.getElementById('winnam').innerHTML=two;
              
             }
            }
	}
	 function gamestart()
    {
        document.getElementById('gamecont').style.display="block";
        one=document.getElementById('firstplayer').value;
        two=document.getElementById('secondplayer').value;
        document.getElementById('mm').value=one;
        document.getElementById('pp').value=two;
        document.getElementById('login').style.display="none";
    }   
    function restart()
    {
    	 document.getElementById('login').style.display="block";
    	 document.getElementById('winner').style.display="none";
    	 document.getElementById('gamecont').style.display="none";
    }