window.onload = function(){
	var 
	    whostarta = document.getElementById("whostarta"),
		clscore = document.getElementById('clscore'),
		blurred = document.getElementById('blurred'),
		resetbtn = document.getElementById('reset'),
	    bg = document.getElementById('background'),
		hidden = document.getElementById('hidden'),
		theme = document.getElementById('theme'),
		score = document.getElementById('score'),
		Score = document.getElementById('Score'),
		gname = document.getElementById('gname'),
		stbtn = document.getElementById('stbtn'),
		swap = document.getElementById("swap"),
		gmpl = document.getElementById("gmpl"),
		body = document.getElementById('body'),
		title = document.getElementById('tit'),
		icon = document.getElementById('ic'),
		Ren = document.getElementById("REN"),
	    hp1 = document.getElementById("p1"),
	   	hp2 = document.getElementById("p2"),
	    ex = document.getElementById("ex"),
	    oh = document.getElementById("oh"),
		xc = document.getElementById("xc"),
		oc = document.getElementById("oc"),
		rc = document.getElementById("rc");

	var s = new Array;
		s[1] = document.getElementById("s1");
		s[2] = document.getElementById("s2");
		s[3] = document.getElementById("s3");
		s[4] = document.getElementById("s4");
		s[5] = document.getElementById("s5");
		s[6] = document.getElementById("s6");
		s[7] = document.getElementById("s7");
		s[8] = document.getElementById("s8");
		s[9] = document.getElementById("s9");

	var stat = '<label for="gmpl">Status:</br></label>';
	
	hidden.style.display='none';
	bg.src="halloween.jpg";
	stbtn.onclick = function(){
		hidden.style.display='';
		// body.style.filter="blur(2vw)";
		body.style.filter="";
		stbtn.style.display='none';
		gname.style.display='none';
		p1=prompt("Enter Player Name for X:");
		p2=prompt("Enter Player Name for O:");
		hp1.innerHTML=p1;
		hp2.innerHTML=p2;
		gmpl.innerHTML=stat+p1+"s Turn...";
				
	}

	score.style.display='none';
	
	Score.onclick = function(){
		bg.style.filter="blur(5px)";
		blurred.style.filter="blur(5px)";
		score.style.display='';
	}
	clscore.onclick = function(){
		bg.style.filter="blur(2px)";
		blurred.style.filter="";
		score.style.display='none';

	}

	var th = 1;
	var c1="&#10060;",c2="&#11093;",c3=true;

	ex.style.display="none";
	oh.style.display="none";

	whostarta.onclick = function(){
		whostarta.style.display="none";
		ex.style.display="";		
		oh.style.display="";		

	}

	ex.onclick = function(){
		c1="&#10060;"; 
		c2="&#11093;";
		c3=true;
		ex.style.display="none";
		oh.style.display="none";
		whostarta.style.display="";
		reset();
	}

	oh.onclick  = function(){
		c1="&#11093;";
		c2="&#10060;";
		c3=false;
		ex.style.display="none";
		oh.style.display="none";
		whostarta.style.display="";
		reset();
	}
	

	
	var ss=new Array;
	for(let i=1,j=5;i<10;i++,j++){ ss[i]=j; }
	
	var counter1=9;
	for(let i=1;i<10;i++){	
		s[i].onclick = function(){
			if(counter1==0){}
			else if (counter1%2==1 && ss[i]>4){
				if (c3) gmpl.innerHTML=stat+p2+"s Turn...";
				else gmpl.innerHTML=stat+p1+"s Turn..."
				s[i].innerHTML=c1;
				s[i].style.cursor="not-allowed";
				ss[i]=1;
				counter1--;
			}
			else if(counter1%2==0 && ss[i]>4){
				if (c3) gmpl.innerHTML=stat+p1+"s Turn...";
				else gmpl.innerHTML=stat+p2+"s Turn..."
				s[i].innerHTML=c2;
				s[i].style.cursor="not-allowed";
				ss[i]=0;
				counter1--;
			}
			
			var row1=(ss[1]==ss[2]) && (ss[2]==ss[3]);
			var row2=(ss[4]==ss[5]) && (ss[5]==ss[6]);
			var row3=(ss[7]==ss[8]) && (ss[8]==ss[9]);
			var col1=(ss[1]==ss[4]) && (ss[4]==ss[7]);
			var col2=(ss[2]==ss[5]) && (ss[5]==ss[8]);
			var col3=(ss[3]==ss[6]) && (ss[6]==ss[9]);
			var dia1=(ss[1]==ss[5]) && (ss[5]==ss[9]);
			var dia2=(ss[7]==ss[5]) && (ss[5]==ss[3]);

			if  (( row1 || row2 || row3 || col1 || col2 || col3 || dia1 || dia2 ) && ( counter1 >= 0 ) ) {
				if (1) ;
				if(c3){
					if (counter1%2==0) {
						xc.innerHTML++;
						gmpl.innerHTML=stat+p1+" is Winner";
					}
					else if (counter1%2==1) {
						oc.innerHTML++;
						gmpl.innerHTML=stat+p2+" is Winner";	
					}
				}
				else {
					if (counter1%2==1) {
						xc.innerHTML++;
						gmpl.innerHTML=stat+p1+" is Winner";
					}
					else if (counter1%2==0) {
						oc.innerHTML++;
						gmpl.innerHTML=stat+p2+" is Winner";	
					}
				}
				counter1=-1;
				for(let i=1;i<10;i++){ 
					s[i].style.cursor="not-allowed";
				}

			}
			if (counter1==0) {
				rc.innerHTML++;
				gmpl.innerHTML=stat+"It's Draw";	
			}
		}
	}
	
	theme.onclick = function(){
		counter1=9;
		if (th==1){
			theme.innerHTML='Halloween Theme &#127875;';
			bg.src="snow.jpg";
			body.style.backgroundColor="#fff";
			tit.innerHTML='&#9924;&#10060;&#9924;&#11093;&#9924;';
			ic.innerHTML='&#9924';
			for(let i=1,j=5;i<10;i++,j++){
				s[i].innerHTML='&#9924';
				s[i].style.cursor="pointer";
				ss[i]=j; 
				if (c3) gmpl.innerHTML=stat+p1+"s Turn...";
				else gmpl.innerHTML=stat+p2+"s Turn..."
			}
			th=0;
		}
		else {
			theme.innerHTML='Snowy Theme &#9924;';
			bg.src="halloween.jpg";
			body.style.backgroundColor="#000";
			tit.innerHTML='&#127875;&#10060;&#127875;&#11093;&#127875;';
			ic.innerHTML='&#127875';
			for(let i=1,j=5;i<10;i++,j++){
				s[i].innerHTML='&#127875';
				s[i].style.cursor="pointer";
				ss[i]=j; 
				if (c3) gmpl.innerHTML=stat+p1+"s Turn...";
				else gmpl.innerHTML=stat+p2+"s Turn..."
			}	
			th=1;	
		}
	}
	function reset(){
		for(let i=1,j=5;i<10;i++,j++){
			if (th==1){
				s[i].innerHTML='&#127875;';				
			}
			else{ 
				s[i].innerHTML='&#9924;';
			}
			s[i].style.cursor="pointer";
			counter1=9;
			ss[i]=j; 
			if (c3) gmpl.innerHTML=stat+p1+"s Turn...";
			else gmpl.innerHTML=stat+p2+"s Turn..."
		}
	}

	
	
	resetbtn.onclick = function (){
		reset();

	};

	var p1="Player1",p2="Player2";
	REN.onclick = function(){
		p1=prompt("Enter Player Name for X:");
		p2=prompt("Enter Player Name for O:");
		hp1.innerHTML=p1;
		hp2.innerHTML=p2;
	}
	swap.onclick = function(){
		var tname = hp1.innerHTML;
		hp1.innerHTML=hp2.innerHTML;
		hp2.innerHTML=tname;
	}
}
