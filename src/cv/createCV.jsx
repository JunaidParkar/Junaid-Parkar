export const createCV = (e) => {
    e.preventDefault()
    let cv = "https://firebasestorage.googleapis.com/v0/b/junaidparkar-f7e41.appspot.com/o/Resume%20-%20Junaid%20Parkar.pdf?alt=media&token=8835a183-ed78-4ebc-91d9-26ada2e4157f"
    let file = new Blob([cv], { type: 'application/pdf' })
    let url = window.URL.createObjectURL(file)
    let root = document.getElementById("root")
    let anchor = document.createElement("a")
    anchor.href = url
    anchor.download = "Junaid Parkar Resume"
    root.appendChild(anchor)
    anchor.click()
}