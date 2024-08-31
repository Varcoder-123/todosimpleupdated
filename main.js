
let modifiyingcontent = null;

function add(){
    const input_list = document.getElementById("listvals")
    const input_val = document.getElementById("inputval")
    if(modifiyingcontent){
        const subpart = modifiyingcontent.querySelector("label")
        subpart.innerHTML = input_val.value
        modifiyingcontent = null
    }
    else{
    if(input_val.value.trim()===''){
        alert("Need to insert the data")
    }
    else{
        let subcon = document.createElement("div")
        subcon.className = "divcon";

        let divinput = document.createElement("input")
        divinput.className = "divcheckbox"
        divinput.type = "checkbox"
        divinput.onchange = function(){
            if(divinput.checked){
                subcon.classList.add("marked")
            }else{
                subcon.classList.remove("marked")
            }
        }

        let divlabel = document.createElement("label")
        divlabel.innerHTML = input_val.value

        let devdel = document.createElement("button")
        devdel.innerHTML = "delete"
        devdel.onclick = function(){
        subcon.appendChild(divinput);
            input_list.removeChild(subcon)
        }

        let devedi = document.createElement("button")
        devedi.className = "edit"
        devedi.innerHTML = "edit"
        devedi.onclick = function(){
        input_val.value = divlabel.innerHTML
        modifiyingcontent = subcon
        divinput.checked = false;
        subcon.classList.remove("marked")
        }

        subcon.appendChild(divinput);
        subcon.appendChild(divlabel);
        subcon.appendChild(devdel)
        subcon.appendChild(devedi)

        input_list.appendChild(subcon)
        input_val.value = ""

    }
}
}