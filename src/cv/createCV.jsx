export const createCV = async (e) => {
  e.preventDefault();
  const cvUrl = "https://firebasestorage.googleapis.com/v0/b/junaidparkar-f7e41.appspot.com/o/Resume%20-%20Junaid%20Parkar.pdf?alt=media&token=8835a183-ed78-4ebc-91d9-26ada2e4157f";
  
  try {
    const response = await fetch(cvUrl);
    const fileData = await response.blob();
    const url = window.URL.createObjectURL(fileData);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Junaid Parkar Resume";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    alert(error)
  }
};
