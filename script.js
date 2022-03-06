var i=0;
var arr=Array();

function add_element(){
    arr[i]=document.getElementById("txt_in").value;
    alert("Added " + "arr[" +i +"]=" + arr[i]);
    i++;
    document.getElementById("txt_in").value="";
}

function sp(i, j){
    let swp=arr[i];
    arr[i]=arr[j];
    arr[j]=swp;
}

function shuffle_array(){
    let n=arr.length;
    for(let i=0;i<n-1;i++){
        if(i%2==0 && Number(arr[i])>=Number(arr[i+1])){
            sp(i, i+1);
        }
        else if(i%2==1 && Number(arr[i])<=Number(arr[i+1])){
            sp(i, i+1);
        }
    }
}

function print_array(){
    let res1="";
    let line1="Your Input Array - ";
    for(let i=0;i<arr.length;i++){
        res1+=" " + arr[i];
    }
    document.getElementById("print_array").innerHTML=line1+res1;
    shuffle_array();
    let space="<hr/>";
    let res2="";
    let line2="After Shuffle - ";
    for(let i=0;i<arr.length;i++){
        res2+=" " + arr[i];
    }
    document.getElementById("shuffle_array").innerHTML=space+line2+res2;
}