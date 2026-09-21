const brandData = {
  bmw: {
    name: 'BMW', tagline: 'The ultimate driving machine', models: ['3 Series', '5 Series', '7 Series', 'M2', 'M3', 'M4', 'M5', 'X3', 'X5', 'X7', 'i4', 'i5', 'i7'], prices: ['$42,300', '$59,000', '$90,000', '$64,900', '$76,100', '$80,100', '$120,000', '$49,600', '$66,300', '$83,600', '$57,900', '$67,100', '$105,700']
  },
  ferrari: {
    name: 'Ferrari', tagline: 'Born to race, built to inspire', models: ['296 GTB', '296 GTS', 'Roma', 'Roma Spider', 'SF90 Stradale', 'SF90 Spider', '12Cilindri', 'Purosangue', '812 Superfast', 'F8 Tributo', '488 Pista', 'Daytona SP3', 'Monza SP2'], prices: ['$338,000', '$366,000', '$247,000', '$280,000', '$528,000', '$578,000', '$423,000', '$398,000', '$430,000', '$276,000', '$345,000', '$2,250,000', '$1,750,000']
  },
  mercedes: {
    name: 'Mercedes-Benz', tagline: 'The best or nothing', models: ['A-Class', 'C-Class', 'E-Class', 'S-Class', 'EQS', 'EQE', 'CLA', 'CLE Coupe', 'AMG GT', 'AMG SL', 'GLA', 'GLE', 'G-Class'], prices: ['$36,000', '$48,000', '$63,000', '$118,000', '$104,400', '$74,900', '$44,000', '$56,000', '$138,000', '$141,000', '$40,000', '$63,000', '$149,000']
  },
  lamborghini: {
    name: 'Lamborghini', tagline: 'Expect the unexpected', models: ['Revuelto', 'Temerario', 'Urus SE', 'Urus S', 'Urus Performante', 'Huracan Tecnica', 'Huracan STO', 'Huracan Sterrato', 'Aventador SVJ', 'Countach LPI 800-4', 'Sian FKP 37', 'Essenza SCV12', 'Veneno'], prices: ['$608,000', '$357,000', '$258,000', '$238,000', '$276,000', '$240,000', '$334,000', '$278,000', '$517,000', '$2,640,000', '$3,600,000', '$2,500,000', '$4,500,000']
  },
  audi: {
    name: 'Audi', tagline: 'Vorsprung durch Technik', models: ['A3', 'A4', 'A5', 'A6', 'A8', 'Q3', 'Q5', 'Q7', 'Q8', 'e-tron GT', 'Q4 e-tron', 'RS 6 Avant', 'R8'], prices: ['$36,600', '$42,000', '$47,000', '$58,000', '$90,000', '$39,800', '$45,300', '$60,500', '$74,800', '$106,500', '$50,800', '$125,800', '$158,600']
  },
  tesla: {
    name: 'Tesla', tagline: 'Electric for everyone', models: ['Model 3', 'Model Y', 'Model S', 'Model X', 'Cybertruck', 'Roadster', 'Model 3 Performance', 'Model Y Performance', 'Model S Plaid', 'Model X Plaid', 'Semi', 'Model 3 Long Range', 'Model Y Long Range'], prices: ['$42,490', '$44,990', '$79,990', '$99,990', '$79,990', '$200,000', '$54,990', '$54,990', '$94,990', '$104,990', '$150,000', '$47,490', '$49,990']
  },
  toyota: {
    name: 'Toyota', tagline: 'Let's go places', models: ['Corolla', 'Camry', 'Crown', 'Prius', 'GR86', 'GR Corolla', 'GR Supra', 'RAV4', 'Highlander', 'Land Cruiser', 'Tacoma', 'Tundra', 'bZ4X'], prices: ['$22,325', '$28,400', '$41,445', '$27,950', '$30,395', '$36,500', '$56,100', '$31,900', '$40,000', '$56,450', '$32,000', '$40,000', '$43,070']
  },
  mclaren: {
    name: 'McLaren', tagline: 'Fearlessly forward', models: ['750S', '750S Spider', 'Artura', 'Artura Spider', '765LT', '720S', 'GT', 'Elva', 'Senna', 'Senna GTR', 'Speedtail', 'P1', 'F1'], prices: ['$324,000', '$350,000', '$249,000', '$257,000', '$382,000', '$299,000', '$208,000', '$1,700,000', '$1,050,000', '$1,700,000', '$2,250,000', '$1,350,000', '$20,000,000']
  }
};

const themes = {
  bmw: { bg: '#080a0c', panel: '#121820', line: '#2c4256', accent: '#4da3ff', soft: '#a8b8c8' },
  ferrari: { bg: '#100809', panel: '#211012', line: '#542124', accent: '#e53935', soft: '#d5a3a3' },
  mercedes: { bg: '#0b0d0e', panel: '#171b1c', line: '#41484a', accent: '#d2b36c', soft: '#b9c0c0' },
  lamborghini: { bg: '#080909', panel: '#17170f', line: '#4c451a', accent: '#f1c40f', soft: '#c9c29b' },
  audi: { bg: '#0b0d10', panel: '#171b20', line: '#3c454f', accent: '#e84a3c', soft: '#b7c0ca' },
  tesla: { bg: '#070b0d', panel: '#101b20', line: '#244450', accent: '#45c8df', soft: '#a8c5cc' },
  toyota: { bg: '#090d16', panel: '#131b2a', line: '#304768', accent: '#e34a45', soft: '#b2bfd2' },
  mclaren: { bg: '#100b07', panel: '#21150d', line: '#5b3b1d', accent: '#ff8738', soft: '#d2b18f' }
};

const specData = {
  bmw: [['255','5.6s','155 mph'],['255','5.9s','155 mph'],['375','4.9s','155 mph'],['473','4.1s','155 mph'],['473','3.9s','155 mph'],['503','3.8s','155 mph'],['617','3.0s','155 mph'],['255','6.0s','155 mph'],['375','4.6s','155 mph'],['375','4.5s','155 mph'],['335','5.5s','155 mph'],['593','3.7s','155 mph'],['536','4.6s','155 mph']],
  ferrari: [['819','2.9s','205 mph'],['819','2.9s','205 mph'],['612','3.4s','199 mph'],['612','3.4s','199 mph'],['986','2.0s','211 mph'],['986','2.0s','211 mph'],['819','2.9s','211 mph'],['715','3.3s','193 mph'],['789','2.9s','211 mph'],['710','2.9s','211 mph'],['711','2.8s','211 mph'],['829','2.9s','211 mph'],['799','2.9s','186 mph']],
  mercedes: [['188','7.1s','149 mph'],['255','5.8s','155 mph'],['255','5.8s','155 mph'],['442','4.3s','155 mph'],['443','4.0s','130 mph'],['402','4.5s','130 mph'],['221','6.3s','155 mph'],['255','5.8s','155 mph'],['577','3.1s','196 mph'],['577','3.8s','191 mph'],['221','7.2s','130 mph'],['375','5.3s','155 mph'],['577','4.2s','149 mph']],
  lamborghini: [['1001','2.5s','217 mph'],['907','2.7s','213 mph'],['789','3.4s','190 mph'],['657','3.5s','189 mph'],['657','3.3s','190 mph'],['631','2.9s','202 mph'],['631','2.8s','193 mph'],['601','3.4s','162 mph'],['759','2.8s','217 mph'],['803','2.8s','221 mph'],['808','2.8s','220 mph'],['818','2.7s','220 mph'],['750','2.8s','221 mph']],
  audi: [['201','6.0s','130 mph'],['201','6.0s','130 mph'],['261','5.7s','155 mph'],['335','5.0s','155 mph'],['335','5.6s','155 mph'],['201','7.1s','130 mph'],['261','5.7s','155 mph'],['335','5.7s','130 mph'],['335','5.5s','155 mph'],['637','2.8s','155 mph'],['295','5.0s','112 mph'],['621','3.3s','190 mph'],['602','3.1s','205 mph']],
  tesla: [['394','4.0s','125 mph'],['384','4.8s','135 mph'],['670','3.1s','200 mph'],['670','3.8s','155 mph'],['845','2.6s','130 mph'],['1000','under 2.0s','250 mph'],['510','3.1s','162 mph'],['455','3.5s','155 mph'],['1020','1.99s','200 mph'],['1020','2.5s','155 mph'],['900','electric truck','300 mi'],['363','4.9s','145 mph'],['384','4.8s','135 mph']],
  toyota: [['169','8.1s','115 mph'],['225','7.4s','135 mph'],['264','5.7s','130 mph'],['194','7.2s','112 mph'],['228','6.1s','140 mph'],['300','5.0s','143 mph'],['382','3.9s','155 mph'],['203','8.0s','117 mph'],['265','7.3s','130 mph'],['326','7.0s','108 mph'],['278','7.0s','115 mph'],['389','6.6s','130 mph'],['214','6.7s','99 mph']],
  mclaren: [['740','2.7s','206 mph'],['740','2.8s','206 mph'],['671','3.0s','205 mph'],['671','2.8s','205 mph'],['755','2.1s','205 mph'],['710','2.9s','212 mph'],['612','3.1s','203 mph'],['804','2.8s','200 mph'],['814','2.8s','208 mph'],['814','2.5s','208 mph'],['1035','2.9s','250 mph'],['903','2.8s','217 mph'],['618','3.2s','243 mph']]
};

const featureData = {
  bmw: ['Driving dynamics', 'Precision design', 'Adaptive suspension', 'Connected drive'],
  ferrari: ['Racing heritage', 'V12 expertise', 'Carbon construction', 'Italian design'],
  mercedes: ['Luxury comfort', 'Advanced safety', 'AMG performance', 'Digital cockpit'],
  lamborghini: ['Hybrid performance', 'Striking design', 'Carbon technology', 'All-wheel drive'],
  audi: ['Quattro traction', 'Digital innovation', 'Premium cabin', 'RS performance'],
  tesla: ['Electric powertrain', 'Over-the-air updates', 'Autopilot technology', 'Long-range battery'],
  toyota: ['Toyota reliability', 'Hybrid efficiency', 'Safety Sense', 'Everyday versatility'],
  mclaren: ['Carbon fibre', 'Low-weight engineering', 'Motorsport DNA', 'Active aerodynamics']
};

const config = brandData[document.body.dataset.brand];
if (config) {
  const theme = themes[document.body.dataset.brand];
  document.body.style.background = theme.bg;
  document.body.style.color = '#f5f5f2';
  document.body.style.setProperty('--brand-accent', theme.accent);
  const themeStyle = document.createElement('style');
  themeStyle.textContent = `
    body { background: ${theme.bg} !important; color: #f5f5f2 !important; }
    nav { background: ${theme.bg}ee !important; }
    .hero { background: linear-gradient(135deg, ${theme.panel}, ${theme.bg}) !important; }
    .hero h1 span, .section-title h2 span, .heritage-text h2 span { color: ${theme.accent} !important; }
    .hero p, .section-title p, .car-subtitle, .heritage-text p, .stat-item p, .footer-column ul li a { color: ${theme.soft} !important; }
    .cta-button, .car-price, .car-category, .car-facts h4, .stat-item h3 { color: ${theme.accent} !important; }
    .cta-button, .view-details { background: ${theme.accent} !important; border-color: ${theme.accent} !important; color: #080909 !important; }
    .cta-button:hover, .view-details:hover { background: #f5f5f2 !important; border-color: #f5f5f2 !important; color: ${theme.bg} !important; }
    .car-card { background: ${theme.panel} !important; border-color: ${theme.line} !important; }
    .car-card:hover { box-shadow: 0 20px 40px ${theme.accent}33 !important; }
    .car-facts, .stats-section { background: ${theme.bg} !important; }
    .car-facts { border: 1px solid ${theme.line} !important; }
    .feature-tag { background: ${theme.panel} !important; border-color: ${theme.line} !important; color: ${theme.soft} !important; }
    .feature-tag.highlight { background: ${theme.accent}22 !important; border-color: ${theme.accent} !important; color: ${theme.accent} !important; }
    footer { background: ${theme.bg} !important; border-color: ${theme.line} !important; }
    .footer-column h4, .footer-bottom { color: ${theme.soft} !important; }
  `;
  document.head.appendChild(themeStyle);
  const description = document.querySelector('meta[name="description"]') || document.head.appendChild(Object.assign(document.createElement('meta'), { name: 'description' }));
  description.content = `${config.name} model guide with current vehicles, performance highlights, design DNA, and range overview.`;
  document.title = `${config.name} - The Soul of Performance`;
  document.querySelector('.logo').textContent = config.name.toUpperCase();
  document.querySelector('.hero h1').innerHTML = `The Soul of a <span>${config.name}</span>`;
  document.querySelector('.hero p').textContent = config.tagline;
  document.querySelector('.section-title h2').textContent = `${config.name} Models`;
  document.querySelector('.section-title p').textContent = `Explore the complete ${config.name} range, from everyday icons to track-bred performance cars`;
  document.querySelectorAll('.section-title')[1].querySelector('h2').textContent = `Why ${config.name}`;
  document.querySelectorAll('.section-title')[1].querySelector('p').textContent = `What sets ${config.name} apart from every other manufacturer`;
  document.querySelector('.heritage-text h2').innerHTML = `${config.name} <span>DNA</span>`;
  document.querySelector('.heritage-text p').textContent = `${config.name} combines design, engineering, and performance across every model in its range.`;
  document.querySelectorAll('.heritage-text p')[1].textContent = `Every ${config.name} is shaped around a clear idea: purposeful design with technology that earns its place.`;
  document.querySelectorAll('.heritage-text p')[2].textContent = `From compact daily drivers to flagship performance machines, the range carries the character of ${config.name}.`;
  document.querySelectorAll('.car-card').forEach((card, index) => {
    const model = config.models[index];
    card.querySelector('.car-name').textContent = model;
    card.querySelector('.car-category').textContent = index < 4 ? 'Performance' : index < 8 ? 'Core Range' : 'Premium Range';
    card.querySelector('.car-subtitle').textContent = `${config.name} ${model} — engineered for the road ahead`;
    card.querySelector('.car-price').textContent = `Est. from ${config.prices[index] || 'Price on request'}`;
    const specs = (specData[document.body.dataset.brand] || [])[index] || ['N/A', 'N/A', 'N/A'];
    const specItems = card.querySelectorAll('.spec');
    const specLabels = ['HP', '0-60 mph', specs[2].includes('mi') ? 'Range' : 'Top speed'];
    specItems.forEach((item, specIndex) => {
      item.querySelector('.spec-value').textContent = specs[specIndex];
      item.querySelector('.spec-label').textContent = specLabels[specIndex];
    });
    card.querySelectorAll('.feature-tag').forEach((tag, featureIndex) => {
      tag.textContent = (featureData[document.body.dataset.brand] || [`${config.name} engineering`])[featureIndex % 4];
    });
    card.querySelectorAll('.car-facts li').forEach((item, factIndex) => {
      item.textContent = [`Distinctive ${config.name} design language`, 'Advanced engineering meets everyday usability', 'Built for confident performance in every drive', `A defining model in the ${config.name} range`][factIndex];
    });
  });
  document.querySelector('.footer-column h4').textContent = `${config.name} Models`;
  document.querySelectorAll('.footer-column:first-child a').forEach((link, index) => {
    link.textContent = config.models[index] || `${config.name} range`;
  });
  document.querySelectorAll('footer a').forEach(link => {
    if (/Porsche|911|Taycan|Cayenne|Macan|Panamera|718/.test(link.textContent)) link.textContent = config.name;
  });
}
