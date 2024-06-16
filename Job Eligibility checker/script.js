function checkEligibility() {
    const educationLevels = document.getElementsByName('education');
    let selectedEducation;
    
    for (const level of educationLevels) {
        if (level.checked) {
            selectedEducation = level.value;
            break;
        }
    }

    let resultText;
    switch (selectedEducation) {
        case 'High school':
        case 'UG':
            resultText = 'You are eligible for the job.';
            break;
        case 'Illiterate':
        case 'PG':
        case 'Doctorate':
            resultText = 'You are not eligible for the job.';
            break;
        default:
            resultText = 'Please select an education level.';
    }

    document.getElementById('result').innerText = resultText;
}
