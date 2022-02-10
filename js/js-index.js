let pengunjung = prompt ('Siapa Nama Kamu ?', '')
if (pengunjung == 0 || pengunjung == '') {
	alert ('Pengunjung Tidak Mengisi Nama / Mengencel Pop Up!!');
} else { 
	alert ('Halo ' + pengunjung + ' Selamat Datang!!\uD83D\uDE00');
}

$(document).ready(function() {
    
    let userEmail = document.getElementById('exampleInputEmail1');
		let userPassw = document.getElementById('exampleInputPassword1');
		let eMail = 'venomous.zach@gmail.com';
	
		$('#daftar3').click(function () {
			if (userEmail.value == eMail && userPassw.value == 'hama') {
			alert ('Anda Telah Berhasil Login');
			} else if (userEmail.value == '' && userPassw.value == '') {
				alert ('Alamat Email dan Password Harus Di Isi!!');
			} else if (userEmail.value == '') {
				alert ('Alamat Email Harus Di Isi!!');
			}	else if (userPassw.value == '') {
				alert ('Password Harus Di Isi!!');
			}	else if (userEmail.value != eMail) {
				alert ('Alamat Email Salah!!');
			}	else if (userPassw.value != 'hama') {
				alert ('Password Anda Salah!!');
			}	else {
				alert ('Silahkan Ulangi!!');
			}
		});

		$('#daftar2').click(function() {
			if (userEmail.value == '' && userPassw.value == '') {
				alert ('Untuk Daftar. Alamat Email dan Password Harus Di Isi!!');
			} else if (userEmail.value == eMail && userPassw.value == 'hama') {
				alert ('Terimakasih Sudah Daftar! Silahkan Login!');
			} else {
				alert ('Silahkan Lengkapi Alamat Email Dan Password!!!');
			}
		})

	});
