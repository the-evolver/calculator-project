var n0=document.getElementById('0');
var n1=document.getElementById('1');
var n2=document.getElementById('2');
var n3=document.getElementById('3');
var n4=document.getElementById('4');
var n5=document.getElementById('5');
var n6=document.getElementById('6');
var n7=document.getElementById('7');
var n8=document.getElementById('8');
var n9=document.getElementById('9');
var percent=document.getElementById('percentage');
var divide=document.getElementById('divide');
var plusminus=document.getElementById('plusminus');
var ac=document.getElementById('ac');
var multiply=document.getElementById('multiply');
var plus=document.getElementById('plus');
var minus=document.getElementById('minus');
var equality=document.getElementById('equality');
var dot=document.getElementById('dot');
var val=document.getElementById('value');
var curr_ans=0;
var op1=0,op2=0,oprator=0,op_val=0;
var dottii=0,dcnt=1;
n0.addEventListener('click',calculate0);
n1.addEventListener('click',calculate1);
n2.addEventListener('click',calculate2);
n3.addEventListener('click',calculate3);
n4.addEventListener('click',calculate4);
n5.addEventListener('click',calculate5);
n6.addEventListener('click',calculate6);
n7.addEventListener('click',calculate7);
n8.addEventListener('click',calculate8);
n9.addEventListener('click',calculate9);
dot.addEventListener('click',dotti);
ac.addEventListener('click',fac);
plusminus.addEventListener('click',pm);
percent.addEventListener('click',percnt);
divide.addEventListener('click',dvd);
multiply.addEventListener('click',multpy);

minus.addEventListener('click',mins);
plus.addEventListener('click',pls);
equality.addEventListener('click',equalty);



function calculate0(){
    if(op_val==0){
        
        // op1=op1*10+0;
        // if(dottii==1){
        //     op1=op1/10;
        //     dottii=0;
        // }

        if(dottii==1&&dcnt==10){
            op1=(op1*10+0)/10;
            dcnt=dcnt*10;
            
        } else if(dottii==1&&dcnt>10){
            op1=op1+0/dcnt;
            dcnt=dcnt*10;
        }else{
            op1=op1*10+0;
        }


        val.innerHTML=op1;
    }
    else {
        // op2=op2*10+0;

        // if(dottii==1){
        //     op2=op2/10;
        //     dottii=0;
        // }
        if(dottii==1&&dcnt==10){
            op2=(op2*10+0)/10;
            dcnt=dcnt*10;
            
        } else if(dottii==1&&dcnt>10){
            op2=op2+0/dcnt;
            dcnt=dcnt*10;
        }else{
            op2=op2*10+0;
        }


        val.innerHTML=op2;
    }



    
};
function calculate1(){
    // if(op_val==0){
        
    //     if(dottii==1&&dcnt==10){
    //         op1=(op1*10+1)/10;
    //         dcnt=dcnt*10;
            
    //     } else if(dottii==1&&dcnt>10){
    //         op1=op1+1/dcnt;
    //         dcnt=dcnt*10;
    //     }else{
    //         op1=op1*10+1;
    //     }

        
    //     val.innerHTML=op1;
    // }
    // else {
    //     op2=op2*10+1;
    //     if(dottii==1){
    //         op2=op2/10;
    //         dottii=0;
    //     }
    //     val.innerHTML=op2;
    // }
    if(op_val==0){
        
        // op1=op1*10+0;
        // if(dottii==1){
        //     op1=op1/10;
        //     dottii=0;
        // }

        if(dottii==1&&dcnt==10){
            op1=(op1*10+1)/10;
            dcnt=dcnt*10;
            
        } else if(dottii==1&&dcnt>10){
            op1=op1+1/dcnt;
            dcnt=dcnt*10;
        }else{
            op1=op1*10+1;
        }


        val.innerHTML=op1;
    }
    else {
        // op2=op2*10+0;

        // if(dottii==1){
        //     op2=op2/10;
        //     dottii=0;
        // }
        if(dottii==1&&dcnt==10){
            op2=(op2*10+1)/10;
            dcnt=dcnt*10;
            
        } else if(dottii==1&&dcnt>10){
            op2=op2+1/dcnt;
            dcnt=dcnt*10;
        }else{
            op2=op2*10+1;
        }


        val.innerHTML=op2;
    }






};
function calculate2(){
    
    if(op_val==0){
        
        

        if(dottii==1&&dcnt==10){
            op1=(op1*10+2)/10;
            dcnt=dcnt*10;
            
        } else if(dottii==1&&dcnt>10){
            op1=op1+2/dcnt;
            dcnt=dcnt*10;
        }else{
            op1=op1*10+2;
        }


        val.innerHTML=op1;
    }
    else {
        
        if(dottii==1&&dcnt==10){
            op2=(op2*10+2)/10;
            dcnt=dcnt*10;
            
        } else if(dottii==1&&dcnt>10){
            op2=op2+2/dcnt;
            dcnt=dcnt*10;
        }else{
            op2=op2*10+2;
        }


        val.innerHTML=op2;
    }




};
function calculate3(){
   
    if(op_val==0){
        
        if(dottii==1&&dcnt==10){
            op1=(op1*10+3)/10;
            dcnt=dcnt*10;
            
        } else if(dottii==1&&dcnt>10){
            op1=op1+3/dcnt;
            dcnt=dcnt*10;
        }else{
            op1=op1*10+3;
        }


        val.innerHTML=op1;
    }
    else {
        
        if(dottii==1&&dcnt==10){
            op2=(op2*10+3)/10;
            dcnt=dcnt*10;
            
        } else if(dottii==1&&dcnt>10){
            op2=op2+3/dcnt;
            dcnt=dcnt*10;
        }else{
            op2=op2*10+3;
        }


        val.innerHTML=op2;
    }


};
function calculate4(){
    
    if(op_val==0){
        
        if(dottii==1&&dcnt==10){
            op1=(op1*10+4)/10;
            dcnt=dcnt*10;
            
        } else if(dottii==1&&dcnt>10){
            op1=op1+4/dcnt;
            dcnt=dcnt*10;
        }else{
            op1=op1*10+4;
        }


        val.innerHTML=op1;
    }
    else {
        
        if(dottii==1&&dcnt==10){
            op2=(op2*10+4)/10;
            dcnt=dcnt*10;
            
        } else if(dottii==1&&dcnt>10){
            op2=op2+4/dcnt;
            dcnt=dcnt*10;
        }else{
            op2=op2*10+4;
        }


        val.innerHTML=op2;
    }

};
function calculate5(){
    
    if(op_val==0){
        
        if(dottii==1&&dcnt==10){
            op1=(op1*10+5)/10;
            dcnt=dcnt*10;
            
        } else if(dottii==1&&dcnt>10){
            op1=op1+5/dcnt;
            dcnt=dcnt*10;
        }else{
            op1=op1*10+5;
        }


        val.innerHTML=op1;
    }
    else {
        
        if(dottii==1&&dcnt==10){
            op2=(op2*10+5)/10;
            dcnt=dcnt*10;
            
        } else if(dottii==1&&dcnt>10){
            op2=op2+5/dcnt;
            dcnt=dcnt*10;
        }else{
            op2=op2*10+5;
        }


        val.innerHTML=op2;
    }


};
function calculate6(){
    
    if(op_val==0){
        
        

        if(dottii==1&&dcnt==10){
            op1=(op1*10+6)/10;
            dcnt=dcnt*10;
            
        } else if(dottii==1&&dcnt>10){
            op1=op1+6/dcnt;
            dcnt=dcnt*10;
        }else{
            op1=op1*10+6;
        }


        val.innerHTML=op1;
    }
    else {
        
        if(dottii==1&&dcnt==10){
            op2=(op2*10+6)/10;
            dcnt=dcnt*10;
            
        } else if(dottii==1&&dcnt>10){
            op2=op2+6/dcnt;
            dcnt=dcnt*10;
        }else{
            op2=op2*10+6;
        }


        val.innerHTML=op2;
    }


};
function calculate7(){
    
       
    if(op_val==0){
        
        if(dottii==1&&dcnt==10){
            op1=(op1*10+7)/10;
            dcnt=dcnt*10;
            
        } else if(dottii==1&&dcnt>10){
            op1=op1+7/dcnt;
            dcnt=dcnt*10;
        }else{
            op1=op1*10+7;
        }


        val.innerHTML=op1;
    }
    else {
        
        if(dottii==1&&dcnt==10){
            op2=(op2*10+7)/10;
            dcnt=dcnt*10;
            
        } else if(dottii==1&&dcnt>10){
            op2=op2+7/dcnt;
            dcnt=dcnt*10;
        }else{
            op2=op2*10+7;
        }


        val.innerHTML=op2;
    }


     


};
function calculate8(){
    

    if(op_val==0){
        
        
        if(dottii==1&&dcnt==10){
            op1=(op1*10+8)/10;
            dcnt=dcnt*10;
            
        } else if(dottii==1&&dcnt>10){
            op1=op1+8/dcnt;
            dcnt=dcnt*10;
        }else{
            op1=op1*10+8;
        }


        val.innerHTML=op1;
    }
    else {
        
        if(dottii==1&&dcnt==10){
            op2=(op2*10+8)/10;
            dcnt=dcnt*10;
            
        } else if(dottii==1&&dcnt>10){
            op2=op2+8/dcnt;
            dcnt=dcnt*10;
        }else{
            op2=op2*10+8;
        }


        val.innerHTML=op2;
    }




};
function calculate9(){
   

    if(op_val==0){
        
        if(dottii==1&&dcnt==10){
            op1=(op1*10+9)/10;
            dcnt=dcnt*10;
            
        } else if(dottii==1&&dcnt>10){
            op1=op1+9/dcnt;
            dcnt=dcnt*10;
        }else{
            op1=op1*10+9;
        }


        val.innerHTML=op1;
    }
    else {
        
        if(dottii==1&&dcnt==10){
            op2=(op2*10+9)/10;
            dcnt=dcnt*10;
            
        } else if(dottii==1&&dcnt>10){
            op2=op2+9/dcnt;
            dcnt=dcnt*10;
        }else{
            op2=op2*10+9;
        }


        val.innerHTML=op2;
    }


};

function dotti(){
    
dottii=1;
dcnt=10;
if(op_val==0){
    
    val.innerHTML=op1+".";
}
else {
    
    val.innerHTML=op2+".";
}

};

function fac(){
    
    op_val=0;
    curr_ans=0;
    op1=0;
    op2=0;
   val.innerHTML=curr_ans;
   dottii=0;
   dcnt=1;
};
function pm(){

    if(op_val==0){
        curr_ans=op1;
    }
    curr_ans=0-curr_ans;
    val.innerHTML=curr_ans;
    op1=curr_ans;
    dottii=0;
    dcnt=1;


};
function percnt(){
    if(op_val==0){
        curr_ans=op1;
    }
    curr_ans=curr_ans/100;
    val.innerHTML=curr_ans;
    op1=curr_ans;
    op2=0;
    dottii=0;
    dcnt=1;
};
function dvd(){
 if(op_val==0){
     oprator='/';
     op_val++;
     

 }else{
     
     op2=0;
     oprator='/';
 }
 
  dottii=0;
  dcnt=1;

};
function multpy(){

    if(op_val==0){
        oprator='*';
        op_val++;
   
    }else{
        //op1=eval(op1+" "+oprator+" "+op2);
        op2=0;
        oprator='*';
    }
    dottii=0;
    dcnt=1;
   

};
function mins(){

    if(op_val==0){
        oprator='-';
        op_val++;
   
    }else{
        //op1=eval(op1+" "+oprator+" "+op2);
        op2=0;
        oprator='-';
    }
    dottii=0;
    dcnt=1;
};

function pls(){
    if(op_val==0){
        oprator='+';
        op_val++;
   
    }else{
        //op1=eval(op1+" "+oprator+" "+op2);
        op2=0;
        oprator='+';
    }
    dottii=0;
    dcnt=1;

};

function equalty(){
  curr_ans=eval(op1+" "+oprator+" "+op2);
  
  op1=curr_ans;
  op2=0;
  val.innerHTML=curr_ans;
  dottii=0;
  dcnt=1;
  

};


