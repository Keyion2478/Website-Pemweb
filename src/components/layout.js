import React, { useEffect } from "react"
import $ from "jquery"

const Layout = ({ children }) => {
  useEffect(() => {
    $(document).ready(function () {
      $("#submitBtn").click(function () {
        const nama = $("#nama").val()
        const email = $("#email").val()
        if (nama === "" || email === "") {
          alert("Nama dan Email wajib diisi!")
        } else {
          alert("Data berhasil dikirim!")
        }
      })
    })
  }, [])

  return (
    <main style={{ padding: "20px", fontFamily: "sans-serif" }}>
      {children}
    </main>
  )
}

export default Layout
