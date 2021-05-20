status = ""
object = []

function preload(){
    img = loadImage("teddy.jpg");
}


function setup(){
    canvas = createCanvas(600,600)
    canvas.center()
    objectDetector=ml5.objectDetector('cocossd' , modelLoaded)
    document.getElementById("status").innerHTML = "status : Detecting objects"
}

function modelLoaded(){
    console.log("model is loaded")
    status = true
   objectDetector.detect(img,gotResults)
}


function gotResults(error,results){
 if(error){
     console.error(error);
 }
 else{
     console.log(results)
     object=results
 }
}


function back(){
    window.location="index.html"
}



function draw(){
    image(img,0,0,600,600)
    if (status != "") {
        for (i = 0; i < object.length; i++) {
            document.getElementById("status").innerHTML = "objects detected"

            fill('#00FFFF')
            stroke('#FF0000	')
              percent=floor(object[i].confidence*100)
            text(object[i].label+" "+percent+"%",object[i].x,object[i].y)
            noFill()
            rect(object[i].x,object[i].y,object[i].width,object[i].height)

        }
    }
}