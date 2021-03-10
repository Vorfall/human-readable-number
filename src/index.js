module.exports = function toReadable (number) {
   if(number === 0)
   {
       return "zero"
   }
   if(number === 10)
   {
       return "ten"
   }
   if(number === 11)
   {
       return "eleven"
   }
   if(number === 12)
   {
       return "twelve"
   }
   if(number === 13)
   {
       return "thirteen"
   }
   if(number === 14)
   {
       return "fourteen"
   }
   if(number === 15)
   {
       return "fifteen"
   }
   if(number === 16)
   {
       return "sixteen"
   }
   if(number === 17)
   {
       return "seventeen"
   }
   if(number === 18)
   {
       return "eighteen"
   }
   if(number === 19)
   {
       return "nineteen"
   }


str=""
hundreds=Math.trunc(number/100)
dozens=Math.trunc((number-hundreds*100)/10)
units = number-hundreds*100-dozens*10
if(hundreds===0)
{
    

    if(dozens===0)
    {
        str=Number(units)
    }
    else{
        str=NumberDozens(dozens)+"ty "+Number(units)   
    }
    return str.trim()
}

if(dozens !=1 )
{
    if(dozens !=0 )
    {   
        str = Number(hundreds)+" hundred "+NumberDozens(dozens)+"ty "+Number(units)    
    }
    else{
        str = Number(hundreds)+" hundred "+NumberDozens(dozens)+" "+Number(units)  
    }

}
else{
    if(units===0)
    {
        str = Number(hundreds)+" hundred ten"   
    }
    if(units===1)
    {
        str = Number(hundreds)+" hundred eleven"    
    }
    if(units===2)
    {
        str = Number(hundreds)+" hundred twelve"  
    }
    if(units===3)
    {
        str = Number(hundreds)+" hundred thirteen"   
    }
    if(units===4)
    {
        str = Number(hundreds)+" hundred fourteen"   
    }
    if(units===5)
    {
        str = Number(hundreds)+" hundred fifteen"    
    }
    if(units===6)
    {
        str = Number(hundreds)+" hundred sixteen"   
    }
    if(units===7)
    {
        str = Number(hundreds)+" hundred seventeen"    
    }
    if(units===8)
    {
        str = Number(hundreds)+" hundred eighteen"    
    }
    if(units===9)
    {
        str = Number(hundreds)+" hundred nineteen"
    }
}

newStr=str.replace('  ', ' ');
return newStr.trim()





function Number(num) {
  str=""
switch(num) {

    case 9:  
        str+="nine"  
    break;
    case 8: 
        str+="eight"        
    break;
    case 7:  
        str+="seven"        
    break;
    case 6:  
        str+="six"        
    break;
    case 5:  
        str+="five"        
    break;
    case 4:  
        str+="four"        
    break;
    case 3:  
        str+="three"        
    break;
    case 2:  
        str+="two"        
    break;
    case 1:  
        str+="one"        
    break;        
    default: break;
   
    }
    return(str)
   
}




function NumberDozens(num) {
  str=""
switch(num) {

    case 9:  
        str+="nine"  
    break;
    case 8: 
        str+="eigh"        
    break;
    case 7:  
        str+="seven"        
    break;
    case 6:  
        str+="six"        
    break;
    case 5:  
        str+="fif"        
    break;
    case 4:  
        str+="for"        
    break;
    case 3:  
        str+="thir"        
    break;
    case 2:  
        str+="twen"        
    break;
    case 1:  
        str+="one"        
    break;        
    default: break;
   
    }
    return(str)
   
}


}
