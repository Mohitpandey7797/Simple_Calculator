//******Unfixed Parameters in function*****

function add(){
    if(arguments.length==0){
        document.write("Not Parameter defined!");
    } 

    else{
        let sum=0;
        for(let i=0;i<arguments.length;i++){
            sum=sum+arguments[i];
        }
        document.write(sum);
    }
}
