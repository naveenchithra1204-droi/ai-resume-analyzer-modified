const dropAreaElement = document.getElementById('drop-area');
const fileInputElement = document.getElementById('actual-file-input');
const fileFeedbackTag = document.getElementById('file-feedback-badge');

function triggerFileBrowsing() {
    fileInputElement.click();
}

function processFileVisualAttachment(inputReference) {
    if (inputReference.files && inputReference.files.length > 0) {
        fileFeedbackTag.innerHTML = `<i class="fa-solid fa-file-code"></i> Structured Asset: <b>${inputReference.files[0].name}</b>`;
        fileFeedbackTag.style.display = 'inline-flex';
    }
}

/* Drag & Drop Visual Event Hooks Mapping */
['dragenter', 'dragover'].forEach(eventName => {
    dropAreaElement.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropAreaElement.classList.add('drag-active');
    }, false);
});

['dragleave', 'drop'].forEach(eventName => {
    dropAreaElement.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropAreaElement.classList.remove('drag-active');
    }, false);
});

dropAreaElement.addEventListener('drop', (e) => {
    const detachedFiles = e.dataTransfer.files;
    if (detachedFiles.length > 0) {
        fileInputElement.files = detachedFiles;
        processFileVisualAttachment(fileInputElement);
    }
});

/* Intelligent Simulation Analytics Core Computation Processor Engine */
function executeClientAnalysis(event) {
    event.preventDefault();

    const textContentPayload = document.getElementById('input-jd').value;
    const loaderWidget = document.getElementById('pipeline-loader');
    const resultWidgetMatrix = document.getElementById('report-view-matrix');

    // Toggle visual state pipelines
    resultWidgetMatrix.style.display = 'none';
    loaderWidget.style.display = 'block';

    // Simulate parsing engine latency
    setTimeout(() => {
        loaderWidget.style.display = 'none';

        // Smart client-side interactive fallback modeling logic
        const genericTechPool = ['Python', 'Cloud Systems', 'Deep Learning', 'SQL Databases', 'TensorFlow', 'REST APIs', 'Git Workflow', 'Agile Models', 'Docker Architecture'];

        // Parse strings to create contextual smart feedback tags matching inputs
        let detectedMatches = genericTechPool.filter(tech => 
            textContentPayload.toLowerCase().includes(tech.toLowerCase())
        );

        // Add random fallbacks if string matches are scarce
        if (detectedMatches.length === 0) {
            detectedMatches = ['Python', 'SQL Databases', 'Git Workflow'];
        }

        const missingGaps = genericTechPool.filter(tech => !detectedMatches.includes(tech));

        // Calculate realistic simulated score matrix index
        const computedScoreIndex = Math.min(100, Math.max(35, (detectedMatches.length * 12) + Math.floor(Math.random() * 20)));

        // Update UI Circular Radial Metrics Vector Charts
        document.getElementById('numeric-percentage-label').innerText = `${computedScoreIndex}%`;
        const customRadialGaugeCircle = document.getElementById('radial-gauge-circle');
        customRadialGaugeCircle.style.background = `radial-gradient(closest-side, var(--card-bg) 78%, transparent 80% 100%), conic-gradient(var(--neon-blue) ${computedScoreIndex}%, rgba(255,255,255,0.06) ${computedScoreIndex}%)`;

        // Render system deficit elements
        const missingContainer = document.getElementById('deficit-keywords-container');
        missingContainer.innerHTML = '';
        missingGaps.slice(0, 4).forEach(keyword => {
            missingContainer.innerHTML += `<li><i class="fa-solid fa-triangle-exclamation"></i> ${keyword}</li>`;
        });

        // Render positive matches array data
        const validatedContainer = document.getElementById('validated-skills-container');
        validatedContainer.innerHTML = '';
        detectedMatches.forEach(skill => {
            validatedContainer.innerHTML += `<li><i class="fa-solid fa-circle-check"></i> ${skill}</li>`;
        });

        // Inject Custom optimization textual parameters dynamic advice
        const strategiesPool = [
            "Integrate measurable impact key results metrics directly under primary experience blocks to optimize structural performance.",
            "Bolster explicit documentation profiles regarding deep learning lifecycle deployments inside current baseline configurations.",
            "Ensure specific technical parameter tags match closely with the target compliance criteria mapping protocols."
        ];
        document.getElementById('dynamic-strategy-text').innerText = strategiesPool[Math.floor(Math.random() * strategiesPool.length)];

        // Show populated results block panel instantly
        resultWidgetMatrix.style.display = 'block';

        // Auto smooth scrolling down directly onto results
        resultWidgetMatrix.scrollIntoView({ behavior: 'smooth' });

    }, 1800); // Realistic pipeline processing look
}
