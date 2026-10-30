<script>

const form = document.getElementById("formPesanan");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const data = {
        nama: document.getElementById("nama").value,
        email: document.getElementById("email").value,
        produk: document.getElementById("pesanan").value,
        pesan: document.getElementById("payment").value
    };

    await fetch(
        "AKfycbw0BFNIyFbOVM-tjJ8OM_0vL-Nom0njJs372XIiL9A",
        {
            method: "Kirim Pesan",
            body: JSON.stringify(data)
        }
    );

    alert("Pesanan berhasil dikirim!");

    form.reset();
});

</script>