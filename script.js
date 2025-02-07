// SDGs related to sustainable entrepreneurship
const sdgs = [
    {
        number: 8,
        title: "Decent Work and Economic Growth",
        description: "Promoting inclusive and sustainable economic growth, employment, and decent work for all.",
        actions: [
            "Support small businesses by providing fair wages.",
            "Promote entrepreneurship and job creation through sustainable practices.",
            "Reduce inequalities in the workplace and promote diversity."
        ]
    },
    {
        number: 9,
        title: "Industry, Innovation, and Infrastructure",
        description: "Building resilient infrastructure, promoting inclusive and sustainable industrialization, and fostering innovation.",
        actions: [
            "Invest in green technologies and sustainable infrastructure.",
            "Encourage innovation that minimizes waste and reduces carbon emissions.",
            "Support sustainable industrial practices through improved infrastructure."
        ]
    },
    {
        number: 12,
        title: "Responsible Consumption and Production",
        description: "Ensuring sustainable consumption and production patterns.",
        actions: [
            "Adopt circular economy practices to minimize waste.",
            "Design products for durability, repairability, and recycling.",
            "Encourage businesses to reduce their carbon footprint and minimize resource use."
        ]
    },
    {
        number: 13,
        title: "Climate Action",
        description: "Take urgent action to combat climate change and its impacts.",
        actions: [
            "Implement energy-efficient practices in businesses and industries.",
            "Promote the use of renewable energy sources in production processes.",
            "Encourage businesses to reduce greenhouse gas emissions."
        ]
    }
];

// Function to create the SDG cards
const createSdgCard = (sdg) => {
    return `
        <div class="sdg-card" onclick="showSdgDetail(${sdg.number})">
            <h3>SDG ${sdg.number}</h3>
            <p>${sdg.title}</p>
        </div>
    `;
};

// Display the SDGs in a grid format
const displaySdgs = () => {
    const sdgListContainer = document.getElementById("sdg-list");
    sdgListContainer.innerHTML = sdgs.map(createSdgCard).join('');
};

// Display detailed information about a selected SDG
const showSdgDetail = (number) => {
    const sdg = sdgs.find(s => s.number === number);
    const detailContainer = document.getElementById("sdg-detail");
    
    detailContainer.innerHTML = `
        <h2>SDG ${sdg.number}: ${sdg.title}</h2>
        <p><strong>Description:</strong> ${sdg.description}</p>
        <h3>Suggested Actions for Entrepreneurs:</h3>
        <ul>
            ${sdg.actions.map(action => `<li>${action}</li>`).join('')}
        </ul>
    `;
    
    detailContainer.style.display = 'block';
};

// Load the SDGs when the page is opened
window.onload = displaySdgs;
