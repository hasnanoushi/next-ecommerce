import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (<>
 
 <div> 
   <img src={"bb.jpeg"} height={600}width={1295}></img>
    </div>
  <div className="flexx">
  <img src={"alex.jpg"} height={200}width={160}></img>
  <img src={"amaz.jpg"} height={200}width={160}></img>
  <img src={"book.jpg"} height={200}width={160}></img>
  <img src={"tv.jpg"} height={200}width={160}></img>
  <img src={"elec.jpg"} height={200}width={160}></img>
  <img src={"fash.jpg"} height={200}width={160}></img>
  <img src={"mob.jpg"} height={200}width={160}></img>
  <img src={"daily.jpg"} height={200}width={160}></img>
  </div>
   
   </>
  );
}
