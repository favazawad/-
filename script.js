document.getElementById('preference-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const companySize = document.getElementById('company-size').value;
    const features = document.getElementById('features').value;
    const industry = document.getElementById('industry').value;
    const budget = document.getElementById('budget').value;

    const recommendations = getRecommendations(companySize, features, industry, budget);

    const recommendationsSection = document.getElementById('recommendations');
    const recommendationsText = document.getElementById('recommendations-text');
    const recommendationsList = document.getElementById('recommendations-list');

    recommendationsText.textContent = recommendations.length
        ? `بناءً على خياراتك، نوصي بالأنظمة التالية:`
        : `عذرًا، لا توجد أنظمة تناسب خياراتك.`;

    recommendationsList.innerHTML = '';
    recommendations.forEach(system => {
        const li = document.createElement('li');
        li.textContent = system;
        recommendationsList.appendChild(li);
    });

    recommendationsSection.classList.remove('hidden');
});

function getRecommendations(size, feature, industry, budget) {
    const systems = [
        { name: 'النظام المحاسبي المتكامل', budget: '4000-10000' },
        { name: 'دفترة', budget: '4000-10000' },
        { name: 'قيود', budget: '4000-10000' },
        { name: 'إنفو سوفت', budget: '4000-10000' },
        { name: 'أونكس برو', budget: '>10000' },
        { name: 'قيود', budget: '>10000' },
        { name: 'الجزيرة', budget: '>10000' },
        { name: 'الأمين', budget: '>10000' }
    ];

    return systems
        .filter(system => system.budget === budget)
        .map(system => system.name);
}
