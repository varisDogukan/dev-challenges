const myTeams = [
  {
    id: 1,
    name: 'bill mahoney',
    title: 'product owner',
    url: 'assets/photo1.png',
  },
  {
    id: 2,
    name: 'saba cabrera',
    title: 'art director',
    url: 'assets/photo2.png',
  },
  { id: 3, name: 'shae le', title: 'tech lead', url: 'assets/photo3.png' },
  { id: 4, name: 'skylah lu', title: 'ux designer', url: 'assets/photo4.png' },
  {
    id: 5,
    name: 'griff richards',
    title: 'developer',
    url: 'assets/photo5.png',
  },
  { id: 6, name: 'stan john', title: 'developer', url: 'assets/photo6.png' },
];

const teams = document.querySelector('.teams');

myTeams.map((item) => {
  teams.innerHTML += `
    <div class='card'>
      <div class="img-container">
        <img src=${item.url} alt=${item.name} />
        <p class="title">${item.title}</p>
      </div>
      <p class="name">${item.name}</p>      
    </div>
  `;
});
