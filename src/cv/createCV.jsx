import { getStorage, ref, getDownloadURL, getBlob } from 'firebase/storage';
import { app } from './firebaseConfig';


export const createCV = async () => {
  try {
    const storageRef = ref(getStorage(app), "Resume - Junaid Parkar.zip");
    const blob = await getBlob(storageRef);
    const anchor = document.createElement('a');
    anchor.href = URL.createObjectURL(blob);
    anchor.download = 'Junaid parkar resume.zip';
    anchor.click();
    URL.revokeObjectURL(anchor.href);
    anchor.remove();
  } catch (error) {
    console.log("Error downloading file:", error);
  }
};
 