const article = [
	{
		title: 'Apa Itu Penghijauan',
		content: 'Bisa diartikan bahwa itu adalah sikap untuk memurnikan struktur Tanaman, Pohon & Tumbuhan',
		author: 'Muhammad Hamzah',
		publishedDate: 'Jumát, 08 Oktober 2021',
		image: './img/img-post-title_1.jpg',
		link: './post_1.html',
	},
	{
		title: 'Udara Pegunungan Lebih Segar',
		content: 'Pegunungan menjadi tempat yang dimana udaranya begitu segar, berbeda dengan udara di perkotaan',
		author: 'Muhammad Hamzah',
		publishedDate: 'Jumát, 08 Oktober 2021',
		image: './img/img-post-title_4.jpg',
		link: './post_2.html',
	},
	{
		title: 'Pengaruh Tanah Gembur & Tanaman Subur',
		content: 'Secara fundamental, struktur bumi terbagi menjadi 2 lapisan, yaitu tanah dan air. Bumi hidup karna kedua hal itu masih seimbang susunannya.',
		author: 'Muhammad Hamzah',
		publishedDate: 'Sabtu, 09 Oktober 2021',
		image: './img/img-post-title_3.jpg',
		link: './post_3.html',
	},
	{
		title: 'Manfaat Cahaya Matahari Bagi Tumbuhan',
		content: 'Seluruh makhluk hidup yang ada dibumi memerlukan cahaya matahari untuk kehidupan, begitupun tumbuhan. Untuk tetap berkembang.',
		author: 'Muhammad Hamzah',
		publishedDate: 'Minggu, 10 Oktober 2021',
		image: './img/img-post-title_2.jpg',
		link: './post_4.html',
	},
	{
		title: 'Kurangnya Penghijauan & Polusi Di Perkotaan',
		content: 'Sudah merebak dimana-mana polusi yang sangat mencemari lingkungan. Terlebih lagi penghijauan menjadi sangat jarang bahkan sulit ditemukan.',
		author: 'Muhammad Hamzah',
		publishedDate: 'Selasa, 12 Oktober 2021',
		image: './img/img-post-title_5.jpg',
		link: './post_5.html',
	},
	{
		title: 'Keindahan Pemandangan Yang Sudah Jarang Ditemui',
		content:'Indahnya alam tak bisa kita dustakan. Akan tetapi, zaman sekarang infrastruktur semakin menggila merasuk dalam pegunungan dan perkampungan.',
		author: 'Muhammad Hamzah',
		publishedDate: 'Selasa, 12 Oktober 2021',
		image: './img/img-post-title_6.jpg',
		link: './post_6.html'
	},
];

$(document).ready(function () {
	for (let i = 0; i < article.length; i++) {
		const postPreviewTemplate = `
				<div class="col-xl-6 lnk">
					<div class="card" style="width: 23.5rem;">
						<img src="${article[i].image}" class="card-img-top" alt="Greening Images">
						<div class="card-body">
							<h5 class="card-title">${article[i].title}</h5>
							<p class="card-text">${article[i].content}</p>
							<div class="pblsh"><p>${article[i].publishedDate}</p></div>
							<a href="${article[i].link}" class="btn btn-primary"> Baca Lebih Lanjut</a>
						</div>
					</div>
				</div>
		`;

		$("#preview-post .preview-post-row").append(postPreviewTemplate);
	} 
	console.log(article.length);
})

