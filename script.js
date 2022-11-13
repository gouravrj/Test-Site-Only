function toggleItalics(ele){
    ele.classList.toggle('active')
    let text = document.getElementById("input").value
    document.getElementById("output").classList.toggle("italics")
    document.getElementById("output").innerText = text
}
function toggleBold(ele){
    ele.classList.toggle('active')
    let text = document.getElementById("input").value
    document.getElementById("output").classList.toggle("bold")
    document.getElementById("output").innerText = text
}
function toggleUnderline(ele){
    ele.classList.toggle('active')
    let text = document.getElementById("input").value
    document.getElementById("output").classList.toggle("underline")
    document.getElementById("output").innerText = text
}

function updateText(){
    let textarea_text = document.getElementById("input").value
    document.getElementById("output").innerText = textarea_text
}
function toggleH(ele,size)
{
    if(size==='0')
    {
        document.getElementById("output").classList.remove('fs-1','fs-2')
        var yo = document.querySelectorAll(".h")
        for(let i=0;i<yo.length;i++)
            yo[i].classList.remove('active')
        return
    }
    var yo = document.querySelectorAll(".h")
    for(let i=0;i<yo.length;i++)
        yo[i].classList.remove('active')
    ele.classList.add('active')
    document.getElementById("output").classList.remove('fs-1','fs-2')
    var class_name = `fs-${size}`
    document.getElementById("output").classList.add(class_name)

}
function align(ele,yo){

    if(yo==='default')
    {

        document.getElementById("output").classList.remove('text-left','text-right','text-center')
        var button_list = document.querySelectorAll(".align")
        for(let i=0;i<button_list.length;i++)
            button_list[i].classList.remove('active');
        return
    }
    var button_list = document.querySelectorAll(".align")
    for(let i=0;i<button_list.length;i++)
        button_list[i].classList.remove('active');
    ele.classList.add('active')
    document.getElementById("output").classList.remove('text-left','text-right','text-center')
    var class_name = `text-${yo}`
    document.getElementById("output").classList.add(class_name)
}


