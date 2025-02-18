async function loadModel() {
    try {
        const modelUrl = 'https://raw.githubusercontent.com/viswa9308/viswa/main/model/model.json';
        console.log("Loading model from:", modelUrl);

        const model = await tf.loadGraphModel(modelUrl);
        console.log("Model Loaded Successfully:", model);
        
        document.getElementById('prediction').innerText = "Model Loaded Successfully!";
    } catch (error) {
        console.error("Error loading model:", error);
        document.getElementById('prediction').innerText = "Failed to load model!";
    }
}

loadModel();

