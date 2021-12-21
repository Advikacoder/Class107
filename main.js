function tartClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifer = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/DykJ8tPX3/model.json', modelReady);
}

function modelReady(){
    classifer.classify(gotResults);
}