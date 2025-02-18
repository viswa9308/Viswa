async function loadModel() {
    try {
        // Replace 'your-username' and 'your-repository-name' with your actual GitHub details
        const modelUrl = 'https://raw.githubusercontent.com/viswa9308/viswa/main/model/model.json';

        console.log("Loading model from:", modelUrl);
        
        // Load the TensorFlow.js model
        const model = await tf.loadGraphModel(modelUrl);
        
        document.getElementById('prediction').innerText = "Model Loaded Successfully!";
        
        console.log("Model Loaded:", model);
    } catch (error) {
        console.error("Error loading model:", error);
        document.getElementById('prediction').innerText = "Failed to load model!";
    }
}

// Run the function when the page loads
loadModel();
