function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value) / 100; // Konversi tinggi ke meter
        
    if (!isNaN(weight) && !isNaN(height)) {
        var bmi = weight / (height * height);
        var result = "BMI Anda adalah: " + bmi.toFixed(2);

        if (bmi < 18.5) {
            result += " (Kurus) Kurus adalah kondisi tubuh dengan berat badan lebih rendah dari berat badan ideal. Penyebabnya bisa genetik, pola makan, aktivitas fisik, atau faktor medis/psikologis. Kurus dapat berdampak pada kesehatan, seperti penurunan energi, risiko gangguan makan, dan masalah kesehatan lainnya. Konsultasi dengan dokter, tingkatkan asupan makanan, pilih makanan bergizi, berolahraga, hindari makanan kosong, kelola stres, dan perawatan medis jika diperlukan.";
        } else if (bmi < 24.9) {
            result += " (Normal) Berat badan ideal. Jaga terus kondisi tubuhmu untuk tetap sehat selalu.";
        } else if (bmi < 29.9) {
            result += " (Gemuk) Gemuk adalah istilah yang mengacu pada kondisi tubuh seseorang yang memiliki berat badan yang jauh melebihi berat badan ideal atau sehat. Kondisi ini sering kali ditandai oleh akumulasi lemak tubuh yang berlebihan dan dapat meningkatkan risiko terhadap masalah kesehatan seperti obesitas, diabetes, dan penyakit jantung. Cara menghadapi kegemukan: Makan sehat, berolahraga, konsultasi dokter, tingkatkan kesadaran diri, dukungan sosial, ubah gaya hidup.";
        } else {
            result += " (Obesitas) Obesitas adalah kondisi kesehatan yang ditandai oleh penumpukan lemak tubuh yang berlebihan. Ini meningkatkan risiko berbagai masalah kesehatan seperti penyakit jantung, diabetes, dan gangguan lainnya. Cara menghadapi obesitas melibatkan perubahan gaya hidup yang berkelanjutan. Ini termasuk makan sehat dengan membatasi kalori dan makanan tinggi lemak, berolahraga secara teratur untuk membakar kalori, dan sangat penting untuk mencari bantuan dari dokter atau ahli gizi dalam merencanakan program penurunan berat badan yang aman dan efektif.";
        }

        document.getElementById("result").innerHTML = result;
    } else {
        document.getElementById("result").innerHTML = "Masukkan berat badan dan tinggi badan yang valid.";
    }
}