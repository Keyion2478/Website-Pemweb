import React, { useEffect } from "react"
import { Link } from "gatsby"
import $ from "jquery"
import "../styles/style.css"

const HomePage = () => {
  useEffect(() => {
    $(".homepage-container").hide().fadeIn(800)
  }, [])

  return (
    <div className="halaman-utama">
      <h1 className="judul-home">Selamat Datang di Website Biodata</h1>
      <p className="deskripsi-home">
        Website ini dibuat sebagai bagian dari proyek presentasi yang Mengisikan
        biodata pribadi. Silakan klik tombol di bawah ini untuk mengakses
        formulir pengisian biodata.
      </p>

      <Link to="/biodata">
        <button className="tombol-lanjut">Masuk ke Formulir</button>
      </Link>

      <p>&copy; Kelompok 2</p>
    </div>
    
    
  )
}

export default HomePage
