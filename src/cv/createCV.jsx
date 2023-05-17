import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { app } from './firebaseConfig';


export const createCV = async () => {
  try {
    const storageRef = ref(getStorage(app), "Resume - Junaid Parkar.pdf");
    const url = await getDownloadURL(storageRef);
    const response = await fetch(url);
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = "Junaid Parkar Resume.pdf";
    a.click();
  } catch (error) {
    console.log("Error downloading file:", error);
  }
    
};
 