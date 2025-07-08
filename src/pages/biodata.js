import React, { useEffect } from "react"
import $ from "jquery"
import { navigate } from "gatsby"
import "../styles/style.css"

const Biodata = () => {
  useEffect(() => {
    $("form").hide().fadeIn(800)

    $("input, select, textarea")
      .on("focus", function () {
        $(this).css("box-shadow", "0 0 8px #007BFF")
      })
      .on("blur", function () {
        $(this).css("box-shadow", "none")
      })

    $("#submit-btn").click(() => {
      const nama = $("#nama").val()
      const tanggalLahir = $("#tanggalLahir").val()
      const gender = $("#gender").val()
      const alamat = $("#alamat").val()
      const hobi = $("#hobi").val()

      if (!nama || !tanggalLahir || !gender || !alamat || !hobi) {
        alert("Isi dulu yang legkap baru bisa di simpan")
        return
      }

      $("form").slideUp(500, () => {
        $("body").append(`
      <div id="hasil" class="hasil-output">
        <h2>Data Biodata Telah Tersimpan</h2>
        <p><strong>Nama Lengkap:</strong> ${nama}</p>
        <p><strong>Tanggal Lahir:</strong> ${tanggalLahir}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Alamat Tempat Tinggal:</strong> ${alamat}</p>
        <p><strong>Hobi atau Minat Pribadi:</strong> ${hobi}</p>
        <button id="kembali-form" class="btn-kembali">Kembali ke Formulir</button>
      </div>
    `)

        $("#hasil").hide().fadeIn(1000)

       
        $("#kembali-form").click(() => {
          $("#hasil").fadeOut(500, () => {
            $("#hasil").remove() 

            
            $("#nama").val("")
            $("#tanggalLahir").val("")
            $("#gender").val("")
            $("#alamat").val("")
            $("#hobi").val("")

            
            $("form").slideDown(600)
          })
        })
      })
    })

    $("#back-btn").click(() => {
      $("form").fadeOut(400, () => {
        navigate("/")
      })
    })
  }, [])

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Formulir Data Pribadi</h1>
      <form>
        <label htmlFor="nama">Nama Lengkap</label>
        <input type="text" id="nama" />

        <label htmlFor="tanggalLahir">Tanggal Lahir</label>
        <input type="date" id="tanggalLahir" />

        <label htmlFor="gender">Jenis Kelamin</label>
        <select id="gender">
          <option value="">-- Pilih Jenis Kelamin --</option>
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>

        <label htmlFor="alamat">Alamat Tempat Tinggal</label>
        <input type="text" id="alamat" />

        <label htmlFor="hobi">Hobi / Minat Pribadi</label>
        <textarea id="hobi" rows="3"></textarea>

        <button type="button" id="submit-btn">
          Simpan
        </button>
        <br />
        <button
          type="button"
          id="back-btn"
          style={{
            marginTop: "1rem",
            backgroundColor: "#6c757d",
            color: "white",
            padding: "0.6rem 1.5rem",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Kembali ke Halaman Utama
        </button>
      </form>
    </div>
  )
}

export default Biodata
