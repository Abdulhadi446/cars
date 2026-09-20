const brandData = {
  bmw: {
    name: 'BMW', tagline: 'The ultimate driving machine', models: ['3 Series', '5 Series', '7 Series', 'M2', 'M3', 'M4', 'M5', 'X3', 'X5', 'X7', 'i4', 'i5', 'i7'],
    images: ['1607853554439-0069ec0f29b6','1603189617530-6d32306f57c5','1594051673969-172a6f721d3c','1600268330186-76564be81357','1549399542-7e3f8b79c341','1555215695-3004980ad54e','1570356528233-b442cf2de345','1612545667889-b061512d0dfa','1556189250-72ba954cfc2b','1603189661342-e45f1374f890','1606664515524-ed2f786a0bd6','1617195920950-1145bf9a9c72','1580273916550-e323be2ae537','1611651338412-8403fa6e3599']
  },
  ferrari: {
    name: 'Ferrari', tagline: 'Born to race, built to inspire', models: ['296 GTB', '296 GTS', 'Roma', 'Roma Spider', 'SF90 Stradale', 'SF90 Spider', '12Cilindri', 'Purosangue', '812 Superfast', 'F8 Tributo', '488 Pista', 'Daytona SP3', 'Monza SP2'],
    images: ['1592198084033-aade902d1aae','1614200187524-dc4b892acf16','1597687210367-a4915552d886','1614200179396-2bdb77ebf81b','1503736334956-4c8f8e92946d','1610847499832-918a1c3c6811','1610388558394-974601045c25','1597687190402-bd767ac2ce81','1617654112368-307921291f42','1503376780353-7e6692767b70','1580274455191-1c62238fa333','1614162692292-7ac56d7f7f1e','1658863567312-fcaf9a15bc6f','1687815529363-846223d93c55']
  },
  mercedes: {
    name: 'Mercedes-Benz', tagline: 'The best or nothing', models: ['A-Class', 'C-Class', 'E-Class', 'S-Class', 'EQS', 'EQE', 'CLA', 'CLE Coupe', 'AMG GT', 'AMG SL', 'GLA', 'GLE', 'G-Class'],
    images: ['1624085568108-36410cfe4d24','1608994751987-e647252b1fd9','1563694983011-6f4d90358083','1546518071-fddcdda7580a','1619551734325-81aaf323686c','1609703048009-d3576872b32c','1596321687344-547d323f094a','1612368801878-ab107b75bb77','1590316536591-92ba019a7b50','1599912027765-a69c78bfa3aa','1714873383875-58cb3fa5f5e1','1564705604164-90e6b60ad7cc','1570733577524-3a047079e80d','1615228939096-9ead6c74008e']
  },
  lamborghini: {
    name: 'Lamborghini', tagline: 'Expect the unexpected', models: ['Revuelto', 'Temerario', 'Urus SE', 'Urus S', 'Urus Performante', 'Huracan Tecnica', 'Huracan STO', 'Huracan Sterrato', 'Aventador SVJ', 'Countach LPI 800-4', 'Sian FKP 37', 'Essenza SCV12', 'Veneno'],
    images: ['1511919884226-fd3cad34687c','1519245659620-e859806a8d3b','1570294646112-27ce4f174e38','1532581140115-3e355d1ed1de','1621285853634-713b8dd6b5fd','1593219535889-7873a100874a','1618846446712-a4eda2adc05f','1620288627223-53302f4e8c74','1571607388263-1044f9ea01dd','1615394695852-da39a8df9bf1','1623659248894-1a0272243054','1508974576580-36a2f92ad3bc','1577473403731-a36ec9087f44','1617335692042-7a3779b8e050']
  },
  audi: {
    name: 'Audi', tagline: 'Vorsprung durch Technik', models: ['A3', 'A4', 'A5', 'A6', 'A8', 'Q3', 'Q5', 'Q7', 'Q8', 'e-tron GT', 'Q4 e-tron', 'RS 6 Avant', 'R8'],
    images: ['1561924563-d9ad0f32b23f','1616422285623-13ff0162193c','1610880846497-7257b23f6138','1502161254066-6c74afbf07aa','1555652736-e92021d28a10','1632707494078-165805600ffc','1625428883708-d8e14ab407ae','1536150794560-43f988aec18e','1566274360936-69fae8dc1d95','1613921568536-555645be4032','1606664515524-ed2f786a0bd6','1617195920950-1145bf9a9c72','1612545667889-b061512d0dfa','1536700503339-1e4b06520771']
  },
  tesla: {
    name: 'Tesla', tagline: 'Electric for everyone', models: ['Model 3', 'Model Y', 'Model S', 'Model X', 'Cybertruck', 'Roadster', 'Model 3 Performance', 'Model Y Performance', 'Model S Plaid', 'Model X Plaid', 'Semi', 'Powerwall', 'Robotaxi'],
    images: ['1620891549027-942fdc95d3f5','1571987502227-9231b837d92a','1560958089-b8a1929cea89','1617704548623-340376564e68','1536700503339-1e4b06520771','1561580125-028ee3bd62eb','1553260202-d1f2ce03298b','1676945009341-4bb62b036653','1453491945771-a1e904948959','1700840439827-4d9154c8b7e6','1615050964200-64e5402f95cb','1619317214850-7d361bdff9e4','1620891498795-a92bda5822b4','1695068515364-4cbc13e91e7f']
  },
  toyota: {
    name: 'Toyota', tagline: 'Let’s go places', models: ['Corolla', 'Camry', 'Crown', 'Prius', 'GR86', 'GR Corolla', 'GR Supra', 'RAV4', 'Highlander', 'Land Cruiser', 'Tacoma', 'Tundra', 'bZ4X'],
    images: ['1638618164682-12b986ec2a75','1624951352908-3579b7df9c05','1623869675781-80aa31012a5a','1654688554491-69d21d38fb91','1581862142388-23e1c52ca091','1628578748111-09f0b9ff9827','1613859492095-85d9944f09f6','1624578571415-09e9b1991929','1549399542-7e3f8b79c341','1555215695-3004980ad54e','1603189617530-6d32306f57c5','1600268330186-76564be81357','1560958089-b8a1929cea89','1626072557464-90403d788e8d']
  },
  mclaren: {
    name: 'McLaren', tagline: 'Fearlessly forward', models: ['750S', '750S Spider', 'Artura', 'Artura Spider', '765LT', '720S', 'GT', 'Elva', 'Senna', 'Senna GTR', 'Speedtail', 'P1', 'F1'],
    images: ['1621615578530-cbf3c443165f','1516298252535-cf2ac5147f9b','1617335692042-7a3779b8e050','1728522298299-bf2476f378f1','1533416784636-2b0ccfea6b97','1616453902318-70334c1b1c8a','1615394695852-da39a8df9bf1','1508974576580-36a2f92ad3bc','1577473403731-a36ec9087f44','1672639142974-0bf962042a49','1656376050569-908d664944e9','1665675517371-83fda6727ff6','1532581140115-3e355d1ed1de','1592199299806-e7349699f6a9']
  }
};

const config = brandData[document.body.dataset.brand];
if (config) {
  document.body.style.setProperty('--hero-image', `url("https://images.unsplash.com/photo-${config.images[0]}?w=1920&auto=format&fit=crop")`);
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
  document.querySelector('.heritage-image').src = `https://images.unsplash.com/photo-${config.images[13]}?w=800&auto=format&fit=crop`;
  document.querySelector('.heritage-image').alt = `${config.name} heritage vehicle`;
  document.querySelectorAll('.car-card').forEach((card, index) => {
    const model = config.models[index];
    const image = config.images[index];
    card.querySelector('.car-image').src = `https://images.unsplash.com/photo-${image}?w=800&auto=format&fit=crop`;
    card.querySelector('.car-image').alt = `${config.name} ${model}`;
    card.querySelector('.car-name').textContent = model;
    card.querySelector('.car-category').textContent = index < 4 ? 'Performance' : index < 8 ? 'Core Range' : 'Premium Range';
    card.querySelector('.car-subtitle').textContent = `${config.name} ${model} — engineered for the road ahead`;
    card.querySelector('.car-price').textContent = 'Explore configuration';
    card.querySelectorAll('.car-facts li').forEach((item, factIndex) => {
      item.textContent = [`Distinctive ${config.name} design language`, 'Advanced engineering meets everyday usability', 'Built for confident performance in every drive', `A defining model in the ${config.name} range`][factIndex];
    });
  });
  document.querySelector('.footer-column h4').textContent = `${config.name} Models`;
  document.querySelectorAll('.footer-column:first-child a').forEach((link, index) => {
    link.textContent = config.models[index];
  });
}
